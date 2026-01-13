import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAppContext } from "../context/appContext";
import LoginLayout, { Input } from "../components/loginLayout";
import { API_URL } from "../apis/apiurl";

const Login = () => {
  const { setPopupMessage } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const hasRedirected = useRef(false);

  const loginUser = async ({ email, password }) => {
    const response = await fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          mutation LoginUser {
            loginUser(email: "${email}", password: "${password}") {
              email
              token
              role
              isVerified
            }
          }
        `,
      }),
    });
    const data = await response.json();
    if (data.errors) {
      const error = JSON.parse(data.errors[0].message);
      setPopupMessage(error?.message);
      throw new Error(error?.message);
    }
    return data.data.loginUser;
  };

  const { mutate, data, isPending, error } = useMutation({
    mutationFn: loginUser,
  });

  useEffect(() => {
    // Prevent multiple redirects
    if (hasRedirected.current) return;

    if (data?.role === "admin" && data?.isVerified) {
      hasRedirected.current = true;
      const payload = encodeURIComponent(JSON.stringify(data));
      const storageType = rememberMe ? "localStorage" : "sessionStorage";
      window.location.href = `https://admin.maximalsecurityservices.com/?storageType=${storageType}&data=${payload}`;
    }
    // management
    else if (data?.role === "management") {
      hasRedirected.current = true;
      const payload = encodeURIComponent(JSON.stringify(data));
      const storageType = rememberMe ? "localStorage" : "sessionStorage";
      window.location.href = `https://management.maximalsecurityservices.com/?storageType=${storageType}&data=${payload}`;
    }
    // client
    else if (data?.role === "client") {
      hasRedirected.current = true;
      const payload = encodeURIComponent(JSON.stringify(data));
      const storageType = rememberMe ? "localStorage" : "sessionStorage";
      window.location.href = `https://client.maximalsecurityservices.com/?storageType=${storageType}&data=${payload}`;
    }
    // else
    else if (data) {
      setPopupMessage("Wrong credentials");
    }
  }, [data, rememberMe, setPopupMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) mutate({ email, password });
  };

  return (
    <LoginLayout
      error={error?.message}
      loading={isPending}
      onSubmit={handleSubmit}
      title='Login'
      subtitle='Glad you’re back!'
      actionText='Log In'
      links={{ register: "/role", forgot: "/resetpassword" }}
    >
      <Input
        type='email'
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className='flex items-center'>
        <input
          type='checkbox'
          id='remember-me'
          className='mr-2'
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor='remember-me' className='text-sm'>
          Remember me
        </label>
      </div>
    </LoginLayout>
  );
};

export default Login;

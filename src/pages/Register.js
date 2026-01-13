import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginLayout, { Input } from "../components/loginLayout";
import { API_URL } from "../apis/apiurl";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import PopupModel from "../components/model/popupModel";

const Register = () => {
  const { setPopupMessage } = useAppContext();
  const [searchParams] = useSearchParams();
  const roleBySearchParams = searchParams.get("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (!roleBySearchParams) {
      navigate("/role");
    }
  }, [roleBySearchParams]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: roleBySearchParams,
    company: "",
    city: "",
    state: "",
    zipCode: "",
    streetAddress: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      setError("Passwords do not match");
      setPopupMessage("Passwords do not match");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/graphql`,
        {
          query: `mutation RegisterUser($firstName: String, $lastName: String, $email: String, $password: String, $role: String, $phone: String, $company: String, $city: String, $state: String, $zipCode: String, $streetAddress: String, $address: String) { 
            registerUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role, phone: $phone, company: $company, city: $city, state: $state, zipCode: $zipCode, streetAddress: $streetAddress, address: $address) { 
              id 
              firstName 
              lastName 
              email 
              phone 
              role 
              company 
              city 
              state 
              zipCode 
              status 
              streetAddress 
              address 
            }
          }`,
          variables: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            role: roleBySearchParams,
            phone: formData.phone,
            company: formData.company,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            streetAddress: formData.streetAddress,
            address: formData.streetAddress,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.data.registerUser) {
        setPopupMessage("Registration successful!");
        setTimeout(() => navigate("/"), 2000);
      }else{
        
        setPopupMessage("This email is already in use. Please try a different email.");
      }

      
        

    } catch (err) {
      setPopupMessage(
        err.response?.data?.errors?.[0]?.message || "Registration failed"
      );
      alert("failed")
    } finally {
      setLoading(false);
      console.log("response",)
      // setPopupMessage(
      //   errors.response?.data?.errors?.[0]?.message || "Registration failed"
      // );
    }
  };

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  return (
    <LoginLayout
      error={error}
      loading={loading}
      onSubmit={handleSubmit}
      title={`${capitalizeFirstLetter(
        roleBySearchParams
      )} Registration`}
      actionText="Register"
      links={{ login: "/" }}
    >
      <PopupModel />
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {roleBySearchParams === "client" && (
          <Input
            name="company"
            label="Company Name"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        )}
        <Input
          name="streetAddress"
          label="Street Address"
          placeholder="Enter your street address"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />
        {/* <Input
          name="address"
          placeholder="Additional Address"
          value={formData.address}
          onChange={handleChange}
        /> */}
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            name="city"
            label="City"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Input
            name="state"
            label="State"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <Input
            name="zipCode"
            label="Zip Code"
            placeholder="Enter your zip code"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="cpassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </LoginLayout>
  );
};

export default Register;

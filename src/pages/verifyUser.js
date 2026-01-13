import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../apis/apiurl";
import { Loader2 } from "lucide-react";

const VERIFY_EMAIL_MUTATION = `
  mutation VerifyEmail($userId: ID! ) {
    verifyEmail(userId: $userId) {
      success
      message
    }
  }
`;

const verifyEmailRequest = async ({ userId }) => {
  const response = await fetch(`${API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: VERIFY_EMAIL_MUTATION,
      variables: { userId },
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message || "GraphQL error");
  }
  return result.data.verifyEmail;
};

const VerifyEmail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, data, error } = useMutation({
    mutationFn: verifyEmailRequest,
    onSuccess: (response) => {
      if (response.success) {
        setTimeout(() => navigate("/login"), 2000);
      }
    },
  });

  useEffect(() => {
    if (userId) {
      mutate({ userId });
    }
  }, [userId, mutate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg text-center">
        {isPending ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
            <p className="text-gray-700">Verifying your email...</p>
          </div>
        ) : isError ? (
          <p className="text-red-600">{error.message}</p>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800">
              {data?.success ? "Email Verified!" : "Verification Failed"}
            </h2>
            <p className="text-gray-600 mt-2">{data?.message}</p>
            {data?.success && (
              <p className="text-green-600 mt-4">Redirecting to login...</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;

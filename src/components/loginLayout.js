import React from "react";
import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const LoginLayout = ({
  error,
  loading,
  onSubmit,
  children,
  title,
  subtitle,
  actionText,
  links = {},
}) => {
  const { setShowSignUp } = useAppContext();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex justify-center w-full h-screen font-alice">
      <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
        {/* Left Section (Logo) */}
        <div className="h-[30%] md:h-full md:w-[70%] flex items-center justify-center relative bg-white">
          <img
            src={logo}
            alt="Logo"
            className="h-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        {/* Right Section (Form) - Updated to match design */}
        <div
          className={`flex flex-col justify-center items-center w-full h-full md:w-[36%] bg-[#004175] p-5 relative overflow-auto ${
            pathname.includes("/register") && "md:pt-0 pt-[22rem] "
          }`}
        >
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 px-8 shadow-lg">
              {/* Title and Subtitle */}
              <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold text-[#004175] mb-2">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-gray-600 text-sm">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-4">
                {children}
                
                {/* Forgot Password Link */}
                {links.forgot && pathname !== "/resetpassword" && (
                  <div className="flex justify-end">
                    <Link
                      to={links.forgot}
                      className="text-[#004175] text-sm hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                {/* Action Button */}
                {actionText && (
                  <ActionButton
                    loading={loading}
                    actionText={actionText}
                    className="w-full"
                  />
                )}
              </form>

              {/* Bottom Links */}
              <div className="mt-4 text-right space-y-2">
                {pathname === "/resetpassword" && (
                  <div className="flex justify-end">
                  <Link to="/" className="block text-[#004175] hover:underline">
                    Back to Login
                  </Link>
                  </div>
                )}
                {links.register && (
                  <div className="text-gray-600  text-sm">
                    <Link
                      to={links.register}
                      onClick={() => setShowSignUp(true)}
                      className="text-[#004175] hover:underline "
                    >
                    Don't have an account?{" "}<span className="font-semibold">Sign Up</span>
                     
                    </Link>
                  </div>
                )}
                {links.login && (
                  <div className="text-gray-600 text-sm">
                    <Link
                      to={links.login}
                      onClick={() => setShowSignUp(false)}
                      className="text-[#004175] hover:underline "
                    >
                    Already have an account?{" "}<span className="font-semibold">Login</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Input = ({ className, ...props }) => (
  <div className="space-y-1 w-full">
    <label className="block text-sm font-medium text-gray-700">
      {props.label || (props.type === 'email' ? 'Email' : props.type === 'password' ? 'Password' : '')}
    </label>
    <input
    style={{border: '1px solid #E0E0E0'}}
      className={`w-full px-3 py-2 text-sm border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004175] ${className}`}
      {...props}
    />
  </div>
);

export default LoginLayout;

export const LoginButtons = ({ loading, actionText, to }) => (
  <div>
    <Link to={to}>
      <div
        disabled={loading}
        className="w-full bg-[#0078b4] border-2 border-white text-white px-4 py-2 rounded-lg capitalize hover:bg-[#005f8f] disabled:opacity-50"
      >
        {loading ? "Loading..." : actionText}
      </div>
    </Link>
  </div>
);

export const ActionButton = ({ loading, actionText, className, ...props }) => (
  <button
    type="submit"
    disabled={loading}
    {...props}
    className={`w-full bg-[#004175] text-white px-4 py-2 rounded-md font-medium text-md hover:bg-[#003366] focus:outline-none focus:ring-2 focus:ring-[#004175] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${className}`}
  >
    {loading ? "Loading..." : actionText}
  </button>
);

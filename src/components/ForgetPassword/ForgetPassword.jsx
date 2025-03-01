import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./ForgetPassword.module.css";
import axios from "axios";
export default function ForgetPassword() {
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Verify Code, Step 3: Reset Password
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Step 1: Send Forgot Password Request
  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email }
      );
      setMessage("Reset code sent to your email.");
      setStep(2); // Move to Verify Code Step
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  // Step 2: Verify Reset Code
  const handleVerifyCode = async () => {
    setLoading(true);
    try {
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode }
      );
      setMessage("Code verified! You can now reset your password.");
      setStep(3); // Move to Reset Password Step
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid code");
    }
    setLoading(false);
  };

  // Step 3: Reset Password
  const handleResetPassword = async () => {
    setLoading(true);
    try {
      await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        { email, newPassword },
        (window.location.href = "/login")
      );
      setMessage("Password reset successful! You can now log in.");
      setStep(1); // Reset to first step
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray shadow-lg rounded-lg my-12">
      <h2 className="text-xl font-bold text-center mb-4">
        {step === 1
          ? "Forgot Password"
          : step === 2
          ? "Verify Code"
          : "Reset Password"}
      </h2>

      {message && (
        <div
          class="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">{message}</span>{" "}
        </div>
      )}

      {step === 1 && (
        <>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your email
            </label>
          </div>

          <button
            onClick={handleForgotPassword}
            disabled={loading}
            className="w-full mt-5 bg-main text-white p-2 rounded"
          >
            {loading ? "Sending..." : "Send Reset Code"}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Enter verification code
            </label>
          </div>
          <button
            onClick={handleVerifyCode}
            disabled={loading}
            className="w-full bg-main text-white p-2 rounded"
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Enter new password
            </label>
          </div>
          <button
            onClick={handleResetPassword}
            disabled={loading}
            className="w-full bg-main text-white p-2 rounded"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </>
      )}
    </div>
  );
}

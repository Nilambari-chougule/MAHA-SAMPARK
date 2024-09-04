import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function OtpLogin() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate(); // Use navigate to redirect

  const sendOtp = (e) => {
    e.preventDefault();
    console.log('OTP sent to:', mobileNumber);
    setOtpSent(true);
  };

  const handleOtpChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    console.log('OTP entered:', otpCode);

    // Assuming the OTP is verified successfully, navigate to the home page
    navigate('/home');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100" >
      {/* Logo and Headline */}
      <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">
      <span className="text-orange-500">महा</span>{' '}
      <span className="text-green-500">SAMPARK</span>
    </h1>
      </div>

      {/* OTP Login Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">OTP Login</h2>
        {!otpSent ? (
          <form onSubmit={sendOtp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your mobile number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter OTP
              </label>
              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    className="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring focus:border-green-300"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OtpLogin;

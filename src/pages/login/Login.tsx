import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const credential = localStorage.getItem("credential");
  const decoded: any = credential ? jwtDecode(credential) : null;

  const handleLogout = () => {
    localStorage.removeItem("credential");
    window.location.reload(); 
  };

  return (
    <GoogleOAuthProvider clientId="809128346511-t04v2cv3v7cfd8lo85afvos8s1d6bhgk.apps.googleusercontent.com">
      <div className="container mx-auto flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-sm text-center space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
          {!decoded ? (
            <>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Sign in
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Please continue with your Google account
              </p>
              <div className="flex justify-center">
                <GoogleLogin
                  size="large"
                  onSuccess={(credentialResponse) => {
                    localStorage.setItem(
                      "credential",
                      credentialResponse.credential || ""
                    );
                    window.location.reload();
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <img
                src={decoded.picture}
                alt={decoded.name}
                className="w-20 h-20 rounded-full mx-auto border-2 border-gray-300 dark:border-gray-600 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {decoded.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{decoded.email}</p>
              <button
                onClick={handleLogout}
                className="cursor-pointer mt-4 px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default React.memo(Login);

import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { googleLogin } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "../index.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  if (token) {
    return <Navigate to="/" replace />;
  }

  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    setLoading(true);

    const toastId = toast.loading("Signing you in...");

    try {
      const data = await googleLogin(credentialResponse.credential);

      login(data.user, data.token);

      toast.success("You Logged In!", {
        id: toastId,
      });

      navigate("/");
    } catch {
      toast.error("Login Failed", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`login_page min-h-screen flex justify-center items-center bg-slate-100 ${
          loading ? "pointer-events-none select-none" : ""
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl p-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-900">
                TalentHub
              </h1>
              <p className="text-xs text-slate-500">
                Find Your Dream Career{" "}
              </p>
            </div>
          </div>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => toast.error("Login Failed")}
          />
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"></div>
      )}
    </>
  );
};

export default Login;

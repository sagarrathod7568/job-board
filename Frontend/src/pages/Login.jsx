import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { googleLogin } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      const data = await googleLogin(credentialResponse.credential);

      login(data.user, data.token);

      toast.success("Logged In!");

      navigate("/");
    } catch {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white rounded-xl shadow-xl p-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            T
          </div>

          <div>
            <h1 className="font-bold text-xl text-slate-900 dark:text-white">
              TalentHub
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Find Your Dream Career
            </p>
          </div>
        </div>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => toast.error("Login Failed")}
        />
      </div>
    </div>
  );
};

export default Login;

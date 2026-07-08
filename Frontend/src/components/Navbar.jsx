import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
    }`;

  const goToHome = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setProfileOpen(false);
    navigate("/login", { replace: true });
    toast.success("Logged out!");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <NavLink to="/" onClick={goToHome} className="flex items-center gap-2">
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
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end onClick={goToHome} className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>

          <NavLink to="/saved" className={navLinkClass}>
            Saved Jobs
          </NavLink>

          <NavLink to="/applied" className={navLinkClass}>
            Applied Jobs
          </NavLink>
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <NavLink
            to="/post-job"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            Post Job
          </NavLink>
          {user && (
            <div className="relative">
              <button
                className="mt-1.5"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl z-50">
                  <div className="p-4 border-b border-slate-300 dark:border-slate-700">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-14 h-14 rounded-full mx-auto border border-slate-300 dark:border-slate-700"
                    />

                    <h2 className="text-center mt-3 font-semibold">
                      {user.name}
                    </h2>

                    <p className="text-center text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full py-3 text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 rounded-b-xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Buttons */}

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>

          <button
            className="text-3xl text-slate-800 dark:text-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800">
          <nav className="flex flex-col p-5 gap-5 text-slate-700 dark:text-slate-200">
            <NavLink to="/" onClick={goToHome}>
              Home
            </NavLink>

            <NavLink to="/jobs" onClick={() => setMobileOpen(false)}>
              Jobs
            </NavLink>

            <NavLink to="/saved" onClick={() => setMobileOpen(false)}>
              Saved Jobs
            </NavLink>

            <NavLink to="/applied" onClick={() => setMobileOpen(false)}>
              Applied Jobs
            </NavLink>

            <NavLink
              to="/post-job"
              onClick={() => setMobileOpen(false)}
              className="bg-blue-600 text-white rounded-lg py-3 text-center"
            >
              Post Job
            </NavLink>
            <div className="flex">
              <img
                src={user.picture}
                alt={user.name}
                className="w-14 h-14 rounded-full  border border-slate-300 dark:border-slate-700"
              />
              <button
                onClick={handleLogout}
                className="p-3 text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 rounded-b-xl"
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

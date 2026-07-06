const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold">TalentHub JobBoard</h3>
        <p className="text-gray-400 mt-2">
          Find Your Next Opportunity
        </p>
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} TalentHub JobBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
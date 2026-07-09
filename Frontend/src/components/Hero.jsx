import SearchBar from "./SearchBar";

const Hero = ({ onSearch }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
          Discover 1000+ Jobs from Top Companies 🚀
        </span>

        <h1 className="text-5xl font-bold leading-tight">
          ✨Find Your
          <span className="text-yellow-300"> Dream Job</span>
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-blue-100">
          Search thousands of verified jobs from top companies across India.
          Find your next opportunity in just a few clicks.
        </p>

        <div className="mt-10">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 rounded-xl p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">1200+</h2>
            <p className="text-blue-100 mt-2">Live Jobs</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">350+</h2>
            <p className="text-blue-100 mt-2">Companies</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">15K+</h2>
            <p className="text-blue-100 mt-2">Candidates</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">98%</h2>
            <p className="text-blue-100 mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

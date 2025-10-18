export default function About() {
  return (
    <div className="min-h-screen flex items-center px-4 py-20 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-emerald-300 mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Binary Blasters was founded with a mission to empower startups and businesses with cutting-edge digital solutions. We believe every great idea deserves to be transformed into reality through innovative technology and thoughtful design.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-emerald-300 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower startups and businesses worldwide with modern, innovative, and efficient digital solutions — turning ideas into reality through web, mobile, and design excellence.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To be recognized as a trusted global tech agency delivering cutting-edge digital experiences and solutions that help businesses grow and thrive in the digital age.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-emerald-300 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Expert Team', 'Global Reach', 'Quality First'].map((item) => (
            <div key={item} className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-lg font-bold text-emerald-300 mb-2">{item}</h3>
              <p className="text-gray-400">Dedicated professionals committed to excellence in every project.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
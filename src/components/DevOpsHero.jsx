export default function DevOpsHero() {
  return (
    <section id="home" className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Sushant Sonbarse
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-8 font-light">
          DevOps & Site Reliability Engineer
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-400">
          I build and maintain scalable, secure, and automated cloud-native solutions. With over a year of hands-on experience, I specialize in infrastructure as code, CI/CD pipelines, and container orchestration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/sushant_sonbarse_resume.pdf" download 
             className="group px-8 py-4 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
          </a>
          <a href="#contact" 
             className="group px-8 py-4 border-2 border-gray-600 rounded-lg text-gray-300 font-semibold hover:bg-gray-800 hover:border-gray-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
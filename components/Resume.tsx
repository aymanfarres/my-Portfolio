const ResumeDownload: React.FC = () => {
    return (
      <section className="relative text-white text-center mt-20">
        <h2 className="text-3xl font-semibold mb-4">Download My Resume</h2>
        <p className="text-lg mb-8">Interested in learning more about my skills and experience? Click below to download my resume.</p>
        <a 
          href="/cv.pdf" 
          download="cv.pdf"
          className="inline-block bg-[#39FF14] text-[#1A1A1A] py-3 px-6 rounded-lg shadow-lg transition-all duration-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Download Resume
        </a>
        <p className="text-lg my-8">By the way this is my email: <span className="font-bold text-2xl text-[#39FF14] font-par">aymanefarres6@gmail.com</span></p>
      </section>
    );
  };
  
  export default ResumeDownload;
  
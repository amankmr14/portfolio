const ContactForm = () => {
  return (
    <section id="contactme" className="p-6 px-52 sm:px-16 xl:px-80">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-6">
          <form className="space-y-4 px-12">
            <div>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-2 border ring-transparent border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Your website (If exists)" 
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <textarea 
                placeholder="How can I help?*" 
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
              >
                Get In Touch
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-bold">
            Let’s <span className="text-outline">talk</span> for<br /> Something special
          </h2>
          <p className="mt-4 text-gray-700 text-sm">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          <p className="mt-4 text-gray-700">
            amankmr765@gmail.com<br />
            +91-9263069653
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
        }
      ).then(() => {
        toast.success("Mail Sent!");
        setLoading(false);
        form.current?.reset();
      },
        (error) => {
          console.error("Error!", error.text);
          toast.error("Something went wrong!")
          setLoading(false);
        }
      )
    }
  }

  return (
    <section id="contactme" className="p-6 lg:px-52 sm:px-16 xl:px-80">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-6">
          <form className="space-y-4 sm:px-4 lg:px-12" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                className="w-full px-4 py-2 border ring-transparent border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="from_website"
                placeholder="Your website (If exists)"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="How can I help?"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
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

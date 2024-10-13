export default function Contact() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <section className="contact-section bg-gray-100 p-6">
        <div className="contact-details max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
          Khan's Blog
Baba Hassan St, near Quraishi masjid, Sector 11-D Sector 11 D New Karachi Town, Karachi, Karachi City, Sindh
          </p>

          <p className="phone mb-2">
            <span role="img" aria-label="phone">&#128222;</span>{" "}
            <a
              href="https://wa.me/923481341392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>

          <p className="email mb-4">
            <span role="img" aria-label="email">&#9993;</span>{" "}
            <a
              href="mailto:kshahmeer10@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Send us an email
            </a>
          </p>

          <div className="social-icons flex space-x-4">
            <a
              href="https://www.facebook.com/kshahmeer10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <i className="fab fa-facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/kshahmeer10/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/923481341392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              <i className="fab fa-whatsapp"></i>
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shahmeer-khan-96b1a42b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <i className="fab fa-linkedin"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@shahmeerkhan7050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <i className="fab fa-youtube"></i>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>

        <div className="map-container mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.5536566227017!2d67.07861615563995!3d24.9829063314502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341c0fa91c57b%3A0x4998f85bfe5a794a!2sKhan&#39;s%20tuition!5e0!3m2!1sen!2s!4v1728755649524!5m2!1sen!2s"
            width="600"
            height="450"
            className="border-4 w-full rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         
        </div>
      </section>
    </>
  );
}

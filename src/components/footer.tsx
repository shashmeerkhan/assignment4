export default function Footer() {
  return (
    <footer className="w-full py-6 bg-blue-200 text-black text-center relative bottom-0">
      <p className="text-sm font-bold">© 2024 KHANS BLOG. All rights reserved.</p>

      {/* Load Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://www.facebook.com/kshahmeer10"
          target="_blank"
          aria-label="Facebook"
          className="text-3xl hover:text-blue-600 transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://github.com/shashmeerkhan"
          target="_blank"
          aria-label="Instagram"
          className="text-3xl hover:text-pink-500 transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://wa.me/923481341392"
          target="_blank"
          aria-label="WhatsApp"
          className="text-3xl hover:text-green-500 transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shahmeer-khan-96b1a42b4/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-3xl hover:text-blue-700 transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
        href="https://www.youtube.com/@shahmeerkhan7050"
          target="_blank"
          aria-label="YouTube"
          className="text-3xl hover:text-red-600 transition duration-300 transform hover:-translate-y-1"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}

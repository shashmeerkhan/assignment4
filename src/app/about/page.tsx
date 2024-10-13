import Image from "next/image";
import mypic from "../public/my pic.webp"; // Ensure correct casing in the folder path

export default function About() {
  return (
    <>
      <section className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center mb-6">
          This is a sample page for the About Us section.
        </p>

        <div className="text-center mb-8">
          <p className="text-xl font-semibold mb-2">Contact Information:</p>
          <ul className="list-none">
            <li className="mb-1">📞 Phone: 03481341392</li>
            <li className="mb-1">✉️ Email: kshahmeer10@gmail.com</li>
            <li>🏢 Address: 123 Main St, City, State, ZIP</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <Image
              src={mypic}
              alt="Team Member 1"
              height={200}
              width={150}
              className="mx-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Team Member 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="text-center">
          <Image
              src={mypic}
              alt="Team Member 1"
              height={200}
              width={150}
              className="mx-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Team Member 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="text-center">
          <Image
              src={mypic}
              alt="Team Member 1"
              height={200}
              width={150}
              className="mx-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Team Member 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="text-center">
          <Image
              src={mypic}
              alt="Team Member 1"
              height={200}
              width={150}
              className="mx-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Team Member 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </>
  );
}

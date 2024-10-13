import Image from "next/image";
import jas from "../pics/java.png";

export default function Js() {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-center mt-6">
          Introduction to JavaScript: The Brain Behind Web Interactivity
        </h1>
      </header>

      <section className="p-6">
        <Image
          src={jas}
          alt="JavaScript Logo"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <p className="text-lg mt-4">
          JavaScript (JS) is one of the most popular and versatile programming languages used in web development. While HTML gives structure to a web page, and CSS adds style, <strong>JavaScript</strong> brings a website to life by adding interactivity. It is used to create dynamic content, control multimedia, animate images, and handle user inputs, making web pages much more engaging and functional.
        </p>
        <p className="mt-2">
          In this blog, we’ll explore what JavaScript is, why it’s important, and how you can start using it to make your web pages interactive.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold">What is JavaScript?</h2>
        <p className="mt-2">
          JavaScript is a <strong>programming language</strong> that runs in the browser and enables you to create interactive websites. It can modify the structure and style of a webpage after it has been loaded, respond to user actions (like clicks, input, or scrolling), and even communicate with servers without reloading the page (AJAX).
        </p>
        <p className="mt-2">
          Heres a simple JavaScript example that displays an alert when the webpage loads:
        </p>

        <pre className="bg-gray-100 p-4 mt-4 rounded">
          <code>
            &lt;!DOCTYPE html&gt; <br />
            &lt;html lang=en&gt;<br />
            &nbsp;&lt;head&gt;<br />
            &nbsp;&nbsp;&lt;title&gt;JavaScript Example&lt;/title&gt;<br />
            &nbsp;&lt;/head&gt;<br />
            &nbsp;&lt;body&gt;<br />
            &nbsp;&nbsp;&lt;h1&gt;Welcome to JavaScript&lt;/h1&gt;<br />
            &nbsp;&nbsp;&lt;script&gt;<br />
            &nbsp;&nbsp;&nbsp;alert(Hello, welcome to JavaScript!);<br />
            &nbsp;&nbsp;&lt;/script&gt;<br />
            &nbsp;&lt;/body&gt;<br />
            &lt;/html&gt;
          </code>
        </pre>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold">Why Learn JavaScript?</h2>
        <ul className="list-disc list-inside mt-4">
          <li><strong>Interactivity</strong>: JavaScript enables you to create interactive elements on your website, such as buttons, forms, sliders, and games.</li>
          <li><strong>Control</strong>: With JavaScript, you can dynamically update content on a webpage without reloading it, allowing for a smoother and faster user experience.</li>
          <li><strong>Compatibility</strong>: JavaScript is supported by all major web browsers (Chrome, Firefox, Safari, Edge, etc.), making it accessible for almost every web user.</li>
          <li><strong>Extensibility</strong>: JavaScript can be used beyond the browser. Technologies like Node.js allow developers to use JavaScript for backend development, and frameworks like React and Angular extend its capabilities for building powerful web applications.</li>
          <li><strong>Rich Ecosystem</strong>: JavaScript has a vast number of libraries and frameworks that speed up the development process and make coding easier.</li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold">JavaScript Syntax Basics</h2>
        <p className="mt-2">To start with JavaScript, you need to know a few basic concepts. Here’s an overview:</p>

        <h3 className="text-xl font-semibold mt-4">Variables:</h3>
        <p className="mt-2">Variables in JavaScript store data. You can declare a variable using <code>let</code>, <code>const</code>, or <code>var</code> (though <code>let</code> and <code>const</code> are preferred in modern JavaScript).</p>

        <pre className="bg-gray-100 p-4 mt-4 rounded">
          <code>
            let message = Hello, World!;<br />
            const pi = 3.14;
          </code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Data Types:</h3>
        <p className="mt-2">JavaScript supports multiple data types including:</p>
        <ul className="list-disc list-inside mt-4">
          <li><strong>String</strong> (e.g., Hello)</li>
          <li><strong>Number</strong> (e.g., 3.14, 42)</li>
          <li><strong>Boolean</strong> (e.g., true, false)</li>
          <li><strong>Array</strong> (e.g., [1, 2, 3])</li>
          <li><strong>Object</strong> (e.g., {`{name: 'John', age: 30}`})</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Functions:</h3>
        <p className="mt-2">Functions in JavaScript are blocks of code designed to perform a particular task. They can take inputs (called <strong>parameters</strong>) and return outputs.</p>

        <pre className="bg-gray-100 p-4 mt-4 rounded">
          <code>
            function greet(name) &#123;<br />
            &nbsp;&nbsp;return Hello,  + name;<br />
            &#125;<br />
            let message = greet(Alice);<br />
            console.log(message); // Output: Hello, Alice
          </code>
        </pre>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2">JavaScript is a must-learn language for anyone interested in web development. It brings interactivity, logic, and dynamic functionality to web pages, making them more engaging for users. With frameworks like React, Angular, and Vue, JavaScript continues to dominate the world of modern web development. Start learning JavaScript today and unlock the potential to create responsive, interactive, and dynamic web applications.</p>
        <p className="font-bold mt-4">Happy Coding!</p>
      </section>
    </>
  );
}

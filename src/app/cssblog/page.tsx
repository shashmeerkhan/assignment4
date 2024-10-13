import Image from "next/image";
import css from "../public/css.webp";

export default function Css() {
  return (
    <>
      <header>
        <h1>Introduction to CSS: Designing the Web with Style</h1>
      </header>

      <section>
        <Image
          className="rounded-xl"
          src={css}
          alt="CSS illustration"
          width={550}
          height={400}
        />
        <p>
          CSS (Cascading Style Sheets) is a language that controls the presentation of web pages. While HTML structures the content, CSS styles it by adding colors, layouts, fonts, and more, making websites visually appealing. Whether youre a beginner or a seasoned developer, mastering CSS is crucial for creating modern, responsive, and beautiful web designs.
        </p>
        <p>
          In this blog, we will dive into the basics of CSS, how it works, and why its an essential part of web development.
        </p>
      </section>

      <section>
        <h2>What is CSS?</h2>
        <p>
          CSS is a stylesheet language used to describe how HTML elements should be displayed on a screen, paper, or other media. It allows you to control the layout, color, typography, and overall aesthetic of your web pages without altering the HTML structure.
        </p>
        <p>Heres an example of how CSS works with HTML:</p>
        <pre>
          <code>
            &lt;!DOCTYPE html&gt;
            <br />
            &lt;html lang=en&gt;
            <br />
            &lt;head&gt;
            <br />
            &nbsp;&nbsp;&lt;title&gt;My CSS Example&lt;/title&gt;
            <br />
            &nbsp;&nbsp;&lt;style&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;body &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightblue;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family: Arial, sans-serif;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;h1 &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: darkblue;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;p &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: darkgray;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&lt;/style&gt;
            <br />
            &lt;/head&gt;
            <br />
            &lt;body&gt;
            <br />
            &nbsp;&nbsp;&lt;h1&gt;Welcome to My CSS Example&lt;/h1&gt;
            <br />
            &nbsp;&nbsp;&lt;p&gt;This is a paragraph styled with CSS.&lt;/p&gt;
            <br />
            &lt;/body&gt;
            <br />
            &lt;/html&gt;
          </code>
        </pre>
      </section>

      <section>
        <h2>Why Learn CSS?</h2>
        <ul>
          <li>
            <strong>Separation of Design and Content:</strong> CSS allows you to keep the design (style) separate from the content (HTML), making your code more organized and easier to maintain.
          </li>
          <li>
            <strong>Customization:</strong> With CSS, you have full control over the look of your website, from the layout to specific elements like buttons or menus.
          </li>
          <li>
            <strong>Responsive Design:</strong> CSS enables you to create responsive websites that look great on all devices, from desktops to mobile phones.
          </li>
          <li>
            <strong>Efficiency:</strong> CSS can style multiple web pages at once by linking a single stylesheet, saving time and effort when updating designs.
          </li>
        </ul>
      </section>

      <section>
        <h2>CSS Syntax and Selectors</h2>
        <p>
          The basic structure of CSS includes <strong>selectors</strong>, <strong>properties</strong>, and <strong>values</strong>. A <strong>selector</strong> targets the HTML element you want to style, the <strong>property</strong> defines what you want to change (e.g., color, font size), and the <strong>value</strong> specifies the result.
        </p>
        <p>Heres a simple CSS rule:</p>
        <pre>
          <code>
            h1 &#123;
            <br />
            &nbsp;&nbsp;color: red;
            <br />
            &nbsp;&nbsp;font-size: 24px;
            <br />
            &#125;
          </code>
        </pre>
        <p>In this example:</p>
        <ul>
          <li><strong>h1</strong> is the selector, targeting all &lt;h1&gt; tags.</li>
          <li><strong>color</strong> and <strong>font-size</strong> are properties.</li>
          <li><strong>red</strong> and <strong>24px</strong> are the values.</li>
        </ul>

        <h3>Common Selectors:</h3>
        <ul>
          <li>
            <strong>Element Selector:</strong> Targets all instances of an HTML element (e.g., <code>p</code>, <code>h1</code>, <code>div</code>).
          </li>
          <li>
            <strong>Class Selector:</strong> Targets elements with a specific class. Example:
            <pre>
              <code>
                .example-class &#123; <br />
                &nbsp;&nbsp;color: green; <br />
                &#125;
              </code>
            </pre>
            HTML example:
            <pre>
              <code>
                &lt;p (class=example-class)&gt;This is a paragraph.&lt;/p&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>ID Selector:</strong> Targets a specific element by its unique ID. Example:
            <pre>
              <code>
                #example-id &#123; <br />
                &nbsp;&nbsp;background-color: yellow; <br />
                &#125;
              </code>
            </pre>
            HTML example:
            <pre>
              <code>
                &lt;div id=example-id&gt;This is a div.&lt;/div&gt;
              </code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h2>External CSS vs. Internal CSS</h2>
        <p>There are different ways to apply CSS to an HTML document:</p>
        <ol>
          <li>
            <strong>Inline CSS:</strong> CSS written directly within an HTML element using the <code>style</code> attribute.
            <pre>
              <code>&lt;p style=color: blue;&gt;This paragraph is blue.&lt;/p&gt;</code>
            </pre>
          </li>
          <li>
            <strong>Internal CSS:</strong> CSS written inside the <code>&lt;style&gt;</code> tag in the HTML <code>&lt;head&gt;</code> section.
            <pre>
              <code>
                &lt;style&gt; <br />
                &nbsp;&nbsp;p &#123; color: blue; &#125; <br />
                &lt;/style&gt;
              </code>
            </pre>
          </li>
          <li>
            <strong>External CSS:</strong> CSS written in a separate <code>.css</code> file and linked to the HTML document. This is the most efficient and scalable method for styling multiple web pages.
            <pre>
              <code>
                {/*  Create a file called styles.css */  }
                <br />
                body &#123; <br />
                &nbsp;&nbsp;background-color: white; <br />
                &nbsp;&nbsp;color: black; <br />
                &#125;
               
                <br />
                {/* Link it in your HTML */  }
                <br />
                &lt;link relstylesheet href=styles.css /&gt;
              </code>
            </pre>
          </li>
        </ol>
      </section>

      <section>
        <h2>CSS Box Model</h2>
        <p>
          The <strong>box model</strong> is a fundamental concept in CSS. Every HTML element is treated as a box, consisting of four parts:
        </p>
        <ol>
          <li><strong>Content:</strong> The actual content of the box (e.g., text or images).</li>
          <li><strong>Padding:</strong> Space between the content and the border.</li>
          <li><strong>Border:</strong> A line that surrounds the padding (optional).</li>
          <li><strong>Margin:</strong> Space outside the border, separating the element from others.</li>
        </ol>
        <p>Here is an example of how the box model works:</p>
        <pre>
          <code>
            div &#123; <br />
            &nbsp;&nbsp;width: 200px; <br />
            &nbsp;&nbsp;padding: 20px; <br />
            &nbsp;&nbsp;border: 5px solid black; <br />
            &nbsp;&nbsp;margin: 10px; <br />
            &#125;
          </code>
        </pre>
      </section>

      <section>
        <h2>Responsive Design with CSS</h2>
        <p>
          One of the most powerful features of CSS is its ability to create responsive designs. With media queries, you can apply different styles depending on the screen size or device type.
        </p>
        <p>Here is an example of a media query that adjusts styles for screens smaller than 768px:</p>
        <pre>
          <code>
            @media (max-width: 768px) &#123; <br />
            &nbsp;&nbsp;body &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px; <br />
            &nbsp;&nbsp;&#125; <br />
            &nbsp;&nbsp;h1 &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp;font-size: 18px; <br />
            &nbsp;&nbsp;&#125; <br />
            &#125;
          </code>
        </pre>
        <p>
          By using responsive design, your website will look good on any device, from mobile phones to desktop computers.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          CSS is the key to creating visually appealing and responsive websites. Whether youre designing a simple blog or a complex web application, mastering CSS will give you the ability to control every aspect of your sites appearance. As you become more comfortable with selectors, properties, and responsive design, youll unlock new possibilities for building beautiful web experiences.
        </p>
        <p><strong>Happy Styling!</strong></p>
      </section>
    </>
  );
}

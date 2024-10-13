import dm from "../Public/DM.webp";
import Image from "next/image";

export default function Dm() {
  return (
    <>
    <div className="bg-white pl-8 m-8">
        
      <h1 className="text-3xl font-bold text-center">The Power of Email Marketing: A Comprehensive Guide</h1>
      <div className="flex justify-center">
        <Image src={dm} alt="digital marketing" height={200} width={250} className="rounded-lg shadow-md" />
      </div>
      <h2 className="text-2xl font-semibold mt-6">What is Email Marketing?</h2>
      <p className="text-lg mt-2">Email marketing is a form of digital marketing that uses email to promote products or services to potential or existing customers.</p>

      <h2 className="text-2xl font-semibold mt-6">Why is Email Marketing Important?</h2>
      <p className="text-lg mt-2">Email marketing offers a direct and personalized way to engage with customers, build relationships, and drive conversions.</p>

      <h2 className="text-2xl font-semibold mt-6">Building and Growing Your Email Marketing Lists</h2>
      <ul className="list-disc mt-2">
        <li>Use CTAs on your website or landing pages</li>
        <li>Leverage social media</li>
        <li>Offer free downloads</li>
        <li>Use pop-ups or forms</li>
        <li>Run competitions</li>
        <li>Advertise special offers</li>
        <li>Offer a blog subscription</li>
        <li>Get customers involved</li>
        <li>Ask for feedback</li>
        <li>Host a webinar or podcast</li>
        <li>Create a newsletter</li>
        <li>Just ask!</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">How to Do Email Marketing: A Step-by-Step Guide</h2>
      <ol className="list-decimal mt-2">
        <li>Collate a list</li>
        <li>Choose an email marketing tool</li>
        <li>Plan an email workflow</li>
        <li>Plan a calendar</li>
        <li>Write email copy</li>
        <li>Press the send button</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">6 Beginner-Friendly Email Marketing Campaign Examples</h2>
      <ul className="list-disc mt-2">
        <li>Plochman's Welcome Email</li>
        <li>NerdWallet Nurture Email</li>
        <li>Apple Specific Audience Offer Email</li>
        <li>AutoTrader Re-Engagement Email</li>
        <li>Willo Event Invitation Email</li>
        <li>Airbnb New Product Email</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Email Marketing FAQs</h2>
      <ul className="list-disc mt-2">
        <li>When is the best time to send marketing emails?</li>
        <li>What is a good open rate for email marketing?</li>
        <li>What is A/B testing in email?</li>
        <li>How much does email marketing cost?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
      <p className="text-lg mt-2">Email marketing is a powerful tool for businesses of all sizes. By following these guidelines, you can create effective campaigns that drive results.</p>
    
    </div>
    </>
  );
}
import Cards from "@/components/cards";

export default function Home() {
  return (
    <>
      <div className="h-[2vh] w-[100vh]">
        <div className="pis">
          <div className="wave"> </div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
      <div className="hero-section">
     
     <h1>Welcome to KHAN'S BLOG</h1>
     <p>We provide quality education and information throw our blogs.</p>
     <a href="/blog" className="btn">Read now</a>
  </div>
      <div className="h-auto w-auto bg-white ">
        <Cards />
      </div>
    </>
  );
}

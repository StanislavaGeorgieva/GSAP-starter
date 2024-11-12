import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    // Animate h1
    gsap.fromTo(
      "h1",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "sine.inOut",
      }
    );

    // Animate paragraph
    gsap.fromTo(
      "p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "sine.inOut",
        delay: 1,
      }
    );

    // Animate button with additional delay
    gsap.fromTo(
      ".view-gallery-button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "sine.inOut",
        delay: 2, // Delay after the paragraph animation
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2019/04/20/22908-331768732_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Dip Pools LTD</h1>
        <p className="mt-4 text-lg text-gray-300">Explore more</p>
        
        {/* Button that appears after text */}
        <Link
          to="gallery"
          smooth={true}
          duration={800}
          className="view-gallery-button mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 cursor-pointer"
        >
          View Gallery
        </Link>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;



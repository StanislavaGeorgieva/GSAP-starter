import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Create the text animation for canvas
    function textSequence(config) {
      let playhead = { frame: 0 },
        canvas = document.querySelector(config.canvas),
        ctx = canvas.getContext("2d"),
        curFrame = -1,
        onUpdate = config.onUpdate;

      const updateText = function () {
        let frame = Math.round(playhead.frame);
        if (frame !== curFrame) {
          config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Clear the canvas before drawing new text
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Set text properties
          ctx.font = "bold 60px Arial";
          ctx.fillStyle = `rgba(255, 255, 255, ${config.opacity})`; // Set dynamic opacity
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Draw the text on the canvas based on the current frame
          const text = "Design Construction Maintenance";
          const textLength = text.length;
          const displayedText = text.slice(0, Math.round((frame / config.frames) * textLength));

          // Draw the partial text
          ctx.fillText(displayedText, canvas.width / 2, canvas.height / 2);

          curFrame = frame;
          onUpdate && onUpdate.call(this, frame);
        }
      };

      return gsap.to(playhead, {
        frame: config.frames - 1,
        ease: "none",
        onUpdate: updateText,
        duration: config.frames / (config.fps || 30),
        paused: !!config.paused,
        scrollTrigger: config.scrollTrigger,
      });
    }

    // Get the height of the About section to determine when to stop the animation
    const aboutSection = document.querySelector("#about");
    const aboutHeight = aboutSection.offsetHeight;

    // Call the text sequence function with the updated scrollTrigger configuration
    textSequence({
      canvas: "#image-sequence", // Canvas ID where the text will be drawn
      frames: 20, // Number of frames for text to animate
      opacity: 1, // Initial opacity of text
      scrollTrigger: {
        start: "top top", // Start at the very top
        end: `+=${aboutHeight}`, // End the animation when the About section ends
        scrub: true,
        pin: true, // Pin the canvas while scrolling
      },
    });

    // Create a fade-out effect for the text at the end of the About section
    gsap.to("#image-sequence", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#about",
        start: `top+=${aboutHeight * 0.7} top`, // Start fade-out near end of the About section
        end: "bottom top", // Finish fade-out as About section ends
        scrub: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" style={{ backgroundColor: "#000" }}>
      <canvas
        id="image-sequence"
        width="1158"
        height="770"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100vw",
          maxHeight: "100vh",
        }}
      />
      
      {/* Bento Grid Section */}
      <section className="w-screen overflow-hidden h-full common-padding bg-zinc ">
        <h2 className="text-content" style={{ color: "#fff", textAlign: "center", gridColumn: "span 3" }}>
          About Us
        </h2>
        
        <p style={{ color: "#fff", textAlign: "center", gridColumn: "span 3" }}>
          This is an interactive About section with a text animation on the canvas.
        </p>

        

        {/* Add more items here as needed */}
      </section>
    </div>
  );
};

export default About;


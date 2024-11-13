import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imageUrls } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
  useEffect(() => {
    // Selecting all gallery images
    const images = gsap.utils.toArray(".gallery-image");

    images.forEach((image) => {
      gsap.to(image, {
        x: 300, // Animation to move the image horizontally
        scrollTrigger: {
          trigger: image,
          start: "center 70%", // Trigger the animation when the image reaches the center of the viewport
          toggleActions: "play none none reset", // Play animation when triggered, reset on leave
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="gallery" className="overflow-hidden rounded-2xl grid gap-4 p-5 mt-10">
      <div className="gallery-row grid grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;

  
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = () => {
    useEffect(() => {
      const elements = gsap.utils.toArray(".animate-on-scroll");
  
      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 10%",
              scrub: 1,
            },
            duration: 2,
            ease: "power2.out",
            delay: index * 0.2,
          }
        );
      });
  
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);
  
    return (
      <section id="gallery" className="overflow-hidden rounded-2xl grid grid-cols-2 md:grid-cols-2 gap-4 p-5 mt-10">
        <img
          src="https://leisurepoolscanada.ca/wp-content/uploads/2023/09/060923-DesignTrends-Hero.webp"
          alt="Gallery Image 1"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://m.media-amazon.com/images/I/81DxhvCmBzL.jpg"
          alt="Gallery Image 2"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://www.risingsunpools.com/wp-content/uploads/2022/01/banner-1.jpg"
          alt="Gallery Image 3"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://swimply.imgix.net/thumbnails/1724102846741-IMG_0684.jpg"
          alt="Gallery Image 4"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://i.pinimg.com/736x/d6/08/1d/d6081d6d271ef33a73ff6c9e6f0328fe.jpg"
          alt="Gallery Image 5"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://bondaquatics.com/wp-content/uploads/2024/06/LP_Pinnacle_40_GG_Full_POV.webp"
          alt="Gallery Image 6"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://cdn.prod.website-files.com/5f9ba36c0d33360aa76a29db/5f9bab031557617b5229faba_banner.png"
          alt="Gallery Image 7"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
        <img
          src="https://www.klafs.com/media/_processed_/8/7/csm_SH44_1_2560x1600_882502a6b7.jpg"
          alt="Gallery Image 8"
          className="gallery-image animate-on-scroll w-full h-[70vh] object-cover"
        />
      </section>
    );
  };
  
  export default ImageGallery;
  
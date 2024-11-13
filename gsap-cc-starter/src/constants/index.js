import {

  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,

} from "../utils";

export const navLists = [ "About", "Services", "Gallery", "Contact us"];

export const imageUrls = [
    "https://leisurepoolscanada.ca/wp-content/uploads/2023/09/060923-DesignTrends-Hero.webp",
    "https://m.media-amazon.com/images/I/81DxhvCmBzL.jpg",
    "https://www.risingsunpools.com/wp-content/uploads/2022/01/banner-1.jpg",
    "https://swimply.imgix.net/thumbnails/1724102846741-IMG_0684.jpg",
    "https://i.pinimg.com/736x/d6/08/1d/d6081d6d271ef33a73ff6c9e6f0328fe.jpg",
    "https://bondaquatics.com/wp-content/uploads/2024/06/LP_Pinnacle_40_GG_Full_POV.webp",
    "https://cdn.prod.website-files.com/5f9ba36c0d33360aa76a29db/5f9bab031557617b5229faba_banner.png",
    "https://www.klafs.com/media/_processed_/8/7/csm_SH44_1_2560x1600_882502a6b7.jpg",
    "https://www.klafs.com/media/_processed_/8/7/csm_SH44_1_2560x1600_882502a6b7.jpg"
  ];

  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
"Built to last, designed to impress.",
        "Expert construction for pools that endure.",
        "Comprehensive maintenance, effortless enjoyment."
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: [  ],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Experience the ultimate in relaxation.",
        "Premium pool and spa designs for luxury living.",
        "Crafting your oasis, one detail at a time."
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: [  "Leave your dreams in our hands.",
        "Crafting pools that bring visions to life.",
        "From design to maintenance, we've got you covered."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
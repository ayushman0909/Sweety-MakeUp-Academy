import bridal01 from "../assets/images/galleryimage1.webp";
import bridal02 from "../assets/images/galleryimage2.webp";
import bridal03 from "../assets/images/galleryimage3.webp";
import makeup01 from "../assets/images/galleryimage4.webp";

import makeupReel from "../assets/videos/reel1.mp4";
import bridalReel from "../assets/videos/reel2.mp4";


const galleryData = [
  {
    id: 1,
    type: "video",
    src: makeupReel,
    title: "Bridal Elegance",
    category: "Bridal Makeup",
    size: "large",
  },

  {
    id: 2,
    type: "image",
    src: bridal02,
    title: "Timeless Beauty",
    category: "Bridal Look",
    size: "normal",
  },

  {
    id: 3,
    type: "image",
    src: bridal01,
    title: "The Art of Makeup",
    category: "Professional Makeup",
    size: "normal",
  },

  {
    id: 4,
    type: "image",
    src: bridal03,
    title: "Bridal Details",
    category: "Makeup Artistry",
    size: "normal",
  },

  {
    id: 5,
    type: "video",
    src: bridalReel,
    title: "Bridal Transformation",
    category: "Bridal Makeup",
    size: "large",
  },

  {
    id: 6,
    type: "image",
    src: makeup01,
    title: "Professional Finish",
    category: "Makeup",
    size: "normal",
  },

 
];

export default galleryData;
import React from "react";
import CarouselCard from "../src/components/ui/carousel_effect";
const ourprograms = [
  {
    title: "What We've Done",
    image: {
      src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
      alt: "Descriptive Alt Text",
    },
    paragraphs: [
      "Integrating visuals with corresponding text enhances user engagement and comprehension. Proper alignment and placement of images alongside text create a cohesive and aesthetically pleasing layout.",
      "Consistent margins and thoughtful use of white space contribute to a clean design, guiding readers through the content seamlessly.",
    ],
    button: {
      text: "Learn More",
      link: "#",
      showButton: true,
    },
  },
  {
    title: "Our Achievements",
    image: {
      src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
      alt: "Descriptive Alt Text",
    },
    paragraphs: [
      "Visual storytelling combined with compelling text creates memorable experiences. Strategic image placement enhances message retention and user engagement.",
      "Careful attention to spacing and layout ensures content flows naturally, improving readability and user satisfaction.",
    ],
    button: {
      text: "View Details",
      link: "#",
      showButton: true,
    },
  },
  {
    title: "Recent Projects",
    image: {
      src: "assets/images/premium_photo-1682125773446-259ce64f9dd7.avif",
      alt: "Descriptive Alt Text",
    },
    paragraphs: [
      "Combining powerful imagery with well-crafted text delivers impactful messages. Balanced compositions create professional, trustworthy presentations.",
      "White space and consistent margins establish visual hierarchy, making content more accessible and easier to navigate.",
    ],
    button: {
      text: "See Projects",
      link: "#",
      showButton: false,
    },
  },
];
const index = () => {
  return (
    <div>
      <CarouselCard details={ourprograms} Id={'caousel-c'} />
    </div>
  );
};

export default index;

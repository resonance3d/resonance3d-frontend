import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";
const RenderItems = [
  { id: 1, name: "Render image", image: "/images/render/image1.jpg" },
  { id: 2, name: "Render image", image: "/images/render/image2.jpeg" },
  { id: 3, name: "Render image", image: "/images/render/image3.jpg" },
  { id: 4, name: "Render image", image: "/images/render/image4.jpg" },
  { id: 5, name: "Render image", image: "/images/render/image5.jpg" },
  { id: 6, name: "Render image", image: "/images/render/image6.jpg" },

];

export default function RenderPage() {
    return <>
    <TechnologiesHero />
     <FeaturedItems category="rendering" items={RenderItems} /> </>;
  }
  
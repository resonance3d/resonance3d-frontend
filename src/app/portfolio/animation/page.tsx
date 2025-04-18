import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";

const animationItems = [
    { id: 1, name: "3D Animation", videoUrl: "https://www.youtube.com/embed/KILPl0mVgHo" },
    { id: 2, name: "Animation", videoUrl: "https://www.youtube.com/embed/06zOCy_gAaI" },
    { id: 5, name: "Animation", videoUrl: "https://www.youtube.com/embed/J8tP1E14VeE" },
    { id: 3, name: "Animated Ad", image: "/images/animation/bathroom-a.jpg" }
  ];
  

  export default function AnimationPage() {
    return <>
    <TechnologiesHero />
     <FeaturedItems category="animation" items={animationItems} /> </>;
  }
  
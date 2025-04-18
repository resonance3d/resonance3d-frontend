import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";

const arVritems = [
    { id: 1, name: "AR Demo", videoUrl: "https://www.youtube.com/embed/Aq6xt0f1nHM" },
    
  ];
  

  export default function ArVRPage() {
    return <>
    <TechnologiesHero />
     <FeaturedItems category="ar-vr" items={arVritems} /> </>;
  }
  
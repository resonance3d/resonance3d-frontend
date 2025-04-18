import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";

const animationItems = [
    { id: 1, name: "3D Animation", videoUrl: "https://www.youtube.com/embed/2I_pzkpmjDQ" },
    
    { id: 2, name: "3D Model", sketchfabUrl: "https://sketchfab.com/models/a46a6eff95494b06862a73b172fa76dc/embed" },
    { id: 3, name: "3D Model", sketchfabUrl: "https://sketchfab.com/models/5c033977b8aa4304b79391cee0681b2a/embed" },


  ];
  

  export default function ThreeDmodelingPage() {
    return <>
    <TechnologiesHero />
     <FeaturedItems category="3d-modeling" items={animationItems} /> </>;
  }
  
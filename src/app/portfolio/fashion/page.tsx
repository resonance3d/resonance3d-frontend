import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";
const fashionItems = [
  { id: 1, name: "Cloth 1", image: "/images/fashion/image-1.jpg" },
  { id: 2, name: "Cloth 2", image: "/images/fashion/image-2.jpg" },
  { id: 3, name: "Cloth 3", image: "/images/fashion/image-3.jpg" },
  { id: 4, name: "Cloth 4", image: "/images/fashion/image-4.jpg" },
  { id: 5, name: "Cloth 5", image: "/images/fashion/image-5.jpg" },
  { id: 6, name: "Cloth 6", image: "/images/fashion/image-6.jpg" },
  { id: 7, name: "Cloth 7", image: "/images/fashion/image-7.jpg" },
  { id: 8, name: "Cloth 8", image: "/images/fashion/image-12.jpg" },
  { id: 9, name: "Cloth 9", image: "/images/fashion/Lehnga.jpeg" },
  { id: 10, name: "Cloth 10", image: "/images/fashion/image-10.jpg" },
  { id: 11, name: "Cloth 11", image: "/images/fashion/image-11.jpg" },

];

export default function FashionPage() {
  return <>
  <TechnologiesHero />
   <FeaturedItems category="fashion" items={fashionItems} /> </>;
}

import FeaturedItems from "../components/FeaturedItems";
import TechnologiesHero from "@/components/technologiesHero";
const interiorItems = [
    { id: 1, name: "Living Room", image: "/images/interior/Living-room/image-1.jpg", subcategory: "Living Room" },
    { id: 2, name: "Living Room", image: "/images/interior/Living-room/image-2.jpg", subcategory: "Living Room" },
    { id: 3, name: "Living Room", image: "/images/interior/Living-room/image-3.jpg", subcategory: "Living Room" },
    { id: 4, name: "Living Room", image: "/images/interior/Living-room/image-4.jpg", subcategory: "Living Room" },
    { id: 5, name: "Living Room", image: "/images/interior/Living-room/image-5.jpg", subcategory: "Living Room" },
    { id: 6, name: "Living Room", image: "/images/interior/Living-room/image-6.jpg", subcategory: "Living Room" },
    { id: 7, name: "Living Room", image: "/images/interior/Living-room/image-7.jpg", subcategory: "Living Room" },
    { id: 8, name: "Living Room", image: "/images/interior/Living-room/image-8.jpg", subcategory: "Living Room" },
    { id: 10, name: "Living Room", image: "/images/interior/Living-room/image-10.jpg", subcategory: "Living Room" },
    { id: 11, name: "Living Room", image: "/images/interior/Living-room/image-12.jpg", subcategory: "Living Room" },
    { id: 12, name: "Living Room", image: "/images/interior/Living-room/image13.jpg", subcategory: "Living Room" },

    { id: 13, name: "Bedroom", image: "/images/interior/bedroom/image1.jpg", subcategory: "Bedroom" },
    { id: 14, name: "Bedroom", image: "/images/interior/bedroom/image2.jpg", subcategory: "Bedroom" },
    { id: 15, name: "Bedroom", image: "/images/interior/bedroom/image3.jpg", subcategory: "Bedroom" },
    { id: 16, name: "Bedroom", image: "/images/interior/bedroom/image4.jpg", subcategory: "Bedroom" },
    { id: 17, name: "Bedroom", image: "/images/interior/bedroom/image5.jpg", subcategory: "Bedroom" },
    { id: 18, name: "Bedroom", image: "/images/interior/bedroom/image6.jpg", subcategory: "Bedroom" },

    { id: 19, name: "Dining Area", image: "/images/interior/Dining-area/image1.jpg", subcategory: "Dinig Area" },
    { id: 20, name: "Dining Area", image: "/images/interior/Dining-area/image2.jpg", subcategory: "Dinig Area" },
    { id: 21, name: "Dining Area", image: "/images/interior/Dining-area/image3.jpg", subcategory: "Dinig Area" },
    { id: 22, name: "Dining Area", image: "/images/interior/Dining-area/image4.jpg", subcategory: "Dinig Area" },
    { id: 23, name: "Dining Area", image: "/images/interior/Dining-area/image5.jpg", subcategory: "Dinig Area" },
    { id: 24, name: "Dining Area", image: "/images/interior/Dining-area/image6.jpg", subcategory: "Dinig Area" },
    { id: 30, name: "Dining Area", image: "/images/interior/Dining-area/image7.jpg", subcategory: "Dinig Area" },
    { id: 33, name: "Dome", image: "/images/interior/Dome/image1.jpg", subcategory: "Dome" },
    { id: 34, name: "Dome", image: "/images/interior/Dome/image2.jpg", subcategory: "Dome" },
    { id: 25, name: "Dome", image: "/images/interior/Dome/image3.jpg", subcategory: "Dome" },
    { id: 26, name: "Dome", image: "/images/interior/Dome/image4.jpg", subcategory: "Dome" },
    { id: 27, name: "Dome", image: "/images/interior/Dome/image5.jpg", subcategory: "Dome" },
    { id: 28, name: "Dome", image: "/images/interior/Dome/image6.jpg", subcategory: "Dome" },
    { id: 29, name: "Dome", image: "/images/interior/Dome/image7.jpg", subcategory: "Dome" },

    { id: 41, name: "bathroom", image: "/images/interior/bathroom/image1.jpg", subcategory: "Bathroom" },
    { id: 42, name: "bathroom", image: "/images/interior/bathroom/image2.jpg", subcategory: "Bathroom" },
    { id: 43, name: "bathroom", image: "/images/interior/bathroom/image3.jpg", subcategory: "Bathroom" },
    { id: 44, name: "bathroom", image: "/images/interior/bathroom/image4.jpg", subcategory: "Bathroom" },
    { id: 45, name: "bathroom", image: "/images/interior/bathroom/image5.jpg", subcategory: "Bathroom" },
    { id: 46, name: "bathroom", image: "/images/interior/bathroom/image6.jpg", subcategory: "Bathroom" },
    
    { id: 51, name: "kitchen", image: "/images/interior/kitchen/image1.jpg", subcategory: "kitchen" },
    { id: 52, name: "kitchen", image: "/images/interior/kitchen/image2.jpg", subcategory: "kitchen" },
    { id: 53, name: "kitchen", image: "/images/interior/kitchen/image3.jpg", subcategory: "kitchen" },
    { id: 54, name: "kitchen", image: "/images/interior/kitchen/image4.jpg", subcategory: "kitchen" },
    { id: 55, name: "kitchen", image: "/images/interior/kitchen/image5.jpg", subcategory: "kitchen" },
    { id: 56, name: "kitchen", image: "/images/interior/kitchen/image6.jpg", subcategory: "kitchen" },
    { id: 57, name: "kitchen", image: "/images/interior/kitchen/image7.jpg", subcategory: "kitchen" },
    { id: 58, name: "kitchen", image: "/images/interior/kitchen/image8.jpg", subcategory: "kitchen" },
    { id: 59, name: "kitchen", image: "/images/interior/kitchen/image9.jpg", subcategory: "kitchen" },
  ];
  
  export default function InteriorPage() {
    return<> <TechnologiesHero /> <FeaturedItems category="interior" items={interiorItems} /></>;
  }
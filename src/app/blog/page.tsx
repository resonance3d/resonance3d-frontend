"use client";
import React, { useState } from "react";
import HeroSection from "@/components/herosection";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of 3D Technology",
    description:
      "Explore how 3D technology is revolutionizing the digital world.",
    tags: ["3D", "Technology", "Innovation"],
    link: "/blog/the-future-of-3d-technology",
    image: "/images/3d/future.jpg"
  },
  {
    title: "Understanding Augmented Reality",
    description: "Learn the basics of Augmented Reality and its applications.",
    tags: ["AR", "Technology", "Innovation"],
    link: "/blog/understanding-augmented-reality",
    image: "/images/ar/ar.jpg"
  },
  {
    title: "Virtual Reality in Education",
    description:
      "How virtual reality is transforming the education sector.",
    tags: ["VR", "Education", "Technology"],
    link: "/blog/virtual-reality-in-education",
    image: "/images/vr/child-vr.jpg"
  },
  {
    title: "3D Modeling for Beginners",
    description:
      "A comprehensive guide to getting started with 3D modeling.",
    tags: ["3D", "Modeling", "Beginners"],
    link: "/blog/3d-modeling-for-beginners",
    image: "/images/3d/web.jpg"
  },
  {
    title: "Advanced 3D Animation Techniques",
    description:
      "A deep dive into advanced techniques in 3D animation.",
    tags: ["3D", "Animation", "Advanced"],
    link: "/blog/advanced-3d-animation-techniques",
    image: "/images/animation/bathroom-a.jpg"
  },
  {
    title: "Augmented Reality in Healthcare",
    description: "Exploring how AR is being used in healthcare.",
    tags: ["AR", "Healthcare", "Technology"],
    link: "/blog/augmented-reality-in-healthcare",
    image: "/images/3d/image-heart.jpg"
  },
  {
    title: "The Power of Virtual Reality in Gaming",
    description:
      "An exploration of VR’s impact on the gaming industry.",
    tags: ["VR", "Gaming", "Technology"],
    link: "/blog/the-power-of-virtual-reality-in-gaming",
    image: "/images/vr/gaming-vr.jpg"
  },
 
  {
    title: "Exploring the Future of AR in Retail",
    description:
      "How Augmented Reality will change the shopping experience.",
    tags: ["AR", "Retail", "Technology"],
    link: "/blog/exploring-the-future-of-ar-in-retail",
    image: "/images/ar/ar-retail-3.jpg",
  },
];

const tags: string[] = [
  "3D",
  "AR",
  "VR",
  "Technology",
  "Innovation",
  "Modeling",
  "Education",
  "Beginners",
  "Design",
  "Gaming",
  "Retail",

];

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  // Filter blog posts by selected tag
  const filteredBlogPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <HeroSection
        backgroundImage="/images/ai/car.jpg"
        title={
          <span>
            Welcome to <span className="text-customRed">Resonance3D</span>
          </span>
        }
        subtitle="Delivering immersive 3D, AR, and VR experiences"
        pageHeadline="Checkout our Blogs"
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Tags Section */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 transform 
                  ${selectedTag === tag ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-xl scale-110' : 'bg-gray-200 text-gray-700 hover:scale-105 hover:bg-gray-300'}`}
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => setSelectedTag(null)}
              className="px-6 py-2 text-lg font-semibold rounded-full bg-customRed text-white hover:bg-red-500 transition-all duration-300"
            >
              All
            </button>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative ">
                  <div className="w-full">

  <img
    className="w-full h-48 object-cover"  // Set width to 100% and a fixed height, with cover
    src={post.image}
    alt={post.title}
  />



   </div>
</div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                    <Link href={post.link} className="text-blue-500 font-semibold hover:underline">
                    Read More
                    </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 
                  ${currentPage === index + 1
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  tags?: string[];
  link: string;
  image: string;
}

interface LatestPostsProps {
  posts: BlogPost[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 max-w-[1100px]">
      <h2 className="text-3xl font-bold text-white mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className=" text-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-48 relative">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-white text-sm">{post.description}</p>
              <Link
                href={post.link}
                className="text-blue-500 text-sm mt-2 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;

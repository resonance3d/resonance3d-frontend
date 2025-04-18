// app/blog/layout.tsx
export const generateMetadata = () => {
    return {
      title: 'Blogs - Resonance3D',
      description: 'Learn more about Resonance3D and our offerings.',
    };
  };
  
  const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
  };
  
  export default BlogLayout;
  
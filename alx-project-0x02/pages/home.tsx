import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

export default function HomePage() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);


  const handleAddPost = (title: string, content: string) => {
    setPosts(prev => [{ title, content }, ...prev]);
  };

  return (
    <div className="p-6">
      <Header />
      <h1 className="text-3xl font-bold mt-2">Home Page</h1>
      <p className="mt-2 text-white">Welcome to the Home page of the ALX Next.js project.</p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add New Post
      </button>

      <section className="flex gap-3 mt-6 flex-wrap">
        {posts.length === 0 ? (
          <>
            <Card
              title="Card 1: Introduction"
              content="This is a reusable Card component used to display content consistently across pages."
            />
            <Card
              title="Card 2: Benefits"
              content="Reusable components help reduce repetition, improve maintainability, and ensure consistent styling."
            />
            <Card
              title="Card 3: Customization"
              content="Props like title and content allow this component to be dynamically rendered with different data."
            />
          </>
        ) : (
          posts.map(({ title, content }, index) => (
            <Card key={index} title={title} content={content} />
          ))
        )}
      </section>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
}

import { type PostModalProps } from '@/interfaces';
import React, { useState } from 'react';



const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onAddPost})=>{

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddPost(title.trim(), content.trim());
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-black" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full border border-gray-600 rounded px-3 py-2 text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-black" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              className="w-full border border-gray-600 rounded px-3 py-2 text-black"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-500 text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default PostModal;

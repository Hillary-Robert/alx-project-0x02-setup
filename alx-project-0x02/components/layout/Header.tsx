import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">Welcome to ALX Next.js Setup</h1>

      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Logo</Link>
        <Link href="/home" className="hover:underline">home</Link>
        <Link href="/about" className="hover:underline">about</Link>

        <Link href="/posts" className="hover:underline">post</Link>
      </nav>

      

      
    </header>
  );
};

export default Header;

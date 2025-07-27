// pages/index.tsx
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Header />
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-black">Hello Hillary Robert!</h2>
        <p className="mt-2 text-gray-700">
          This is the ALX Project 0x02 — Next.js Setup with TypeScript and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}

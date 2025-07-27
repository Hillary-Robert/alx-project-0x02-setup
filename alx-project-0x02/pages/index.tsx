
import Card from '@/components/common/Card';
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

      <section className='flex gap-3 mt-6'>
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
      </section>
    </main>
  );
}

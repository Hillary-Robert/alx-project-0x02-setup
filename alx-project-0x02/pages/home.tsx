import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="p-6">

      <Header />
      <h1 className="text-3xl font-bold mt-2">Home Page</h1>
      <p className="mt-2 text-white">Welcome to the Home page of the ALX Next.js project.</p>


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
    </div>
  );
}
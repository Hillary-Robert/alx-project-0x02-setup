import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="p-6">

      <Header />
      <h1 className="text-3xl font-bold mt-2">About Page</h1>
      <p className="mt-2 text-white">Learn more about this project on the About page.</p>


      <div className="flex gap-4 mt-8">
        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
      </div>
    </div>
  );
}

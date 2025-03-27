import CreateDeckForm from "@/components/CreateDeckForm"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-screen">
      <h1 className="text-4xl text-primary-text mb-6">Start</h1>
      <CreateDeckForm /> 
    </div>
  );
}

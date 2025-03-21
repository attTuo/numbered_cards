import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <ThemeSwitch />
      <h1 className="text-4xl text-primary-text">Start</h1>
      <p>Hello</p>
    </div>
  );
}

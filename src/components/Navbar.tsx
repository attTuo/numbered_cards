import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return(
    <div className="flex justify-between w-full max-w-[1440px] bg-primary-background p-4 items-center">
      <h1 className="text-3xl">Numbered cards</h1>
      <ThemeSwitch />
    </div>
  )
}
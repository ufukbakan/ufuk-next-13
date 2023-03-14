import MainMenu from "@/components/MainMenu";
import Nav from "@/components/Nav";
import Sections from "@/components/Sections";
import dynamic from "next/dynamic";


export default function Home() {
  const Bg = dynamic(() => import("../components/BackgroundHO"), { ssr: false });
  return (
    <div className="scrollable-content">
      <Bg></Bg>
      <Nav></Nav>
      <MainMenu></MainMenu>
      <Sections></Sections>
    </div>
  )
}

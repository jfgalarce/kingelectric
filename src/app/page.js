import About from "@/components/About";
import Header from "@/components/Header";
import Galeria from "@/components/home/Galeria";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Galeria />
      <About />
    </>
  );
}

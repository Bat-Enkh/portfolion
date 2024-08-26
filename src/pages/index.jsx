import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
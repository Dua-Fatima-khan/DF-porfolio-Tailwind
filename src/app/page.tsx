import Hero from "@/components/HERO";
import SERVICE from  "@/components/SERVICE";
import About from "@/components/ABOUT";
import Tech from "@/components/TECH";

export default function Home() {
  return (
   <main className="bg-black hide-scrollbar ">
    <Hero />
    <SERVICE />
    <About />
    <Tech />
  
      </main>
  );
}

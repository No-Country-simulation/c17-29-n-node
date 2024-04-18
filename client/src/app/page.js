import Image from "next/image";
import axios from "axios";
import { TravelCard } from "@/components/widgets/TravelCard";
import { HeroComponent } from "@/components/home/HeroComponent";
import { HowToSection } from "@/components/home/HowToSection";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <HowToSection />
    </>
  );
}

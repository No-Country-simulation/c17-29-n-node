import Image from "next/image";
import axios from "axios";
import { TravelCard } from "@/components/widgets/TravelCard";
import { HeroComponent } from "@/components/home/HeroComponent";
import { HowToSection } from "@/components/home/HowToSection";
import { ActiveTravels } from "@/components/home/ActiveTravels";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { UserReviews } from "@/components/home/UserReviews";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <HowToSection />
      <ActiveTravels />
      <BenefitsSection />
      <PopularRoutes />
      <UserReviews />
      <Footer />
    </>
  );
}

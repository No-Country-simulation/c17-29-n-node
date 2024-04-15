import Image from "next/image";
import axios from "axios";
import { TravelCard } from "@/components/widgets/TravelCard";

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <TravelCard />
    </main>
  );
}

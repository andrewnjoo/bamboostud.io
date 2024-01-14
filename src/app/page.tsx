import { Hero } from "@/app/components/sections/Hero";
import { Services } from "@/app/components/sections/Services";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Team } from "@/app/components/sections/Team";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <ContactForm />
    </main>
  );
}

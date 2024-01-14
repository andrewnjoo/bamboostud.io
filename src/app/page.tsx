import { Jumbotron } from "@/app/components/Jumbotron";
import { Services } from "@/app/components/Services";
import { Portfolio } from "@/app/components/Portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Jumbotron />
      <Services />
      <Portfolio />
    </main>
  );
}

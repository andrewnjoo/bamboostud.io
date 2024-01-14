import { Jumbotron, Services } from "@/app/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Jumbotron />
      <Services />
    </main>
  );
}

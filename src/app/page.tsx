import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Footer />
    </main>
  );
}

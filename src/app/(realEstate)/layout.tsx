import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-[65px]">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

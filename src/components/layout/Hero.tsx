import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative text-white h-96 flex items-center justify-center text-center min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="z-10">
        <h1 className="text-4xl font-bold">Find Your Dream Home</h1>
        <p className="mt-4 max-w-lg mx-auto">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </div>
    </div>
  );
};

export default Hero;

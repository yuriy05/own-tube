import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" height={50} width={50} alt="Logo" />
      <p className="text-xl font-semibold tracking-tight">OwnTube</p>
    </div>
  );
}

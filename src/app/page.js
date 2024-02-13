import Image from "next/image";
import { ValentineModule } from "@/Pheart";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ValentineModule/>
      
    <div id="modal"></div>
    </main>
  );
}

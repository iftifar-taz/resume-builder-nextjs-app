import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Home() {
  return (
    <main>
      Front page
      <Link href="/resumes" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        <span className="text-xl font-bold tracking-tight">
          AI Resume Builder - Resumes
        </span>
      </Link>
    </main>
  );
}

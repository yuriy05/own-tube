import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/auth-button";

export function HomeNavbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">OwnTube</p>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 justify-center mx-auto max-w-[720px]">
          <SearchInput />
        </div>

        <div className="flex flex-shrink-0 items-center gap-4">
            <AuthButton />
        </div>
      </div>
    </nav>
  );
}

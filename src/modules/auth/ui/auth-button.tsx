"use clinet";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function AuthButton() {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/*Add menu items for Studio and User Profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none transition-colors duration-300"
          >
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}

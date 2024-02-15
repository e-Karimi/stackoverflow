import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavContent from "@/components/modules/navbar/NavContent";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="hamburger icon"
          width={36}
          height={37}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/images/site-logo.svg" alt="DevFlow" width={23} height={23} />
          <p className="h3-bold  text-dark100_light900 font-spaceGrotesk ">
            Dev<span className="text-primary-500">OverFlow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="mt-3 flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg border border-primary-500 px-3 py-2 outline-none focus:outline-0">
                    <span className="primary-text-gradient font-bold">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium btn-tertiary  light-border-2 min-h-[41px] w-full rounded-lg px-3 py-2">
                    <span className=" text-dark400_light900  font-bold">Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}

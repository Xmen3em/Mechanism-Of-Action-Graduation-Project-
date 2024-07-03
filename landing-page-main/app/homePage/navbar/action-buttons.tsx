"use client";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const ActionButtons = () => {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const textColor = resolvedTheme === "dark" ? "white" : "black";

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div
                  className={`flex flex-col space-y-4 items-start w-full text-lg text-${textColor} mt-10`}
                >
                  <Link href="/">Home</Link>
                  <Link href="../../insights">Insights</Link>
                  <Link href="../../services/research">References</Link>
                  <Link href="../../services/useCases">MoA classifications</Link>
                  <Link href="../../services/diabetes-case-study" >Diabetes Case Study</Link>
                  
                  
                  
                  <Link href="../../Prediction">Prediction</Link>
                  <Link href="../../overview">Overview</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <div className="mr-5">
          <ThemeSwitch />
        </div>

   

        <Link href="../../Prediction">
          <Button className="text-md bg-blue-500">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;

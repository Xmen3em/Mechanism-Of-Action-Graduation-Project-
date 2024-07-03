"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


  



  export function NavigationMenuBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4"
        
        
        
        >
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium "
              >
                Home
              </NavigationMenuLink>
            </Link>
            
          </NavigationMenuItem>
        
          <NavigationMenuItem>
            <Link href="../../insights" legacyBehavior passHref>
              <NavigationMenuLink
              className=" font-medium  ml-7"
              >
                Insights
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
            
          

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" font-medium  ml-7">Research</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <ListItem href="../../services/research" title="References">
                Curated studies validating MoA prediction technology.
              </ListItem>
              <ListItem href="../../services/useCases" title="MoA classifications">
                 Applied in diverse research for drug discovery.
              </ListItem>
              <ListItem href="../../services/diabetes-case-study" title="diabetes case study">
                 Exploring Diabetes: Insights and Research Findings.
              </ListItem>


            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
            
          <NavigationMenuItem>
            <Link href="../../Prediction" legacyBehavior passHref>
              <NavigationMenuLink
              className="font-medium  ml-7"
              >
                Prediction
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>


          <NavigationMenuItem>
            <Link href="../../overview" legacyBehavior passHref>
              <NavigationMenuLink
              className=" font-medium  ml-7"
              >
                Overview
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          


        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"
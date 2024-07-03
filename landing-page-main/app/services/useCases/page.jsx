"use client"
import Link from "next/link";
import styles from "./Component.module.css"; // Import CSS module for custom styling

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";


export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
                            <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
           MoA classifications
        </Highlight>
<div className="text-lg pt-10">
Classified based on their therputic effect</div>
      </motion.h1>
    </HeroHighlight>
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:gap-10 mb-16">
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight"> Anti-inflammatory</h3>
              </div>
              <Link
                href="/services/useCases/anti-inflammatory"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Antibiotic/Antiviral/Antifungal</h3>
              </div>
              <Link
                href="/services/useCases/Antibiotic-Antiviral-Antifungal"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Antineoplastic/Anticancer </h3>
              </div>
              <Link
                href="/services/useCases/Antineoplastic-Anticancer"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight"> Neurological Agents</h3>
              </div>
              <Link
                href="/services/useCases/Neurological-Agents"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Cardiovascular Agents</h3>
              </div>
              <Link
                href="/services/useCases/Cardiovascular-Agents"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Endocrine Agents</h3>
              </div>
              <Link
                href="/services/useCases/Endocrine-Agents"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Immunomodulators</h3>
              </div>
              <Link
                href="/services/useCases/Immunomodulators"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Analgesics/Anesthetics</h3>
              </div>
              <Link
                href="/services/useCases/Analgesics-Anesthetics"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Gastrointestinal Agents</h3>
              </div>
              <Link
                href="/services/useCases/Gastrointestinal-Agents"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          <div
            
            className={`${styles.card} group relative overflow-hidden rounded-lg border hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${styles.gradient} absolute inset-0 z-10 opacity-0 group-hover:opacity-100`} />
            <div className="relative z-20 flex flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Respiratory Agents</h3>
              </div>
              <Link
                href="/services/useCases/Respiratory-Agents"
                className={`${styles.learnMore} inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        
      </div>
    </section>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.arrowIcon} transition-transform duration-300`}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

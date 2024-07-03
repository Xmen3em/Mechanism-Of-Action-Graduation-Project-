"use client"
import React from 'react';
import styles from './sectionOne.module.css'; // Import your CSS module
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
function SectionOne() {
  return (
    <div className={styles.container}>
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
          Diabetes Case Study
        </Highlight>
<div className="text-lg pt-10">
Exploring Diabetes: Insights and Research Findings</div>
      </motion.h1>
    </HeroHighlight>

      <article className={styles.article}>
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
          <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
            <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">What is diabetes?</h2>
            <p className='text-xl mt-4'>
              Diabetes mellitus is a chronic metabolic disorder characterized by high levels of blood glucose (hyperglycemia) resulting from defects in insulin production, insulin action, or both.
            </p>
            <p className='text-xl mt-4'>
              Diabetes is a condition that happens when your blood sugar (glucose) is too high. It develops when your <Link href="https://my.clevelandclinic.org/health/body/21743-pancreas" className={styles.link}>pancreas</Link> doesn’t make enough <Link href="https://my.clevelandclinic.org/health/body/22601-insulin" className={styles.link}>insulin</Link> or any at all, or when your body isn’t responding to the effects of insulin properly. Diabetes affects people of all ages. Most forms of diabetes are chronic (lifelong), and all forms are manageable with medications and/or lifestyle changes.
            </p>
            <p className='text-xl mt-4'>
              Glucose (sugar) mainly comes from <Link href="https://my.clevelandclinic.org/health/articles/15416-carbohydrates" className={styles.link}>carbohydrates</Link> in your food and drinks. It’s your body’s go-to source of energy. Your blood carries glucose to all your body’s cells to use for energy.
            </p>
            <p className='text-xl mt-4'>
              When glucose is in your bloodstream, it needs help — a “key” — to reach its final destination. This key is insulin <Link href="https://my.clevelandclinic.org/health/articles/22464-hormones" className={styles.link}>(a hormone)</Link>. If your pancreas isn’t making enough insulin or your body isn’t using it properly, glucose builds up in your bloodstream, causing <Link href="https://my.clevelandclinic.org/health/diseases/9815-hyperglycemia-high-blood-sugar" className={styles.link}>high blood sugar (hyperglycemia)</Link>.
            </p>
            <p className='text-xl mt-4'>
              Over time, having consistently high blood glucose can cause health problems, such as <Link href="https://my.clevelandclinic.org/health/diseases/24129-heart-disease" className={styles.link}>heart disease</Link>, nerve damage, and eye issues.
            </p>
            <p className='text-xl mt-4'>
              The DNA sequence of the insulin hormone in humans typically consists of two exons and one intron. Insulin is encoded by the INS gene located on chromosome 11 in humans.
            </p>

            <h2 className="text-2xl mb-4 mt-4 font-semibold tracking-tight lg:text-3xl">So, what is insulin?</h2>
            <p className='text-xl mt-4'>
              Insulin is a protein hormone that plays a critical role in regulating blood glucose levels in the body. It is produced by the beta cells of the pancreas and helps facilitate the uptake of glucose into cells, thereby lowering blood sugar levels. Insulin is not a gene itself, but it is encoded by a gene called the INS gene.
            </p>
            <p className='text-xl mt-4'>
              In the case of the INS gene:
            </p>
            <ul className='text-xl mt-4'>
              <li>Exon 1: The sequence provided, 5'-ATG GCA CCA GTG ACG CCA GCC-3', is part of the coding region that will be transcribed and translated into the insulin protein.</li>
              <li>Exon 2: The sequence provided, 5'-CTG TGG GTG GGC AGG TGG CTC-3', is another part of the coding region.</li>
              <li>Intron: The intron is the non-coding sequence between exons 1 and 2, which is spliced out during mRNA processing.</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl px-4 mx-auto py-6">
              <div className="order-1 md:order-2">
                <Image
                  src="/images/unnamed.jpg"
                  alt="Serene Landscape"
                  width={800}
                  height={600}
                  className="aspect-[4/3] object-cover rounded-lg"
                />
                <h3 className="text-center">Fig.1: The chemical structure of insulin</h3>
              </div>
              <div className="order-2 md:order-1 space-y-4">
                <p className="text-muted-foreground">
                  Exon 1: 5'-ATG GCA CCA GTG ACG CCA GCC-3'
                </p>
                <p className="text-muted-foreground">
                  Exon 2: 5'-CTG TGG GTG GGC AGG TGG CTC-3'
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>
  );
}

export default SectionOne;

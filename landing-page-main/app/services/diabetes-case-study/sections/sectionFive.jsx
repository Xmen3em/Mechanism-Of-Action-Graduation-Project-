"use client"
import React from 'react';
import styles from './sectionFive.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../../../components/ui/hero-highlight";
import Link from 'next/link';

function SectionOne() {
  return (
    
<>

    <div className={styles.container}>
         
{/* {" "}
          <Link href="#" prefetch={false}>
            utility-first
          </Link>{" "} */}

      <article className={styles.article}>

        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">As we focus on T2D:
</h2>
        <p className='text-xl mt-6'>
Type 2 Diabetes (T2D): A condition where the body becomes resistant to insulin, or the pancreas does not produce enough insulin.

        </p>
        <p className='text-xl mt-6'>
Here are the genetic malfunctions leading to Diabetes type 2 (ignoring the environmental factors):

        </p>
        <p className='text-xl mt-6'>
T2D has a more complex genetic basis, with multiple genes involved:

        </p>
        <p className='text-xl mt-6'>
•TCF7L2: Variants in the TCF7L2 gene are among the strongest genetic risk factors for T2D. This gene is involved in the regulation of insulin secretion and glucose production.

        </p>
        <p className='text-xl mt-6'>
•PPARG: The peroxisome proliferator-activated receptor gamma (PPARG) gene plays a role in fat cell differentiation and insulin sensitivity. Mutations in PPARG can lead to insulin resistance.

        </p>
        <p className='text-xl mt-6'>
•FTO: The fat mass and obesity-associated (FTO) gene is associated with increased body mass index (BMI) and risk of T2D. Variants in FTO influence appetite and energy expenditure.

        </p>
        <p className='text-xl mt-6'>
•KCNJ11 and ABCC8: These genes encode subunits of the ATP-sensitive potassium channel in pancreatic beta cells, which are crucial for insulin secretion. Mutations in these genes can impair insulin release.

        </p>
        <p className='text-xl mt-10'>
           Type 2 diabetes involves multiple genes affecting insulin secretion and action, such as TCF7L2, PPARG, and FTO. 

        </p>
        <p className='text-xl mt-6'>
Understanding the genetic basis of diabetes helps in identifying individuals at risk and developing targeted therapies to manage and prevent the disease. 

        </p>
        


<div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 max-w-6xl mx-auto px-4 py-12">
      <div className="bg-background rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">TCF7L2 (Transcription Factor 7-Like 2)
</h3>
          <p className="text-muted-foreground mb-4">
SNP: rs7903146
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
• Location: Intronic region of the TCF7L2 gene.
            </li>
            <li className="flex items-center gap-2">
• Alleles: C/T (the T allele is associated with increased risk of T2D).
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-background rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">FTO (Fat Mass and Obesity-Associated Gene)
</h3>
          <p className="text-muted-foreground mb-4">
SNP: rs9939609
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
• Location: Intronic region.
            </li>
            <li className="flex items-center gap-2">
• Alleles: T/A (the A allele is associated with increased BMI and T2D risk).
            </li>
            
          </ul>
        </div>
      </div>
      <div className="bg-background rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">PPARG (Peroxisome Proliferator-Activated Receptor Gamma)
</h3>
          <p className="text-muted-foreground mb-4">
SNP: rs1801282 (Pro12Ala)
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
• Location: Exonic region.
            </li>
            <li className="flex items-center gap-2">
• Sequence Change: Proline (C) to Alanine (G) at codon 12.
            </li>
            <li className="flex items-center gap-2">
• Alleles: C/G (the G allele is associated with a decreased risk of T2D).
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-background rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-2">KCNJ11 (Potassium Inwardly Rectifying Channel, Subfamily J, Member 11)
</h3>
          <p className="text-muted-foreground mb-4">SNP: rs5219 (E23K)
</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
• Location: Exonic region.
            </li>
            <li className="flex items-center gap-2">
• Sequence Change: Glutamate (G) to Lysine (A) at codon 23.
            </li>
            <li className="flex items-center gap-2">
• Alleles: G/A (the A allele is associated with increased risk of T2D).
            </li>
          </ul>
        </div>
      </div>
    </div>







      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default SectionOne;
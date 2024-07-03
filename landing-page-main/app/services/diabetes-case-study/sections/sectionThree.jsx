import React from 'react';
import styles from './sectionThree.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import Link from 'next/link';

function SectionThree() {
  return (
    
<>

    <div className={styles.container}>
         
{/* {" "}
          '
          <Link href="https://my.clevelandclinic.org/health/body/22601-insulin" className={styles.link}>insulin</Link>          

          
          '*/}

      <article className={styles.article}>

        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">What causes diabetes?</h2>
        <p className='text-xl mt-4'>
Too much glucose circulating in your bloodstream causes diabetes, regardless of the type. However, the reason why your blood glucose levels are high differs depending on the type of diabetes.

        </p>
        <p className='text-xl mt-4'>
Causes of diabetes include: 

        </p>
        <p className='text-xl mt-4'>
1-  Genetic factors

        </p>
        <p className='text-xl mt-4'>
 • Insulin resistance: Type 2 diabetes mainly results from insulin resistance. 

        </p>
        <p className='text-xl mt-4'>
• Autoimmune disease: Type 1 diabetes and LADA happen when your immune system attacks the insulin-producing cells in your pancreas.

        </p>
        <p className='text-xl mt-4'>
• <Link href="https://my.clevelandclinic.org/health/diseases/22673-hormonal-imbalance" className={styles.link}>Hormonal imbalances</Link>          
: During pregnancy, the <Link href="https://my.clevelandclinic.org/health/body/22337-placenta" className={styles.link}>placenta</Link>  releases hormones that cause insulin resistance. can also cause Type 2 diabetes.

        </p>
        <p className='text-xl mt-4'>
• Pancreatic damage: Physical damage to your pancreas — from a condition, surgery or injury — can impact its ability to make insulin, resulting in Type 3c diabetes.

        </p>
        <p className='text-xl mt-4'>
• Genetic mutations: Certain genetic mutations can cause MODY and neonatal diabetes.

        </p>
        <p className='text-xl mt-10'>
          Long-term use of certain medications can also lead to Type 2 diabetes, including <Link href="https://my.clevelandclinic.org/health/diseases/4251-hiv-aids" className={styles.link}>HIV/AIDS</Link>          
 medications and           <Link href="https://my.clevelandclinic.org/health/drugs/4812-corticosteroids" className={styles.link}>corticosteroids.</Link>          


        </p>
        <p className='text-xl mt-4'>
	2-  Lifestyle factors (diet, physical activity)

        </p>
        <p className='text-xl mt-4'>
3-  Obesity and overweight

        </p>
        <p className='text-xl mt-4'>
4- Age and ethnicity

        </p>
       
      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default SectionThree;

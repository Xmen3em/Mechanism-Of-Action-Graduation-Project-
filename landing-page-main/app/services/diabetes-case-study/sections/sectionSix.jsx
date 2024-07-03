"use client"
import React from 'react';
import styles from './sectionOne.module.css'; // Import your CSS module
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
          
          
                    <Link href="" className={styles.link}>insulin</Link>          

          
          */}

      <article className={styles.article}>

        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl"> Endocrine Agents diseases: (Diabetes) 
</h2>
        <p className='text-xl mt-6'>
• Diabetes mellitus is the most Dangerous/ widespread Disease Specially T2D:

        </p>
        <p className='text-xl mt-6'>
Diabetes is primarily related to the regulation of blood sugar levels and insulin function.

        </p>
        <p className='text-xl mt-6'>
 the following have direct or indirect implications for diabetes management:

        </p>
        <p className='text-xl mt-6'>
1-&ensp; Insulin secretagogue: These agents stimulate the pancreas to secrete more insulin. Examples include sulfonylureas and meglitinides. They are commonly used in the treatment of type 2 diabetes.

        </p>
        <p className='text-xl mt-6'>
2-&ensp; Insulin sensitizer: These agents improve the sensitivity of body tissues to insulin. Examples include metformin and thiazolidinediones. They are essential in the management of type 2 diabetes as they help the body utilize insulin more effectively.

        </p>
        <p className='text-xl mt-6'>
3-&ensp;Dipeptidyl peptidase inhibitor (DPP-4 inhibitor): These agents prevent the breakdown of incretin hormones, which help increase insulin secretion and decrease glucagon release. Examples include sitagliptin and saxagliptin. They are used in the treatment of type 2 diabetes.

        </p>
        <p className='text-xl mt-6'>
4-&ensp;Peroxisome proliferator-activated receptor (PPAR) agonist/antagonist: PPAR agonists, particularly PPAR-γ agonists (such as thiazolidinediones), improve insulin sensitivity and are used in the treatment of type 2 diabetes. PPAR-α agonists (such as fibrates) are used to manage dyslipidemia but can also have effects on glucose metabolism.

        </p>
        <p className='text-xl font-semibold mt-6'>
For the treatment of type 2 diabetes (T2D), several categories of drugs are used, each with different mechanisms of action. Here's an overview of these drug categories, the specific agents within them, and their differences:

        </p>
        <p className='text-xl mt-6'>
Insulin Secretagogues:

        </p>
        <p className='text-xl mt-6'>
•Sulfonylureas (e.g., glipizide, glyburide, glimepiride)

        </p>
        <p className='text-xl mt-6'>
Sulfonylureas: Examples include glipizide, glyburide, and glimepiride. They stimulate insulin release from pancreatic beta cells. They are effective but can cause hypoglycemia and weight gain.

        </p>
        <p className='text-xl mt-6'>
•Meglitinides (e.g., repaglinide, nateglinide)

        </p>
        <p className='text-xl mt-6'>
Meglitinides: Examples include repaglinide and nateglinide. They also stimulate insulin release but have a shorter duration of action compared to sulfonylureas. They are taken with meals to control postprandial blood glucose levels.

        </p>
        <p className='text-xl mt-6'>
Insulin Sensitizers:

        </p>
        <p className='text-xl mt-6'>
•Biguanides (e.g., metformin)

        </p>
        <p className='text-xl mt-6'>
Biguanides: The primary example is metformin. It decreases hepatic glucose production and increases insulin sensitivity in peripheral tissues. Metformin is the first-line treatment for T2D due to its efficacy, safety profile, and potential cardiovascular benefits.

        </p>
        <p className='text-xl mt-6'>
•Thiazolidinediones (e.g., pioglitazone, rosiglitazone)

        </p>
        <p className='text-xl mt-6'>
Differences Between Categories:

        </p>
        <p className='text-xl mt-6'>
• Mechanism of Action: Each category works through different pathways to control blood glucose levels, from enhancing insulin secretion to improving insulin sensitivity and altering glucose absorption and excretion.

        </p>
        <p className='text-xl mt-6'>
• Efficacy: The reduction in HbA1c varies among drug classes, with some (like GLP-1 receptor agonists and SGLT-2 inhibitors) also offering additional benefits such as weight loss or cardiovascular protection.

        </p>
        <p className='text-xl mt-6'>
• Side Effects: Risk profiles differ, with some drugs causing hypoglycemia (e.g., sulfonylureas) and others causing gastrointestinal issues (e.g., alpha-glucosidase inhibitors).

        </p>
        <p className='text-xl mt-6'>
• Administration: Some drugs are taken orally (e.g., metformin, DPP-4 inhibitors), while others require injection (e.g., GLP-1 receptor agonists, insulin).

        </p>
        <p className='text-xl mt-6'>
The choice of medication often depends on individual patient factors, including the degree of hyperglycemia, presence of comorbidities, risk of hypoglycemia, weight considerations, and patient preferences.

        </p>


        <h2 className="text-3xl mb-4 mt-10 font-semibold tracking-tight lg:text-3xl"> Endocrine Agents diseases: (Diabetes) 
</h2>
        <h2 className="text-2xl mb-4 mt-6 font-semibold tracking-tight lg:text-3xl">New and emerging drugs and targets for type 2 diabetes: reviewing the evidence
</h2>
        <p className='text-xl mt-6'>
• Authors: BR Miller, H Nguyen, CJH Hu, C Lin

        </p>
        <p className='text-xl mt-6'>
• Summary: This review discusses various options for the treatment of type 2 diabetes mellitus, highlighting several emerging drugs and their efficacy.

        </p>
        <p className='text-xl mt-6'>
•                     <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4280522/" className={styles.link}>Read the full article</Link>          

        </p>
        <h2 className="text-2xl mb-4 mt-10 font-semibold tracking-tight lg:text-3xl">Novel diabetes drugs and the cardiovascular specialist

</h2>
        <p className='text-xl mt-6'>
• Authors: N Sattar, MC Petrie, B Zinman, JL Januzzi


        </p>
        <p className='text-xl mt-6'>
• Summary: This paper reviews new diabetes drugs, particularly focusing on their impact on cardiovascular health.

        </p>
        <p className='text-xl mt-6'>
•                     <Link href="https://www.jacc.org/doi/abs/10.1016/j.jacc.2017.04.014" className={styles.link}>Read the full article</Link>          

        </p>
        <h2 className="text-2xl mb-4 mt-10 font-semibold tracking-tight lg:text-3xl">Future glucose-lowering drugs for type 2 diabetes

</h2>
        <p className='text-xl mt-6'>
• Authors: CJ Bailey, AA Tahrani, AH Barnett


        </p>
        <p className='text-xl mt-6'>
• Summary: This paper reviews future developments in glucose-lowering drugs and their potential impact.

        </p>
        <p className='text-xl mt-6'>
•                     <Link href="https://www.thelancet.com/journals/landia/article/PIIS2213-8587(15)00462-3/fulltext" className={styles.link}>Read the full article</Link>          
        </p>

        <img
          src="/images/hsa04930_20240625_093200.png"
          alt="Serene Landscape"
          width={800}
          height={600}
          className="aspect-[4/3] mt-10 object-cover rounded-lg"
        />
        <h3 className='mb-10'>Fig.3 T2D metabolic pathway 
 
</h3>
        <img
          src="/images/hsa04931_20240625_093149.png"
          alt="Serene Landscape"
          width={800}
          height={600}
          className="aspect-[4/3] object-cover rounded-lg"
        />
        <h3>Fig.4 Insulin Resistance  

 
</h3>

      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default SectionOne;
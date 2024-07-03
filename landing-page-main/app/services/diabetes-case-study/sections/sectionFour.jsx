import React from 'react';
import styles from './sectionFour.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import dynamic from "next/dynamic";
import Link from 'next/link';


function SectionFour() {
  return (
    
<>

    <div className={styles.container}>
         
{/* {" "}
          
          
          <Link href="" className={styles.link}>insulin</Link>          

          
          */}

      <article className={styles.article}>

        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">What are the complications of diabetes?
</h2>
        <p className='text-xl mt-4'>
Diabetes can lead to acute (sudden and severe) and long-term complications — mainly due to extreme or prolonged high blood sugar levels.

        </p>
        <h2 className="text-2xl mb-4  mt-10 font-semibold tracking-tight lg:text-3xl">Acute diabetes complications
</h2>

        <p className='text-xl mt-4'>
Acute diabetes complications that can be life-threatening include:

        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/21147-hyperosmolar-hyperglycemic-state" className={styles.link}>Hyperosmolar hyperglycemic state (HHS):</Link>          
 This complication mainly affects people with Type 2 diabetes. It happens when your blood sugar levels are very high (over 600 milligrams per deciliter or mg/dL) for a long period, leading to severe           <Link href="https://my.clevelandclinic.org/health/diseases/9013-dehydration" className={styles.link}>dehydration</Link>          
 and confusion. It requires immediate medical treatment.

        </p>
        <p className='text-xl mt-4'>
• Diabetes-related ketoacidosis (DKA): This complication mainly affects people with Type 1 diabetes or undiagnosed T1D. It happens when your body doesn’t have enough insulin. If your body doesn’t have insulin, it can’t use glucose for energy, so it breaks down fat instead. This process eventually releases substances called ketones, which turn your blood acidic. This causes labored breathing, vomiting and loss of consciousness. DKA requires immediate medical treatment.

        </p>
        <p className='text-xl mt-4'>
•      Severe     <Link href="https://my.clevelandclinic.org/health/diseases/11647-hypoglycemia-low-blood-sugar" className={styles.link}> low blood sugar</Link>          
 (hypoglycemia): Hypoglycemia happens when your blood sugar level drops below the range that’s healthy for you. Severe hypoglycemia is very low blood sugar. It mainly affects people with diabetes who use insulin. Signs include blurred or double vision, clumsiness, disorientation and seizures. It requires treatment with           <Link href="https://my.clevelandclinic.org/health/drugs/20287-glucagon-injection" className={styles.link}>emergency glucagon</Link>          
 and/or medical intervention.

        </p>
<h2 className="text-2xl mb-4 mt-10font-semibold tracking-tight lg:text-3xl">Long-term diabetes complications

</h2>
        <p className='text-xl mt-10'>
          Blood glucose levels that remain high for too long can damage your body’s tissues and organs. This is mainly due to damage to your blood vessels and nerves, which support your body’s tissues.

        </p>
        <p className='text-xl mt-4'>
Cardiovascular (heart and blood vessel) issues are the most common type of long-term diabetes complication. They include:

        </p>

        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/16898-coronary-artery-disease" className={styles.link}>Coronary artery disease</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/16818-heart-attack-myocardial-infarction" className={styles.link}>Heart attack</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/9812-diabetes-and-stroke" className={styles.link}>Stroke</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/16753-atherosclerosis-arterial-disease" className={styles.link}>Atherosclerosis</Link>          
.


        </p>
        <h2 className="text-2xl mb-4  mt-10 font-semibold tracking-tight lg:text-3xl">Other diabetes complications include:
</h2>

 <p className='text-xl mt-4'>
• Nerve damage            <Link href="https://my.clevelandclinic.org/health/diseases/21621-diabetic-neuropathy" className={styles.link}>(neuropathy)</Link>          
, which can cause numbness, tingling and/or pain.

        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/24183-diabetic-nephropathy" className={styles.link}>Nephropathy</Link>          
, which can lead to           <Link href="https://my.clevelandclinic.org/health/diseases/17689-kidney-failure" className={styles.link}>kidney failure</Link>          
 or the need for           <Link href="https://my.clevelandclinic.org/health/treatments/14618-dialysis" className={styles.link}>dialysis</Link>          
 or           <Link href="https://my.clevelandclinic.org/health/treatments/22537-kidney-transplant" className={styles.link}>transplant</Link>          
.

        </p>
        <p className='text-xl mt-4'>
• Retinopathy          <Link href="https://my.clevelandclinic.org/health/diseases/8591-diabetic-retinopathy" className={styles.link}>insulin</Link>          
, which can lead to blindness.

        </p>
        
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/21510-diabetic-feet" className={styles.link}>Diabetes-related foot conditions</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•Skin infections.


        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/treatments/21599-amputation" className={styles.link}>Amputations.
</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•            <Link href="https://my.clevelandclinic.org/health/diseases/9121-sexual-dysfunction" className={styles.link}>Sexual dysfunction</Link>          
 due to nerve and blood vessel damage, such as           <Link href="https://my.clevelandclinic.org/health/diseases/10035-erectile-dysfunction" className={styles.link}>erectile dysfunction</Link>          
 or            <Link href="" className={styles.link}>vaginal dryness</Link>          
.


        </p>
        <p className='text-xl mt-4'>
•           <Link href="https://my.clevelandclinic.org/health/diseases/15522-gastroparesis" className={styles.link}> Gastroparesis</Link>          
.

        </p>
        <p className='text-xl mt-4'>
•            <Link href="https://my.clevelandclinic.org/health/diseases/17673-hearing-loss" className={styles.link}>Hearing loss</Link>          
.
        </p>
        <p className='text-xl mt-4'>
• Oral health issues, such as           <Link href="https://my.clevelandclinic.org/health/diseases/21482-gum-periodontal-disease" className={styles.link}>gum (periodontal) disease</Link>          
.

        </p>
        <p className='text-xl mt-4'>
Living with diabetes can also affect your mental health. People with diabetes are two to three times more likely to have depression than people without diabetes.

        </p>




      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default dynamic (() => Promise.resolve(SectionFour), {ssr: false})

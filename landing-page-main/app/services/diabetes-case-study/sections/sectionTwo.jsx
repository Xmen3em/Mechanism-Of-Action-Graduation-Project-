import React from 'react';
import styles from './sectionTwo.module.css'; // Import your CSS module
import Image from "next/image";
import Header from "@/components/Header";

function SectionTwo() {
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
        <h2 className="text-2xl mb-4 font-bold tracking-tight lg:text-3xl">How common is diabetes?</h2>
        <p className='text-xl mt-4'>
Diabetes is common. Approximately 37.3 million people in the United States have diabetes, which is about 11% of the population. Type 2 diabetes is the most common form, representing 90% to 95% of all diabetes cases.

        </p>
        <p className='text-xl mt-4 mb-10'>
About 537 million adults across the world have diabetes. Experts predict this number will rise to 643 million by 2030 and 783 million by 2045.

        </p>

<img
          src="/images/unnamed2.png"
          width={800}
          height={600}
          className="aspect-[4/3] object-cover rounded-lg"
        />
        <h3 className=''>Fig.2  A statistical survey on diabetes in america  

</h3>




      </article>
    </div>


      </article>
    </div>
</>
  );
}

export default SectionTwo;

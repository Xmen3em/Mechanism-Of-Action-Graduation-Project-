import React from 'react';
import styles from './sectionThree.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';

function SectionThree() {
  return (
    
<>
    <div className={styles.container}>


      <article className={styles.article}>

        
        <h2 className="text-2xl mb-4 font-semibold tracking-tight lg:text-2xl">Distribution of All Cell Features:</h2>
                  <Image src='/images/photo_2024-02-25_16-23-48.jpg' width={1000} height={1000} className='py-10'/>

        {/* <p className={styles.subtitle}>
          Type of Treatment
        </p> */}

        {/* <p className={styles.date}>2020-12-27</p> */}

        <section className={styles.content}>
              <p>
        Both Train and Test datasets share a similar distribution of cell features.
        The plot looks similar to Gaussian distribution with mean around 0 within a certain range, but one can observe that there are certainly more number of negative valued cell features than positive with a small peak -10.0.
        A small peak around -10 suggests that most of the cells in the cell lines collapsed on coming in contact of most of the drugs.
    </p>

    <h2 className='text-2xl'>Cell Features Correlation Analysis:</h2>
    <p>
        It was clear from the heat map only that there are many cell lines which are positively highly correlated to other cell lines and there are 108 pairs of cell lines highly correlated(above +0.9).
        The highest positive correlation is +0.924619 between 'c-52' and 'c-42' cell lines and the lowest is +0.612084 between 'c-22' and 'c-16'.
    </p>
        </section>
      </article>
    </div>
</>
  );
}

export default SectionThree;

import React from 'react';
import styles from './sectionTwo.module.css'; // Import your CSS module
import Image from "next/image";
import Header from "@/components/Header";

function SectionTwo() {
  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          {/* <p className={styles.subtitle}>
          Type of Treatment
        </p> */}

          {/* <p className={styles.date}>2020-12-27</p> */}

          <section className={styles.content}>
            <h3 className="text-2xl mb-4 font-semibold tracking-tight lg:text-3xl">Distribution of all gene features</h3>
            <Image
              src="/images/photo_2024-02-25_16-25-17.jpg"
              width={1000}
              height={1000}
              className="py-10"
            />
            <p>
              Both Train and Test datasets share a similar distribution of gene
              features. The plot looks similar to a Gaussian distribution with a
              mean around 0. The values are also negative, but one can observe
              that there are certainly more number of negative valued cell
              features than positive with a small peak -10.0. implying that
              certain gene values got downregulated by certain drugs while
              others got upregulated. The downregulation of some genes is as low
              as -10, while upregulation of some genes is as high as +10.0. A
              small peak around -10 suggests that most of the cells in the cell
              lines collapsed on coming in contact of most of the drugs{" "}
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default SectionTwo;

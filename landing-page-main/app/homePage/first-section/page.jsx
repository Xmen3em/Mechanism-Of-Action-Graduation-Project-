import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const FirstSection = () => {
  return (
    <div className={styles.background}>
      <section className={styles.sectionContainer}>
        <div className="container mx-auto text-center">
          <div className={styles.heading}>
            <span className={styles.headingLine}>From Insight to Impact:</span>
            <span className={styles.headingLine}>Harnessing Machine Learning</span>
          </div>
          <div className={`${styles.heading} pb-10`}>
            for Discovery
          </div>

          <p className={ `${styles.paragraph} dark:text-white `}>
            Welcome to our exploration of drug mechanisms of action (MoA), where understanding how a drug works
          </p>
          <p className={styles.paragraph}>
            is crucial for its therapeutic effectiveness and impact on healthcare.
          </p>

          <div className={styles.buttonContainer}>
            <Link href="../../Prediction">
              <button className={`${styles.button} ${styles.blueButton}`}>
                Get Started
              </button>
            </Link>
            <Link href="../../overview">
              <button className={`${styles.button} ${styles.grayButton}`}>
                Learn More
              </button>
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src="/images/third.jpg"
                  width={400}
                  height={400}
                  alt="First Image"
                />
              </div>
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src="/images/second.jpg"
                  width={400}
                  height={400}
                  alt="Second Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;

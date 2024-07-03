"use client";
import React from "react";
import styles from "./overview.module.css";
import { useTheme } from "next-themes"; // Import useTheme hook
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

// Import CSS module

const Overview = () => {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const lineColor = resolvedTheme === "dark" ? "white" : "black";
  
  return (
    <>

        {/* Intro / Business Problem */}
      <div className={styles.container}>

        <div className={styles.section}>
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
          Overview
                  </Highlight>
<div className=" text-lg pt-5">
explore MoA's pivotal role in drug development and therapy, shaping pharmaceutical science's core principles</div>
      </motion.h1>
    </HeroHighlight>
          {/* <div className={styles.imageContainer}>
            <Image
              src="/images/5132283.jpg"
              width={500}
              height={500}
              className={styles.images}
              alt="image"
            ></Image>
          </div> */}
          <h2 className={styles.heading}>Intro </h2>
          <p className={styles.paragraph}>
            In the past, scientists derived drugs from natural products or were
            inspired by traditional remedies. Very common drugs, such as
            paracetamol, known in the US as acetaminophen, were put into
            clinical use decades before the biological mechanisms driving their
            pharmacological activities were understood. Today, with the advent
            of more powerful technologies, drug discovery has changed from the
            serendipitous approaches of the past to a more targeted model based
            on an understanding of the underlying biological mechanism of a
            disease. In this new framework, scientists seek to identify a
            protein target associated with a disease and develop a molecule that
            can modulate that protein target. As a shorthand to describe the
            biological activity of a given molecule, scientists assign a label
            referred to as mechanism-of-action or MoA for short.
          </p>
          <p className={styles.paragraph}>
            The transition to targeted drug discovery presents both challenges
            and opportunities in understanding mechanisms of action (MoA).
            Challenges include the rise of drug resistance and off-target
            effects, which can hinder therapeutic efficacy. Overcoming these
            hurdles demands precision in drug design and interdisciplinary
            collaboration among researchers, clinicians, and industry partners.
            However, this shift also heralds a new era of personalized medicine,
            where MoA insights enable tailored treatments based on individual
            patient profiles. By leveraging genomic sequencing and advanced
            imaging, healthcare providers can optimize drug efficacy while
            minimizing adverse effects. Embracing these advancements promises to
            enhance our understanding of MoA and revolutionize therapeutic
            interventions in the quest for improved patient outcomes
          </p>
        </div>
        <div
          className={styles.horizontalLine}
          style={{ backgroundColor: lineColor }}
        ></div>

        {/* What is the Mechanism of Action (MoA) of a drug? */}
        <div className={styles.section}>
          <h2 className={styles.heading}>
            What is the Mechanism of Action (MoA) of a drug?
          </h2>
          <p className={styles.paragraph}>
            In pharmacology, the term Mechanism of Action (MoA) refers to the
            specific biochemical interaction through which a drug substance
            produces its pharmacological effect. A mechanism of action usually
            includes mention of the specific molecular targets to which the drug
            binds, such as an enzyme or receptor. Receptor sites have specific
            affinities for drugs based on the chemical structure of the drug, as
            well as the specific action that occurs there. In contrast, a
            Mechanism of Action (MoA) describes how a drug works on a molecular
            level in the body.
          </p>
        </div>

        <div
          className={styles.horizontalLine}
          style={{ backgroundColor: lineColor }}
        ></div>
        {/* Importance of Mechanism of Action in Drug Discovery */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Why MOA?</h2>
          <ul className={styles.list}>
            <li>
              Understanding the mechanism of action of a drug is the most
              fundamental and thorough way of understanding how it does what it
              does. This in turn provides information regarding a drug's
              appropriate use, possible side effects, and possible
              contraindications.
            </li>
            <li>
              Mechanism of action fosters a deeper understanding and
              appreciation of a drug’s potential in treating a disease, driving
              its progress through the development pipeline.
            </li>
            <li>
              It is important in order to rationalize phenotypic findings and to
              anticipate potential side-effects.
            </li>
            <li>
              By knowing the interaction between a certain site of a drug and a
              receptor, other drugs can be formulated in a way that replicates
              this interaction, thus producing the same therapeutic effects.
              Indeed, this method is used to create new drugs.
            </li>
            <li>
              In the early stages of the clinical development lifecycle, MoA is
              critical in demonstrating the value of a drug to investors,
              collaborators, and regulatory authorities. An in-depth
              understanding of how your drug works in the body and establishing
              the unmet need is the foundation for building trust with key
              stakeholders and investors.
            </li>
          </ul>
        </div>

        <div
          className={styles.horizontalLine}
          style={{ backgroundColor: lineColor }}
        ></div>

        {/* How Mechanism of Action Is Determined With Computational Methods */}
        <div className={styles.section}>
          <h2 className={styles.heading}>
            How Mechanism of Action Is Determined With Computational Methods
          </h2>
          <p className={styles.paragraph}>
            One approach is to treat a sample of human cells with the drug and
            then analyze the cellular responses with algorithms that search for
            similarity to known patterns in large genomic databases, such as
            libraries of gene expression or cell viability patterns of drugs
            with known MoAs.
          </p>
          <p className={styles.paragraph}>
            Computation inference methods are primarily used to predict protein
            targets for small molecule drugs based on computer-based pattern
            recognition. However, this method could also be used for finding new
            targets for existing or newly developed drugs. By identifying the
            pharmacophore of the drug molecule, the profiling method of pattern
            recognition can be carried out where a new target is identified.
            This provides an insight at a possible mechanism of action since it
            is known what certain functional components of the drug are
            responsible for when interacting with a certain area on a protein,
            thus leading to a therapeutic effect.
          </p>
        </div>

        <div
          className={styles.horizontalLine}
          style={{ backgroundColor: lineColor }}
        ></div>

        {/* Who Can Use a Drug MoA? */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Who Can Use a Drug MoA?</h2>
          <ul className={styles.whoCanUseList}>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>
                Researchers and Scientists
              </span>{" "}
              – Gain insights into the biochemical and physiological pathways
              affected by the drug. Use MoA knowledge for designing experiments
              and developing new drugs.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>
                Drug Developers and Pharmaceutical Companies{" "}
              </span>
              – Facilitates the development of new drugs with similar or
              improved MoA. Helps in optimizing drug formulations and delivery
              mechanisms.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>Regulatory Agencies </span>–
              Evaluate the safety and efficacy of a drug for approval. Monitor
              and regulate the use of drugs in the market.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>
                Healthcare Professionals{" "}
              </span>
              – Understand how a drug interacts with the body to make informed
              prescribing decisions. Manage and mitigate potential side effects
              or drug interactions.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>Medical Educators </span>–
              Teach medical students and healthcare professionals about the
              mechanisms underlying drug actions. Enhance the understanding of
              pharmacology and therapeutics.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>Patients </span>– Enables
              informed consent by providing an understanding of how a drug
              works. Helps patients understand potential benefits and side
              effects of the medication.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>Pharmacists </span>–
              Facilitates appropriate drug dispensing and counseling for
              patients. Aids in identifying potential drug interactions.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>
                Health Insurers and Payers{" "}
              </span>
              – Assess the cost-effectiveness of a drug based on its MoA and
              therapeutic outcomes. Make informed decisions on drug coverage and
              reimbursement.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>Public Health Agencies </span>–
              Evaluate the impact of drugs on population health. Monitor and
              manage public health concerns related to specific drug classes.
            </li>
            <li className={styles.whoCanUseItem}>
              <span className={styles.whoCanUse}>
                Investors and Financial Analysts{" "}
              </span>
              – Make informed decisions about investing in pharmaceutical
              companies based on the potential of their drug pipelines. Assess
              the market potential and competition for drugs with similar MoA.
            </li>
          </ul>
        </div>
      </div>
          </>
  );
};

export default Overview;

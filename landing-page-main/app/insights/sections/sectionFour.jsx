import React from 'react';
import styles from './sectionFour.module.css'; // Import your CSS module
import Image from "next/image";
import Header from '@/components/Header';
import dynamic from "next/dynamic";


function SectionFour() {
  return (
    
<>
    <div className={styles.container}>


      <article className={styles.article}>

        
        <h2 className="text-2xl mb-4 font-semibold tracking-tight lg:text-3xl">Target Variables</h2>

        {/* <p className={styles.subtitle}>
          Type of Treatment
        </p> */}

        {/* <p className={styles.date}>2020-12-27</p> */}

        <section className={styles.content}>
               <h2 className='text-2xl'>Observing the Top 20 Targets Appeared in the Dataset or Sample:</h2>
        <img src='/images/photo_2024-02-25_16-31-43.jpg' className='py-10'/>
                <p>
                    From the above bar plot, we could observe the targets nfkb_inhibitor occurring more than 800 times, and proteasome_inhibitor occurring more than 700 times. These are the two target features which have occurred more than any other targets across various samples. So it might be possible that the test data also have occurring of the top target features.
                </p>
                <p>
                    'nfkb_inhibitor' is the most occurring MoA in the training dataset with a frequency of 832, and 'Proteasome_inhibitor' is the second most occurring MoA in the training set. Most of the MoAs are occurring less than 100 number of times. There are certain MoA's like 'erbb2_inhibitor' and 'atp-sensitive_potassium_channel_antagonist' not occurring even once.
                </p>
                <h2  className='text-2xl'>The Number of Targets per Sample:</h2>
        <img src='/images/photo_2024-02-25_16-33-03.jpg' width={1000} height={1000} className='py-10'/>
                <p>
                    As one can observe from the above histogram, the most number of MoAs simultaneously occurring in a single datapoint is 1. Hence one can say that for most of the cases the training set is behaving like a multi-class classification while for some points behaving like multi-label class classification. The second most occurring case is of the samples which do not give rise to any kind of MoA. There are some cases with multiple occurring MoAs in a sample, the maximum number of MoAs occurring together in any sample in the train dataset is 7.
                </p>
                <h2   className='text-2xl'>Cell Features Correlation Analysis:</h2>
        <img src='/images/photo_2024-02-25_16-35-45.jpg' width={1000} height={1000} className='py-10'/>
                <p>
                    Many of them look like slightly skewed Gaussian distribution. More or less, most of the genes have been expressed either positive or negative, depending upon the skewness of the distribution. There are certain genes like 'g-534' which have been heavily negatively expressed by some drugs, while some genes like 'g-219' seem to be immune to the drugs, hence genes like 'g-219' might not be a good feature for classification as there is not much variance.
                </p>
        <img src='/images/photo_2024-02-25_16-36-56.jpg' width={1000} height={1000} className='py-10'/>
                <p>
                    Many of them look like slightly skewed gaussian distribution.    
                                </p>

                <p>The are certain genes like'c-82' which has more left skewed distribution (most of the values are negatively) which means that after the treatment of cell line 'c-82' with drugs, there are more number of dead cells than the living cells in most of the situations</p>
                
                
                <h2  className='text-2xl'>genes which are Highly Positive  Correlated:</h2>

            <div className={styles.table_container}>
              <table>
                <thead>
                  <tr className={styles.table_heading}>
                    <th className={styles.table_cell}>gene_1</th>
                    <th className={styles.table_cell}>gene_2</th>
                    <th className={styles.table_cell}>correlation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-50</td>
                    <td className={styles.table_cell}>g-37</td>
                    <td className={styles.table_cell}>0.907061</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
                <h2>Genes which are Highly negative Correlated:</h2>
            <div className={styles.table_container}>
              <table>
                <thead>
                  <tr className={styles.table_heading}>
                    <th className={styles.table_cell}>gene_1</th>
                    <th className={styles.table_cell}>gene_2</th>
                    <th className={styles.table_cell}>correlation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-349</td>
                    <td className={styles.table_cell}>g-63</td>
                    <td className={styles.table_cell}>-0.806210</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-349</td>
                    <td className={styles.table_cell}>g-228</td>
                    <td className={styles.table_cell}>-0.820275</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-460</td>
                    <td className={styles.table_cell}>g-228</td>
                    <td className={styles.table_cell}>-0.807640</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-744</td>
                    <td className={styles.table_cell}>g-228</td>
                    <td className={styles.table_cell}>-0.808788</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>g-760</td>
                    <td className={styles.table_cell}>g-248</td>
                    <td className={styles.table_cell}>-0.809137</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2  className='text-2xl'>Cell features which are positively highly correlated</h2>
            <div className={styles.table_container}>
              <table>
                <thead>
                  <tr className={styles.table_heading}>
                    <th className={styles.table_cell}></th>
                    <th className={styles.table_cell}>cell_line_1</th>
                    <th className={styles.table_cell}>cell_line_2</th>
                    <th className={styles.table_cell}>correlation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>1368</td>
                    <td className={styles.table_cell}>c-52</td>
                    <td className={styles.table_cell}>c-42</td>
                    <td className={styles.table_cell}>0.924619</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>2641</td>
                    <td className={styles.table_cell}>c-73</td>
                    <td className={styles.table_cell}>c-13</td>
                    <td className={styles.table_cell}>0.923344</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>338</td>
                    <td className={styles.table_cell}>c-26</td>
                    <td className={styles.table_cell}>c-13</td>
                    <td className={styles.table_cell}>0.921875</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>534</td>
                    <td className={styles.table_cell}>c-33</td>
                    <td className={styles.table_cell}>c-6</td>
                    <td className={styles.table_cell}>0.914730</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>1496</td>
                    <td className={styles.table_cell}>c-55</td>
                    <td className={styles.table_cell}>c-11</td>
                    <td className={styles.table_cell}>0.914637</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>1991</td>
                    <td className={styles.table_cell}>c-63</td>
                    <td className={styles.table_cell}>c-38</td>
                    <td className={styles.table_cell}>0.914578</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>4409</td>
                    <td className={styles.table_cell}>c-94</td>
                    <td className={styles.table_cell}>c-38</td>
                    <td className={styles.table_cell}>0.914368</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>4384</td>
                    <td className={styles.table_cell}>c-94</td>
                    <td className={styles.table_cell}>c-13</td>
                    <td className={styles.table_cell}>0.914001</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>1330</td>
                    <td className={styles.table_cell}>c-52</td>
                    <td className={styles.table_cell}>c-4</td>
                    <td className={styles.table_cell}>0.913649</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>865</td>
                    <td className={styles.table_cell}>c-42</td>
                    <td className={styles.table_cell}>c-4</td>
                    <td className={styles.table_cell}>0.913242</td>
                  </tr>
                </tbody>
              </table>
            </div>

                <p className='mt-10'>
                    It is clear that there are just two genes ('g-50', 'g-37') highly correlated having a value +0.907061, while there are five pairs of genes which share a high negative correlation (below -0.80). Genes 'g-349' and 'g-228' are negatively highly correlated with a value of -0.820275. Suppose a high value of gene expression for gene 'g-50' is observed for a datapoint then 'g-37' has to have a high value too, while suppose 'g-460' has a high value for a datapoint then 'g-228' has to have a low value due to negative correlation.
                <p>
                    It was clear from the heatmap only that there are many cell lines which are positively highly correlated to other cell lines and there are 108 pairs of cell lines highly correlated (above +0.9). The highest positive correlation is +0.924619 between 'c-52' and 'c-42' cell lines and the lowest is +0.612084 between 'c-22' and 'c-16'.
                </p>

                </p>
                <h2  className='text-2xl'>Multivariate Analysis - Target Variables - Correlation Between Train Target Variables:</h2>
        <img src='/images/photo_2024-02-25_16-46-46.jpg' width={1000} height={1000} className='py-10'/>
        
                <p>
                    From the above relationship heatmap, we can see that the majority of the MoAs are less or uncorrelated as a large portion of the locale is seeming dark or white. Black stripes signify less or no correlation between two variables while white signifies that a particular MoA might not be present for any sample at all. For example: 'dk_inhibitor' has a white strip in the heatmap as there are no samples in data with 'dk_inhibitor' as one of the MoAs. 
                </p>

                <h2>MoAs which are highly correlated</h2>
                
            <div className={styles.table_container}>
              <table>
                <thead>
                  <tr className={styles.table_heading}>
                    <th className={styles.table_cell}></th>
                    <th className={styles.table_cell}>MoA_1</th>
                    <th className={styles.table_cell}>MoA_2</th>
                    <th className={styles.table_cell}>correlation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>0</td>
                    <td className={styles.table_cell}>dopamine_release_enhancer</td>
                    <td className={styles.table_cell}>acetylcholine_release_enhancer</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>1</td>
                    <td className={styles.table_cell}>glutamat e_receptor_modulator</td>
                    <td className={styles.table_cell}>acetylcholine_release_enhancer</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>2</td>
                    <td className={styles.table_cell}>glutamate_receptor_modulator</td>
                    <td className={styles.table_cell}>dopamine_release_enhancer</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>3</td>
                    <td className={styles.table_cell}>heme_oxygenase_activators</td>
                    <td className={styles.table_cell}>glutathione_reductase_(nadph)_activators</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>4</td>
                    <td className={styles.table_cell}>hiv_integrase inhibitor</td>
                    <td className={styles.table_cell}>dna_polymerase_inhibitor</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>5</td>
                    <td className={styles.table_cell}>id1_expression_inhibitor</td>
                    <td className={styles.table_cell}>cdk_expression_enhancer</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>6</td>
                    <td className={styles.table_cell}>peptidase_inhibitor</td>
                    <td className={styles.table_cell}>glycine_receptor_antagonist</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>7</td>
                    <td className={styles.table_cell}>protein kinase_activator</td>
                    <td className={styles.table_cell}>aldehyde dehydrogenase_activator</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>8</td>
                    <td className={styles.table_cell}>quorum_sensing_signaling_modulator</td>
                    <td className={styles.table_cell}>hiv_protease inhibitor</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>9</td>
                    <td className={styles.table_cell}>ret_tyrosine_kinase_inhibitor</td>
                    <td className={styles.table_cell}>rad51_inhibitor</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>10</td>
                    <td className={styles.table_cell}>ror_inverse_agonist</td>
                    <td className={styles.table_cell}>abc_transporter_expression_enhancer</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>11</td>
                    <td className={styles.table_cell}> sars_coronavirus_3c-like_protease inhibitor</td>
                    <td className={styles.table_cell}>nfkb_activator</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>12</td>
                    <td className={styles.table_cell}>sodium_calcium_exchange_inhibitor</td>
                    <td className={styles.table_cell}>mitochondrial_na+_ca2+_exchanger_antagonist</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>13</td>
                    <td className={styles.table_cell}>steroid_sulfatase inhibitor</td>
                    <td className={styles.table_cell}>androgen_biosynthesis_inhibitor</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>14</td>
                    <td className={styles.table_cell}>steryl sulfatase inhibitor</td>
                    <td className={styles.table_cell}>hiv_protease inhibitor</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                  <tr className={styles.table_row}>
                    <td className={styles.table_cell}>15</td>
                    <td className={styles.table_cell}>quorum sensing signaling_modulator</td>
                    <td className={styles.table_cell}>g-248</td>
                    <td className={styles.table_cell}>1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
                <p>There are 15 pairs of MoAs which are perfectly positive correlated.</p>
        </section>
      </article>
    </div>
</>
  );
}

export default dynamic (() => Promise.resolve(SectionFour), {ssr: false})

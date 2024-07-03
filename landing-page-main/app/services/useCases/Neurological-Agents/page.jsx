import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          
 Neurological Agents

        </h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            Anticonvulsants: Modulate ion channels or neurotransmitter activity to reduce neuronal excitability and prevent seizures.


          </li>
          <li>
            Antidepressants: Increase the levels of neurotransmitters like serotonin and norepinephrine in the brain, regulating mood and reducing symptoms of depression.


          </li>
          <li>
            
Antipsychotics: Block dopamine receptors in the brain, reducing psychotic symptoms such as hallucinations and delusions.

          </li>
        </ul>
        
      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
Alzheimer's disease, Parkinson's disease, epilepsy, depression.


      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
        
Examples: Donepezil, levodopa, gabapentin, sertraline.


      </p>
    </div>
  </div>

<div className="bg-gray-100 p-6 rounded-lg">
  <ol className="list-decimal list-inside text-lg ">
    <li className="mb-2">
      <span className="font-semibold">1. &nbsp;acetylcholine_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Stimulates acetylcholine receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">2. &nbsp;acetylcholinesterase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits the enzyme acetylcholinesterase</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">3. &nbsp;cannabinoid_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Activates cannabinoid receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">4. &nbsp;dopamine_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Stimulates dopamine receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">5. &nbsp;dopamine_receptor_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks dopamine receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">6. &nbsp;gamma_secretase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits gamma secretase enzyme</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">7. &nbsp;gaba_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Activates GABA receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">8. &nbsp;gaba_receptor_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks GABA receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">9. &nbsp;histamine_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Activates histamine receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">10. &nbsp;serotonin_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Stimulates serotonin receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">11. &nbsp;serotonin_receptor_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks serotonin receptors</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">12. &nbsp;serotonin_reuptake_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits the reuptake of serotonin</li>
      </ul>
    </li>
  </ol>
</div>
</section>


      <div className="overflow-x-auto pb-10">
                <h2 className="text-3xl font-semibold mb-4 ">Drugs</h2>
  
      <table className="w-full max-w-md table-auto">

<tbody>
  <tr>
    <td className="px-4 py-3">Levodopa</td>
    <td className="px-4 py-3 border-b">Donepezil</td>
    <td className="px-4 py-3 border-b">Gabapentin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Pregabalin</td>
    <td className="px-4 py-3 border-b">Risperidone</td>
    <td className="px-4 py-3 border-b">Quetiapine</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Lithium</td>
    <td className="px-4 py-3 border-b">Valproic Acid</td>
    <td className="px-4 py-3 border-b">Lamotrigine</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Diazepam</td>
    <td className="px-4 py-3 border-b">Lorazepam</td>
    <td className="px-4 py-3 border-b">Phenobarbital</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Memantine</td>
    <td className="px-4 py-3 border-b">Baclofen</td>
    <td className="px-4 py-3 border-b">Topiramate</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Lacosamide</td>
    <td className="px-4 py-3 border-b">Brivaracetam</td>
    <td className="px-4 py-3 border-b">Zonisamide</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Valproic acid</td>
    <td className="px-4 py-3 border-b">Topiramate</td>
    <td className="px-4 py-3 border-b">Perampanel</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Clonazepam</td>
    <td className="px-4 py-3 border-b">Lorazepam</td>
    <td className="px-4 py-3 border-b">Oxcarbazepine</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Vigabatrin</td>
    <td className="px-4 py-3 border-b">Ropinirole</td>
    <td className="px-4 py-3 border-b">Pramipexole</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Rotigotine</td>
    <td className="px-4 py-3 border-b">Entacapone</td>
    <td className="px-4 py-3 border-b">Rasagiline</td>
  </tr>
</tbody>
 
      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">
            Neurological Agents diseases


        </h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            Epilepsy: A neurological disorder characterized by recurrent seizures, resulting from abnormal electrical activity in the brain, often treated with anticonvulsant medications.

          </li>
          <li>
            Parkinson's disease: A progressive neurodegenerative disorder characterized by motor symptoms such as tremors, bradykinesia, rigidity, and postural instability, often treated with dopaminergic medications.

          </li>
          <li>
Major depressive disorder: A mood disorder characterized by persistent feelings of sadness, loss of interest or pleasure, changes in appetite or sleep, and other symptoms, often treated with antidepressant medications.

          </li>
          <li>
Alzheimer's disease: A progressive neurodegenerative disorder characterized by memory loss, cognitive decline, and behavioral changes, often treated with cholinesterase inhibitors or memantine to manage symptoms.

          </li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-10" >
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Dangerous</h3>
            <p className="text-lg ">
Glioblastoma multiforme (GBM): This aggressive form of brain cancer is often considered one of the most deadly cancers. GBM tumors are highly infiltrative, making complete surgical removal challenging, and they tend to recur even after aggressive treatment with surgery, radiation therapy, and chemotherapy. The prognosis for GBM is generally poor, with a median survival of around 12-18 months after diagnosis.


            </p>
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">

Epilepsy: Epilepsy is a neurological disorder characterized by recurrent seizures and affects people of all ages worldwide. It is estimated that around 50 million people globally have epilepsy, making it one of the most common neurological conditions.

            </p>
          </div>
        </div>
      </section>

      <section >
        <p className="text-xl  mb-4">
A disease where finding effective treatments or cures presents significant challenges.

        </p>
        <p className="text-lg  pb-10">
Amyotrophic lateral sclerosis (ALS): ALS, also known as Lou Gehrig's disease, is a progressive neurodegenerative disorder that affects nerve cells in the brain and spinal cord, leading to muscle weakness, paralysis, and ultimately respiratory failure. Currently, there is no cure for ALS, and available treatments such as riluzole and edaravone provide only modest benefits in slowing disease progression. The complex underlying mechanisms of ALS, coupled with its heterogeneity and rapid progression, pose significant challenges in developing effective therapies. Additionally, the lack of reliable biomarkers for ALS diagnosis and monitoring further complicates clinical trials and drug development efforts.


        </p>
      </section>
    </article>
  );
}

export default Page;

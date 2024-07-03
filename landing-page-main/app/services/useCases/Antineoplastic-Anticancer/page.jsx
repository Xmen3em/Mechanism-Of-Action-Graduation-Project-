import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          
    Antineoplastic/Anticancer 

        </h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            
Chemotherapy: Interfere with the cell cycle or DNA synthesis, leading to cell death or inhibition of cancer cell proliferation.

          </li>
          <li>
            Targeted therapy: Block specific molecules or pathways involved in cancer growth and progression, such as receptor tyrosine kinases or growth factor receptors.


          </li>
          <li>
            Immunotherapy: Enhance the immune system's ability to recognize and destroy cancer cells, often by targeting immune checkpoints or cancer-specific antigens.


          </li>
        </ul>


      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">

Various cancers (breast cancer, lung cancer, leukemia, etc.).

      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
        
Examples: Paclitaxel, doxorubicin, imatinib, tamoxifen.


      </p>
    </div>
  </div>
<div className="bg-gray-100 p-6 rounded-lg">
  {/* <h3 className="text-xl font-semibold mb-4 ">Mechanisms of Action</h3> */}
  <ol className="list-decimal list-inside text-lg">
    <li className="mb-2">
      <span className="font-semibold">1. &nbsp;ALK Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Targets the anaplastic lymphoma kinase (ALK) gene to prevent cancer cell growth.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">2. &nbsp;Aurora Kinase Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits aurora kinases, enzymes involved in cell division, to halt cancer cell proliferation.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">3. &nbsp;BCR-ABL Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Blocks the BCR-ABL protein that promotes cancer cell growth in chronic myeloid leukemia (CML).</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">4. &nbsp;EGFR Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the epidermal growth factor receptor (EGFR) to prevent cancer cell growth and survival.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">5. &nbsp;FLT3 Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Targets the FMS-like tyrosine kinase 3 (FLT3) to inhibit the growth of certain types of leukemia cells.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">6. &nbsp;HCV Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the hepatitis C virus (HCV) replication by targeting viral enzymes.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">7. &nbsp;mTOR Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the mammalian target of rapamycin (mTOR) pathway to prevent cancer cell growth and proliferation.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">8. &nbsp;Proteasome Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the proteasome, an enzyme complex that degrades proteins, to induce cancer cell death.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">9. &nbsp;RAF Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Targets the RAF kinases to block the MAPK/ERK signaling pathway, preventing cancer cell proliferation.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">10. &nbsp;RAS GTPase Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the RAS GTPase, a protein involved in cell signaling, to block cancer cell growth.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">11. &nbsp;Topoisomerase Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits topoisomerase enzymes that help in DNA replication, causing DNA damage and cancer cell death.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">12. &nbsp;Tyrosine Kinase Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits tyrosine kinases, enzymes involved in the signaling pathways that regulate cell division and survival, to treat cancer.</li>
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
    <td className="px-4 py-3 border-b">Paclitaxel</td>
    <td className="px-4 py-3 border-b">Carboplatin</td>
    <td className="px-4 py-3 border-b">Cisplatin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Doxorubicin</td>
    <td className="px-4 py-3 border-b">Methotrexate</td>
    <td className="px-4 py-3 border-b">Tamoxifen</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Imatinib</td>
    <td className="px-4 py-3 border-b">Rituximab</td>
    <td className="px-4 py-3 border-b">Trastuzumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Gefitinib</td>
    <td className="px-4 py-3 border-b">Erlotinib</td>
    <td className="px-4 py-3 border-b">Bevacizumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Vinblastine</td>
    <td className="px-4 py-3 border-b">Vincristine</td>
    <td className="px-4 py-3 border-b">Bortezomib</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Erlotinib</td>
    <td className="px-4 py-3 border-b">Trastuzumab</td>
    <td className="px-4 py-3 border-b">Panitumumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Dasatinib</td>
    <td className="px-4 py-3 border-b">Nivolumab</td>
    <td className="px-4 py-3 border-b">Pembrolizumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Abemaciclib</td>
    <td className="px-4 py-3 border-b">Alectinib</td>
    <td className="px-4 py-3 border-b">Olaparib</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Enzalutamide</td>
    <td className="px-4 py-3 border-b">Palbociclib</td>
    <td className="px-4 py-3 border-b">Ribociclib</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Ibrutinib</td>
    <td className="px-4 py-3 border-b">Venetoclax</td>
    <td className="px-4 py-3 border-b">Trifluridine/tipiracil</td>
  </tr>
</tbody>

      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">
          Antineoplastic/Anticancer diseases 


        </h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            Breast cancer: A malignant tumor that develops in the breast tissue, which may include invasive ductal carcinoma, invasive lobular carcinoma, or other subtypes.

          </li>
          <li>
Lung cancer: A malignancy arising from the lung tissue, including non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC), often associated with smoking.

          </li>
          <li>
Leukemia: Cancer of the blood-forming tissues, characterized by the overproduction of abnormal white blood cells (leukocytes), including acute lymphoblastic leukemia (ALL), acute myeloid leukemia (AML), chronic lymphocytic leukemia (CLL), and chronic myeloid leukemia (CML).

          </li>
          <li>
Lymphoma: Cancer of the lymphatic system, including Hodgkin lymphoma and various subtypes of non-Hodgkin lymphoma, characterized by the abnormal growth of lymphocytes.

          </li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Dangerous</h3>
            <p className="text-lg ">
Pancreatic cancer: Pancreatic cancer has one of the lowest survival rates among cancers, often due to late diagnosis and aggressive tumor behavior. It tends to spread rapidly and is frequently diagnosed at an advanced stage, making it difficult to treat effectively.


            </p>
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">

Lung cancer: Lung cancer is one of the most prevalent cancers globally and a leading cause of cancer-related deaths. It is closely associated with tobacco smoking but can also occur in non-smokers due to other factors such as exposure to secondhand smoke, air pollution, or occupational hazards.

            </p>
          </div>
        </div>
      </section>

      <section >
        <p className="text-xl  mb-4">
A disease where finding effective treatments or cures presents significant challenges.

        </p>
        <p className="text-lg  pb-10">
Glioblastoma multiforme (GBM): GBM is an aggressive form of brain cancer with a poor prognosis and limited treatment options. Despite extensive research efforts, including surgery, radiation therapy, and chemotherapy with drugs like temozolomide, the median survival for patients with GBM remains relatively short. The highly invasive nature of GBM tumors, along with their ability to evade treatment and recur, presents significant challenges in developing effective therapies. Additionally, the blood-brain barrier limits the delivery of drugs to the brain, further complicating treatment strategies for GBM.


        </p>
      </section>
    </article>
  );
}

export default Page;

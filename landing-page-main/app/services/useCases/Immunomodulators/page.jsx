import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          
 Immunomodulators

        </h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            DMARDs: Suppress the immune system's activity to reduce inflammation and slow the progression of autoimmune diseases.


          </li>
          <li>
            
Biologic agents: Target specific molecules or cells involved in the immune response, such as cytokines or immune cells.

          </li>
          <li>
            Corticosteroids: Broadly suppress inflammation and immune responses, commonly used as adjunctive therapy in autoimmune diseases.


          </li>
        </ul>
             </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
Rheumatoid arthritis, multiple sclerosis, inflammatory bowel diseases.


      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
        
Examples: Methotrexate, infliximab, adalimumab, rituximab.


      </p>
    </div>
  </div>

<div className="bg-gray-100 p-6 rounded-lg">
  <ol className="list-decimal list-inside text-lg ">
    <li className="mb-4">
      <span className="font-semibold">1. &nbsp;akt_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits Akt signaling pathway involved in cell survival and proliferation.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">2. &nbsp;bcl_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Targets Bcl family proteins to induce apoptosis in cancer cells.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">3. &nbsp;btk_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits Bruton's tyrosine kinase, important in B cell signaling and autoimmune diseases.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">4. &nbsp;calcineurin_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks calcineurin, used to suppress immune response post-transplant.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">5. &nbsp;histone_lysine_demethylase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits enzymes that demethylate histones, influencing gene expression.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">6. &nbsp;histone_lysine_methyltransferase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits enzymes that methylate histones, affecting chromatin structure and gene regulation.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">7. &nbsp;hsp_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits heat shock proteins, which assist in protein folding and cellular stress response.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">8. &nbsp;igf-1_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks insulin-like growth factor 1 (IGF-1), involved in cell growth and survival.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">9. &nbsp;ikk_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits IκB kinase, involved in NF-κB pathway and inflammation.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">10. &nbsp;mtor_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Targets mammalian target of rapamycin (mTOR), regulating cell growth and metabolism.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">11. &nbsp;nfkb_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits nuclear factor kappa B (NF-κB), a key regulator of inflammation and immune response.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">12. &nbsp;p38_mapk_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits p38 mitogen-activated protein kinase (MAPK), involved in inflammation and stress response.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">13. &nbsp;pi3k_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits phosphoinositide 3-kinase (PI3K), important in cell growth, survival, and metabolism.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">14. &nbsp;tgf-beta_receptor_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks TGF-beta receptor signaling, involved in cell growth, differentiation, and immune suppression.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">15. &nbsp;tlr_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Acts as an agonist to Toll-like receptors (TLRs), triggering immune responses.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">16. &nbsp;tlr_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Blocks Toll-like receptors (TLRs), modulating immune responses.</li>
      </ul>
    </li>
    <li className="mb-4">
      <span className="font-semibold">17. &nbsp;Tnfr_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Antagonizes tumor necrosis factor receptors (TNFRs), involved in inflammation and apoptosis.</li>
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
    <td className="px-4 py-3">Adalimumab</td>
    <td className="px-4 py-3 border-b">Infliximab</td>
    <td className="px-4 py-3 border-b">Etanercept</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Interferon-alpha</td>
    <td className="px-4 py-3 border-b">Interferon-beta</td>
    <td className="px-4 py-3 border-b">Interferon-gamma</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Natalizumab</td>
    <td className="px-4 py-3 border-b">Rituximab</td>
    <td className="px-4 py-3 border-b">Tocilizumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Ustekinumab</td>
    <td className="px-4 py-3 border-b">Abatacept</td>
    <td className="px-4 py-3 border-b">Anakinra</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Secukinumab</td>
    <td className="px-4 py-3 border-b">Vedolizumab</td>
    <td className="px-4 py-3 border-b">Omalizumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Secukinumab</td>
    <td className="px-4 py-3 border-b">Certolizumab</td>
    <td className="px-4 py-3 border-b">Golimumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Tofacitinib</td>
    <td className="px-4 py-3 border-b">Baricitinib</td>
    <td className="px-4 py-3 border-b">Ruxolitinib</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Ustekinumab</td>
    <td className="px-4 py-3 border-b">Efalizumab</td>
    <td className="px-4 py-3 border-b">Natalizumab</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Adalimumab</td>
    <td className="px-4 py-3 border-b">Infliximab</td>
    <td className="px-4 py-3 border-b">Alefacept</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Rituximab</td>
    <td className="px-4 py-3 border-b">Eculizumab</td>
    <td className="px-4 py-3 border-b">Belimumab</td>
  </tr>
</tbody>

      </table>
    </div>

     
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">
   Immunomodulators diseases


        </h2>
         <div className="space-y-4">
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <div className="space-y-2">
            <span>  Rheumatoid Arthritis (RA): </span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
 Rheumatoid arthritis is an autoimmune disorder that primarily affects the joints, causing inflammation, pain, and stiffness. Immunomodulators, such as disease-modifying antirheumatic drugs (DMARDs) and biologic agents, are commonly used to manage RA.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Multiple Sclerosis (MS):</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
 Multiple sclerosis is a chronic inflammatory disease of the central nervous system, characterized by damage to the myelin sheath surrounding nerve fibers. Immunomodulatory therapies are used to reduce the frequency and severity of relapses, delay disease progression, and manage symptoms. 
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Inflammatory Bowel Diseases (IBD):
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
 Inflammatory bowel diseases, including Crohn's disease and ulcerative colitis, are chronic inflammatory conditions of the gastrointestinal tract. Immunomodulators such as corticosteroids, thiopurines (azathioprine, 6-mercaptopurine), and biologic agents (anti-TNF agents, anti-integrin agents, anti-interleukin agents) are used to induce and maintain remission, reduce inflammation, and prevent disease flare-ups. 
</li>
            </ul>
          </div>
        </li>
       
             </ol>
    </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Dangerous</h3>
            <p className="text-lg ">
• Rheumatoid Arthritis (RA) and Inflammatory Bowel Diseases (IBD) such as Crohn's disease and ulcerative colitis are often considered potentially dangerous due to their chronic nature, progressive tissue damage, and risk of serious complications if left untreated. In RA, untreated joint inflammation can lead to irreversible joint damage, deformity, and disability. In IBD, untreated inflammation can cause bowel strictures, fistulas, and an increased risk of colorectal cancer.

            </p>
            <p className="text-lg ">

• Multiple Sclerosis (MS) can also be considered dangerous due to its potential for neurological disability, including mobility impairment, cognitive dysfunction, and loss of vision, particularly in progressive forms of the disease.


            </p>
           
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">
• Rheumatoid Arthritis (RA) affects approximately 0.5-1% of the global population, making it one of the most common autoimmune disorders worldwide.


            </p>
            <p className="text-lg ">
• Inflammatory Bowel Diseases (IBD), including Crohn's disease and ulcerative colitis, collectively affect millions of people worldwide, with increasing incidence reported in many regions.

            </p>
            <p className="text-lg ">
• Multiple Sclerosis (MS) is estimated to affect around 2.8 million people globally, with higher prevalence in regions further from the equator.

            </p>
          </div>
        </div>
      </section>

      <section >
        <p className="text-xl  mb-4">

A disease where finding effective treatments or cures presents significant challenges.
        </p>
        <p className="text-lg  pb-10">

• Transplant Rejection: Transplant rejection occurs when the immune system recognizes transplanted tissues or organs as foreign and attacks them. Immunosuppressive medications, including immunomodulators, are used to prevent rejection and allow for successful organ transplantation. However, achieving a balance between preventing rejection and minimizing the risk of infection or malignancy remains a challenge.

        </p>
<p>
• Chronic Viral Infections: Chronic viral infections, such as human immunodeficiency virus (HIV), hepatitis B virus (HBV), and hepatitis C virus (HCV), pose significant challenges due to their ability to evade immune responses and establish persistent infections. Immunomodulatory approaches, such as antiretroviral therapy for HIV and immune-based therapies for viral hepatitis, aim to control viral replication and prevent disease progression. However, achieving viral eradication or functional cure remains elusive in many cases.

        </p>
      </section>
    </article>

  );
}

export default Page;

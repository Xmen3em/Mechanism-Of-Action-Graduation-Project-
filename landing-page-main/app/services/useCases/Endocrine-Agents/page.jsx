import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          
  Endocrine Agents

        </h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            Insulin: Lowers blood glucose levels by facilitating the uptake of glucose into cells and inhibiting glucose production in the liver.


          </li>
          <li>
            Thyroid hormones: Regulate metabolism and energy production by binding to nuclear receptors and modulating gene expression.


          </li>
          <li>
            
Corticosteroids: Mimic the actions of cortisol, regulating immune responses, metabolism, and stress responses.

          </li>
        </ul>
        
      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">

Diabetes mellitus, thyroid disorders, polycystic ovary syndrome.

      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
        
Examples: Metformin, levothyroxine, insulin, tamoxifen.


      </p>
    </div>
  </div>

<div className="bg-gray-100 p-6 rounded-lg">
  {/* <h3 className="text-xl font-semibold mb-4 ">Mechanisms of Action</h3> */}
  <ol className="list-decimal list-inside text-lg ">
    <li className="mb-2">
      <span className="font-semibold">1. &nbsp;11-beta-hsd1_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits the enzyme 11-beta-hydroxysteroid dehydrogenase type 1, reducing cortisol production.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">2. &nbsp;akt_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits the protein kinase B (Akt), interfering with cell survival and proliferation signals.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">3. &nbsp;aldehyde_dehydrogenase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits aldehyde dehydrogenase, affecting alcohol metabolism and cellular detoxification.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">4. &nbsp;aromatase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits the enzyme aromatase, reducing the conversion of androgens to estrogens.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">5. &nbsp;cortisol_synthesis_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits enzymes involved in cortisol synthesis, lowering cortisol levels.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">6. &nbsp;estrogen_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to and activates estrogen receptors, mimicking the effects of estrogen.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">7. &nbsp;estrogen_receptor_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to estrogen receptors but blocks their activation, preventing estrogen effects.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">8. &nbsp;faah_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits fatty acid amide hydrolase, increasing levels of endocannabinoids.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">9. &nbsp;farnesyltransferase_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits farnesyltransferase, preventing the modification of proteins required for cancer cell growth.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">10. &nbsp;glucocorticoid_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to and activates glucocorticoid receptors, mimicking the effects of cortisol.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">11. &nbsp;hmgcr_inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Inhibits HMG-CoA reductase, lowering cholesterol synthesis.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">12. &nbsp;insulin_secretagogue</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Stimulates the pancreas to secrete insulin, aiding in blood sugar control.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">13. &nbsp;insulin_sensitizer</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Enhances the sensitivity of cells to insulin, improving glucose uptake.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">14. &nbsp;progesterone_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to and activates progesterone receptors, mimicking the effects of progesterone.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">15. &nbsp;progesterone_receptor_antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to progesterone receptors but blocks their activation, preventing progesterone effects.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">16. &nbsp;vitamin_d_receptor_agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground ">
        <li>Binds to and activates vitamin D receptors, mimicking the effects of vitamin D.</li>
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
    <td className="px-4 py-3 border-b">Levothyroxine</td>
    <td className="px-4 py-3 border-b">Insulin</td>
    <td className="px-4 py-3 border-b">Metformin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Hydrocortisone</td>
    <td className="px-4 py-3 border-b">Thyroid Hormone Replacement</td>
    <td className="px-4 py-3 border-b">Glipizide</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Pioglitazone</td>
    <td className="px-4 py-3 border-b">Exenatide</td>
    <td className="px-4 py-3 border-b">Desmopressin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Testosterone</td>
    <td className="px-4 py-3 border-b">Estrogen</td>
    <td className="px-4 py-3 border-b">Progesterone</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Tamoxifen</td>
    <td className="px-4 py-3 border-b">Leuprolide</td>
    <td className="px-4 py-3 border-b">Octreotide</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Exenatide</td>
    <td className="px-4 py-3 border-b">Liraglutide</td>
    <td className="px-4 py-3 border-b">Empagliflozin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Dapagliflozin</td>
    <td className="px-4 py-3 border-b">Canagliflozin</td>
    <td className="px-4 py-3 border-b">Liraglutide</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Linagliptin</td>
    <td className="px-4 py-3 border-b">Sitagliptin</td>
    <td className="px-4 py-3 border-b">Saxagliptin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Nateglinide</td>
    <td className="px-4 py-3 border-b">Repaglinide</td>
    <td className="px-4 py-3 border-b">Acarbose</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Miglitol</td>
    <td className="px-4 py-3 border-b">Rosiglitazone</td>
    <td className="px-4 py-3 border-b">Pioglitazone</td>
  </tr>
</tbody>

      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">
Endocrine Agents diseases


        </h2>
         <div className="space-y-4">
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <div className="space-y-2">
            <span> Diabetes Mellitus: </span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
                Diabetes mellitus is a chronic metabolic disorder characterized by high blood sugar levels (hyperglycemia) due to insufficient insulin production, resistance to insulin action, or both.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Thyroid Disorders: </span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
 Thyroid disorders involve abnormalities in the function or structure of the thyroid gland, which regulates metabolism through the production of thyroid hormones.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Polycystic Ovary Syndrome (PCOS):
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
PCOS is a hormonal disorder that affects reproductive-age women, characterized by irregular menstrual cycles, hyperandrogenism (elevated levels of male hormones), and polycystic ovaries.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Hyperlipidemia: </span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
Elevated levels of lipids (cholesterol, triglycerides) in the blood, increasing the risk of cardiovascular disease.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Osteoporosis: 
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
Bone disorder characterized by decreased bone density and increased risk of fractures.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Adrenal Disorders: </span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
 Disorders affecting the adrenal glands, such as Addison's disease (adrenal insufficiency) and Cushing's syndrome (excess cortisol).</li>
            </ul>
          </div>
        </li>
             </ol>
    </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Dangerous</h3>
            <p className="text-lg ">
• Diabetes is associated with a wide range of complications that can significantly impact life expectancy and quality of life if not adequately managed.


            </p>
            <p className="text-lg ">

• Cardiovascular disease: Diabetes significantly increases the risk of heart disease, heart attack, stroke, and peripheral artery disease, which are leading causes of death among people with diabetes.


            </p>
            <p className="text-lg ">

• Neuropathy: Nerve damage caused by diabetes can lead to pain, numbness, and loss of sensation, particularly in the feet and hands. It can also lead to diabetic foot ulcers, infections, and, in severe cases, limb amputation.


            </p>
            <p className="text-lg ">

• Nephropathy: Diabetes is a leading cause of kidney disease and kidney failure, requiring dialysis or kidney transplantation for survival.


            </p>
            <p className="text-lg ">

• Retinopathy: Diabetes can damage the blood vessels in the retina, leading to diabetic retinopathy, which is a leading cause of blindness in adults.


            </p>
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">
• Diabetes Mellitus: is one of the most widespread endocrine disorders. It affects millions of people globally and has reached epidemic proportions in many parts of the world. Within diabetes mellitus, type 2 diabetes is particularly prevalent.


            </p>
            <p className="text-lg ">
• Global Prevalence: Diabetes affects an estimated 463 million adults worldwide, and this number is expected to rise to 700 million by 2045, according to the International Diabetes Federation (IDF). Type 2 diabetes accounts for the majority of diabetes cases globally.


            </p>
            <p className="text-lg ">
• Risk Factors: Type 2 diabetes is closely linked to lifestyle factors such as obesity, physical inactivity, and unhealthy diets. These risk factors have become increasingly prevalent due to changes in dietary habits, sedentary lifestyles, urbanization, and aging populations.


            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <p className="text-xl  mb-4">

A disease where finding effective treatments or cures presents significant challenges.
        </p>
        <p className="text-lg  pb-10">

Polycystic Ovary Syndrome (PCOS): PCOS is a common endocrine disorder characterized by hormonal imbalance, irregular menstrual cycles, ovarian cysts, and metabolic disturbances. Management of PCOS involves addressing symptoms such as infertility, hirsutism, acne, and metabolic complications such as insulin resistance and obesity. Developing targeted therapies that address the underlying hormonal and metabolic dysregulation in PCOS while minimizing side effects presents challenges.

        </p>
      </section>
    </article>
  );
}

export default Page;

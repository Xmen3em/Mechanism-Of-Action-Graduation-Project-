import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          
 Cardiovascular Agents

        </h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
            Antihypertensives: Dilate blood vessels, reduce blood volume, or decrease cardiac output to lower blood pressure.


          </li>
          <li>
            Antiarrhythmics: Stabilize the electrical activity of the heart by blocking ion channels or altering ion flow across cell membranes.


          </li>
          <li>
            
Anticoagulants: Inhibit the clotting cascade or prevent the formation of blood clots, reducing the risk of thrombosis or embolism.

          </li>
        </ul>

      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
Hypertension, coronary artery disease, heart failure.


      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <p className="text-lg ">
        

Examples: Amlodipine, metoprolol, lisinopril, warfarin.

      </p>
    </div>
  </div>

<div className="bg-gray-100 p-6 rounded-lg">
  {/* <h3 className="text-xl font-semibold mb-4 ">Mechanisms of Action</h3> */}
  <ol className="list-decimal list-inside text-lg">
    <li className="mb-2">
      <span className="font-semibold">1. &nbsp;Adenosine Receptor Agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>A drug that binds to and activates adenosine receptors, often used in the treatment of cardiac arrhythmias and certain types of pain.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">2. &nbsp;Adrenergic Receptor Agonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>A substance that stimulates the adrenergic receptors, mimicking the effects of adrenaline and noradrenaline, commonly used in asthma, cardiac arrest, and anaphylaxis.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">3. &nbsp;Angiotensin Receptor Antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Drugs that block the effects of angiotensin II, helping to lower blood pressure and treat heart failure.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">4. &nbsp;Calcium Channel Blocker</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Medications that prevent calcium from entering cells of the heart and blood vessel walls, leading to lower blood pressure and reduced heart workload.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">5. &nbsp;Cholesterol Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>A type of drug that reduces the amount of cholesterol produced by the liver, often used to prevent cardiovascular diseases.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">6. &nbsp;Mineralocorticoid Receptor Antagonist</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Drugs that block the action of aldosterone on its receptors, used to treat heart failure, high blood pressure, and conditions of excess aldosterone.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">7. &nbsp;Nitric Oxide Donor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Agents that release nitric oxide, which relaxes smooth muscle in blood vessels, leading to vasodilation and increased blood flow.</li>
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
    <td className="px-4 py-3 border-b">Atenolol</td>
    <td className="px-4 py-3 border-b">Lisinopril</td>
    <td className="px-4 py-3 border-b">Metoprolol</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Amlodipine</td>
    <td className="px-4 py-3 border-b">Hydrochlorothiazide</td>
    <td className="px-4 py-3 border-b">Warfarin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Clopidogrel</td>
    <td className="px-4 py-3 border-b">Digoxin</td>
    <td className="px-4 py-3 border-b">Enalapril</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Furosemide</td>
    <td className="px-4 py-3 border-b">Losartan</td>
    <td className="px-4 py-3 border-b">Nitroglycerin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Rivaroxaban</td>
    <td className="px-4 py-3 border-b">Simvastatin</td>
    <td className="px-4 py-3 border-b">Amiodarone</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Atorvastatin</td>
    <td className="px-4 py-3 border-b">Rosuvastatin</td>
    <td className="px-4 py-3 border-b">Ezetimibe</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Lovastatin</td>
    <td className="px-4 py-3 border-b">Pravastatin</td>
    <td className="px-4 py-3 border-b">Diltiazem</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Verapamil</td>
    <td className="px-4 py-3 border-b">Isosorbide mononitrate</td>
    <td className="px-4 py-3 border-b">Isosorbide dinitrate</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Nitroprusside</td>
    <td className="px-4 py-3 border-b">Ivabradine</td>
    <td className="px-4 py-3 border-b">Sacubitril/valsartan</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Hydralazine</td>
    <td className="px-4 py-3 border-b">Nitroglycerin</td>
    <td className="px-4 py-3 border-b">Ranolazine</td>
  </tr>
</tbody>

      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">
          Cardiovascular Agents diseases


        </h2>
         <div className="space-y-4">
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <div className="space-y-2">
            <span>Hypertension (High Blood Pressure):</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>
                Hypertension is a condition characterized by elevated blood pressure in the arteries, which can strain the heart and blood vessels over time, increasing the risk of cardiovascular complications such as heart attack, stroke, and heart failure. Treatment typically involves lifestyle modifications (e.g., diet, exercise) and medication to lower blood pressure and reduce cardiovascular risk.

              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Coronary Artery Disease (CAD):</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>CAD occurs when the coronary arteries that supply blood to the heart muscle become narrowed or blocked by plaque buildup, reducing blood flow to the heart. This can lead to chest pain (angina), heart attack, or other complications. Treatment may include medications to relieve symptoms, lower cholesterol, and prevent blood clotting, as well as procedures like angioplasty or bypass surgery to restore blood flow.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Heart Failure:
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Heart failure is a chronic condition where the heart is unable to pump blood effectively, leading to symptoms such as fatigue, shortness of breath, and fluid retention. Treatment aims to improve heart function, relieve symptoms, and prevent disease progression through medications like ACE inhibitors, beta-blockers, diuretics, and lifestyle changes.
</li>
            </ul>
          </div>
        </li>

        <li>
          <div className="space-y-2">
            <span>Arrhythmias (Irregular Heartbeat):
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Arrhythmias are abnormal heart rhythms that can range from harmless to life-threatening. Common types include atrial fibrillation, ventricular tachycardia, and bradycardia. Treatment may involve medications to control heart rate or rhythm, cardioversion, ablation therapy, or implantable devices like pacemakers or defibrillators.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span> Atrial Fibrillation:</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Atrial fibrillation (AFib) is a common type of arrhythmia characterized by rapid and irregular heartbeat, increasing the risk of stroke and other complications. Treatment often includes medications to control heart rate or rhythm, anticoagulants to prevent blood clots, and procedures like catheter ablation in some cases.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span> Myocardial Infarction (Heart Attack):</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>A heart attack occurs when blood flow to part of the heart muscle is blocked, leading to tissue damage or death. Treatment involves emergency medical care to restore blood flow (e.g., with medications, angioplasty, or bypass surgery) and long-term management to prevent future events (e.g., medications, lifestyle changes).
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span> Peripheral Artery Disease (PAD):

</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>PAD is a condition where narrowed arteries reduce blood flow to the limbs, typically causing leg pain, cramping, and poor wound healing. Treatment aims to improve blood flow, relieve symptoms, and reduce cardiovascular risk through lifestyle changes, medications, and sometimes procedures like angioplasty or surgery.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>    Stroke (Cerebrovascular Accident):
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>A stroke occurs when blood flow to the brain is disrupted, leading to brain damage or dysfunction. Ischemic strokes, caused by blood clots, are the most common type and may be treated with medications to dissolve clots (thrombolytics) or prevent future clots (anticoagulants, antiplatelets). Hemorrhagic strokes, caused by bleeding in the brain, may require surgery or other interventions.
</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span> Deep Vein Thrombosis (DVT):</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>DVT is a blood clot that forms in a deep vein, usually in the legs, and can lead to serious complications like pulmonary embolism if the clot breaks loose and travels to the lungs. Treatment typically involves anticoagulant medications to prevent clot propagation and reduce the risk of pulmonary embolism.</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="space-y-2">
            <span>Pulmonary Hypertension:
</span>
            <ul className="list-disc pl-4 text-muted-foreground">
              <li>Pulmonary hypertension is a type of high blood pressure that affects the arteries in the lungs and the right side of the heart. It can cause symptoms such as shortness of breath, fatigue, and chest pain. Treatment aims to improve symptoms and slow disease progression with medications such as vasodilators, endothelin receptor antagonists, and prostacyclin analogs, as well as supplemental oxygen and lifestyle changes.
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
• Aortic dissection: This is a life-threatening condition where there is a tear in the inner layer of the aorta, the large blood vessel branching off the heart. Blood surges through the tear, causing the layers of the aorta to separate (dissect). Aortic dissection requires immediate medical attention, and treatment often involves surgery to repair the damaged aorta. However, the condition can be challenging to diagnose promptly, and delays in treatment can significantly impact patient outcomes.


            </p>
            <p className="text-lg ">

• Pulmonary embolism (PE): PE occurs when a blood clot (usually from the legs) travels to the lungs, obstructing blood flow. It can lead to severe respiratory compromise and even death if not promptly treated. While anticoagulant therapy is the mainstay of treatment for PE, the condition can be challenging to diagnose, especially in patients with nonspecific symptoms. Additionally, in some cases, thrombolytic therapy or surgical intervention may be necessary, but these treatments carry risks of bleeding complications.


            </p>
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">
Hypertension affects millions of people worldwide and is a significant risk factor for cardiovascular disease, stroke, and kidney disease. It often goes undiagnosed and untreated, leading to serious complications if left unchecked.


            </p>
          </div>
        </div>
      </section>

      <section >
        <p className="text-xl  mb-4">

A disease where finding effective treatments or cures presents significant challenges.
        </p>
        <p className="text-lg  pb-10">

Pulmonary arterial hypertension (PAH): PAH is a progressive condition characterized by elevated blood pressure in the pulmonary arteries, leading to symptoms such as shortness of breath, fatigue, and chest pain. While there are several classes of medications available to manage PAH, including endothelin receptor antagonists, phosphodiesterase-5 inhibitors, and prostacyclin analogs, the disease remains incurable. Despite advancements in treatment, PAH often progresses over time, and managing symptoms and slowing disease progression can be challenging. Additionally, PAH can be associated with other underlying conditions, further complicating treatment approaches.

        </p>
      </section>
    </article>
  );
}

export default Page;

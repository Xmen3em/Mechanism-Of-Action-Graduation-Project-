import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <article className="container mx-auto px-4 py-10  shadow-lg rounded-lg">
      <header className="mb-8 border-b pb-4">
        <Link href="/services/useCases">         <div className="text-blue-500 pb-10 pt-8">&lt; Back to Case Studies</div>       </Link>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Antibiotic/Antiviral/Antifungal
</h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Introduction</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
            <li> • Antibiotics: Target specific components of bacterial cells, such as cell wall synthesis or protein synthesis, leading to bacterial cell death or inhibition of growth.</li>
            <li>• Antivirals: Interfere with viral replication by inhibiting viral enzymes or preventing viral attachment and entry into host cells.</li>
            <li> •Antifungals: Disrupt fungal cell membranes or interfere with fungal cell wall synthesis, leading to fungal cell death.</li>
        </ul>

        
      </section>

      <section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 ">MOAs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <h3 className="text-xl font-semibold mb-2 ">Common Conditions</h3>
      <p className="text-lg ">
Bacterial infections (pneumonia, urinary tract infections), viral infections (influenza, HIV), fungal infections (candidiasis, aspergillosis)..
      </p>
    </div>
    <div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
      <h3 className="text-xl font-semibold mb-2 ">Examples</h3>
      <p className="text-lg ">
            Penicillin, amoxicillin, azithromycin, oseltamivir, fluconazole.
        </p>
    </div>
  </div>
<div className="bg-gray-100 p-6 rounded-lg">
  {/* <h3 className="text-xl font-semibold mb-4 ">Mechanisms of Action</h3> */}
  <ol className="list-decimal list-inside text-lg">
    <li className="mb-2">
      <span className="font-semibold">1. &nbsp;Bacterial 30S Ribosomal Subunit Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the 30S subunit of bacterial ribosomes, preventing protein synthesis.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">2. &nbsp;Bacterial 50S Ribosomal Subunit Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits the 50S subunit of bacterial ribosomes, blocking protein synthesis.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">3. &nbsp;Bacterial Antifolate</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits folate synthesis in bacteria, which is crucial for DNA replication and cell division.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">4. &nbsp;Bacterial Cell Wall Synthesis Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Prevents the formation of bacterial cell walls, leading to cell lysis and death.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">5. &nbsp;Bacterial DNA Gyrase Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits DNA gyrase, an enzyme critical for bacterial DNA replication and transcription.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">6. &nbsp;Bacterial DNA Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Interferes with bacterial DNA processes, leading to the inhibition of replication and repair.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">7. &nbsp;Bacterial Membrane Integrity Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Disrupts the integrity of bacterial cell membranes, causing leakage of cellular contents and cell death.</li>
      </ul>
    </li>
    <li className="mb-2">
      <span className="font-semibold">8. &nbsp;HIV Inhibitor</span>
      <ul className="list-disc list-inside ml-6 mt-1 text-muted-foreground">
        <li>Inhibits various stages of the HIV life cycle, preventing the virus from replicating and spreading.</li>
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
    <td className="px-4 py-3">Penicillin</td>
    <td className="px-4 py-3 border-b">Amoxicillin</td>
    <td className="px-4 py-3 border-b">Ciprofloxacin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Azithromycin</td>
    <td className="px-4 py-3 border-b">Doxycycline</td>
    <td className="px-4 py-3 border-b">Vancomycin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Erythromycin</td>
    <td className="px-4 py-3 border-b">Metronidazole</td>
    <td className="px-4 py-3 border-b">Fluconazole</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Ketoconazole</td>
    <td className="px-4 py-3 border-b">Acyclovir</td>
    <td className="px-4 py-3 border-b">Oseltamivir</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Itraconazole</td>
    <td className="px-4 py-3 border-b">Voriconazole</td>
    <td className="px-4 py-3 border-b">Amphotericin B</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Levofloxacin</td>
    <td className="px-4 py-3 border-b">Gentamicin</td>
    <td className="px-4 py-3 border-b">Amikacin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Tetracycline</td>
    <td className="px-4 py-3 border-b">Trimethoprim</td>
    <td className="px-4 py-3 border-b">Linezolid</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Efavirenz</td>
    <td className="px-4 py-3 border-b">Darunavir</td>
    <td className="px-4 py-3 border-b">Oseltamivir</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Valganciclovir</td>
    <td className="px-4 py-3 border-b">Nystatin</td>
    <td className="px-4 py-3 border-b">Griseofulvin</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border-b">Terbinafine</td>
    <td className="px-4 py-3 border-b">Flucytosine</td>
    <td className="px-4 py-3 border-b">Clarithromycin</td>
  </tr>
</tbody>


      </table>
    </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 ">Antibiotic/Antiviral/Antifungal Diseases
</h2>
        <ul className="list-disc list-inside text-lg  mb-4">
          <li>
Streptococcal infections: Including strep throat (caused by Streptococcus pyogenes) and various skin infections (e.g., impetigo) caused by Streptococcus bacteria.
            </li>
          <li>
Staphylococcal infections: Such as skin infections (e.g., cellulitis, abscesses) and more severe infections like sepsis, often caused by Staphylococcus aureus.
            </li>
          <li>
Urinary tract infections (UTIs): Common bacterial infections affecting the urinary system, often caused by Escherichia coli but can also be caused by other bacteria such as Klebsiella or Enterococcus species.
            </li>
          <li>
Pneumonia: An infection of the lungs caused by bacteria like Streptococcus pneumoniae, Haemophilus influenzae, or Mycoplasma pneumoniae, among others.
            </li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Dangerous</h3>
            <p className="text-lg ">
Sepsis: While not a specific disease itself, sepsis is a life-threatening condition that can occur as a complication of various infections, including bacterial infections treated with antibiotics. Sepsis occurs when the body's response to infection triggers widespread inflammation, leading to organ dysfunction and failure, and it has a high mortality rate if not promptly treated.
            </p>
          </div>
          <div className="border p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-2 ">Most Widespread</h3>
            <p className="text-lg ">
Urinary tract infections (UTIs): UTIs are among the most common bacterial infections worldwide, affecting millions of people each year. They can occur in individuals of all ages and genders and are typically caused by bacteria such as Escherichia coli.
            </p>
          </div>
        </div>
      </section>

      <section >
        <p className="text-xl  mb-4">
A disease where finding effective treatments or cures presents significant challenges.        </p>
        <p className="text-lg  pb-10">
Multidrug-resistant tuberculosis (MDR-TB): Tuberculosis (TB) is caused by the bacterium Mycobacterium tuberculosis and remains a significant global health threat. MDR-TB occurs when the TB bacteria develop resistance to two or more first-line antibiotics, making treatment significantly more challenging and expensive. The treatment of MDR-TB requires prolonged courses of second-line antibiotics that are often less effective, more toxic, and more costly than standard TB drugs. Additionally, treatment adherence is critical to prevent further drug resistance, but it can be challenging due to the long duration of therapy and potential side effects.
        </p>
      </section>
    </article>
  );
}

export default Page;

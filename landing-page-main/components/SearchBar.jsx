"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './SearchBar.module.css';

const suggestionsList = [
  "acetylcholine_receptor_antagonist",
  "adenosine_receptor_agonist",
  "adenosine_receptor_antagonist",
  "adrenergic_receptor_antagonist",
  "glucocorticoid_receptor_agonist",
  "histamine_receptor_antagonist",
  "leukotriene_inhibitor",
  "prostaglandin_inhibitor",
  "nitric_oxide_production_inhibitor",
  "tnf_inhibitor",


  "bacterial_30s_ribosomal_subunit_inhibitor",
  "bacterial_50s_ribosomal_subunit_inhibitor",
  "bacterial_antifolate",
  "bacterial_cell_wall_synthesis_inhibitor",
  "bacterial_dna_gyrase_inhibitor",
  "bacterial_dna_inhibitor",
  "bacterial_membrane_integrity_inhibitor",
  "hiv_inhibitor",



  "alk_inhibitor",
  "aurora_kinase_inhibitor",
  "bcr-abl_inhibitor",
  "egfr_inhibitor",
  "flt3_inhibitor",
  "hcv_inhibitor",
  "mtor_inhibitor",
  "proteasome_inhibitor",
  "raf_inhibitor",
  "ras_gtpase_inhibitor",
  "topoisomerase_inhibitor",
  "tyrosine_kinase_inhibitor",

"acetylcholine_receptor_agonist ",
"acetylcholinesterase_inhibitor ",
"cannabinoid_receptor_agonist ",
"dopamine_receptor_agonist ",
"dopamine_receptor_antagonist ",
"gamma_secretase_inhibitor ",
"gaba_receptor_agonist ",
"gaba_receptor_antagonist ",
"histamine_receptor_agonist ",
"serotonin_receptor_agonist",
"serotonin_receptor_antagonist",
"serotonin_reuptake_inhibitor ",
 



    "adenosine_receptor_agonist",
"adrenergic_receptor_agonist ",
"angiotensin_receptor_antagonist", 
"calcium_channel_blocker ",
"cholesterol_inhibitor" ,
"mineralocorticoid_receptor_antagonist" ,
"nitric_oxide_donor",









"11-beta-hsd1_inhibitor ",
"akt_inhibitor ", 
"aldehyde_dehydrogenase_inhibitor  ",
"aromatase_inhibitor ",
"cortisol_synthesis_inhibitor  ",
"estrogen_receptor_agonist ", 
"estrogen_receptor_antagonist  ",
"faah_inhibitor ",
"farnesyltransferase_inhibitor ", 
"glucocorticoid_receptor_agonist ",
"hmgcr_inhibitor ",
"insulin_secretagogue ", 
"insulin_sensitizer ",
"progesterone_receptor_agonist ", 
"progesterone_receptor_antagonist  ",
"vitamin_d_receptor_agonist ",




"akt_inhibitor",
"bcl_inhibitor",
"btk_inhibitor",
"calcineurin_inhibitor",
"histone_lysine_demethylase_inhibitor",
"histone_lysine_methyltransferase_inhibitor",
"hsp_inhibitor",
"igf-1_inhibitor",
"ikk_inhibitor",
"mtor_inhibitor",
"nfkb_inhibitor",
"p38_mapk_inhibitor",
"pi3k_inhibitor",
"tgf-beta_receptor_inhibitor",
"tlr_agonist",
"tlr_antagonist",
"Tnfr_antagonist",



"analgesic",
"anesthetic_-_local",
"serotonin_receptor_agonist",



"acetylcholine_receptor_agonist",
"adrenergic_receptor_agonist",
"calcium_channel_blocker",
"chloride_channel_blocker",
"h2_receptor_antagonist",
"histamine_receptor_antagonist",
"leukotriene_receptor_antagonist",
"muscarinic_receptor_antagonist",
"opioid_receptor_agonist",
"opioid_receptor_antagonist",
"potassium_channel_activator",
"potassium_channel_antagonist",
"serotonin_receptor_agonist",



"adenosine_receptor_agonist",
"adrenergic_receptor_agonist",
"antihistamine",
"leukotriene_inhibitor",
"leukotriene_receptor_antagonist",
"serotonin_receptor_agonist",
"serotonin_receptor_antagonist"





  // Add other sections if needed
];

const suggestionRoutes = {
  "/services/useCases/anti-inflammatory": ["acetylcholine_receptor_antagonist",
  "adenosine_receptor_agonist",
  "adenosine_receptor_antagonist",
  "adrenergic_receptor_antagonist",
  "glucocorticoid_receptor_agonist",
  "histamine_receptor_antagonist",
  "leukotriene_inhibitor",
  "prostaglandin_inhibitor",
  "nitric_oxide_production_inhibitor",
  "tnf_inhibitor",
],





  "/services/useCases/Antibiotic-Antiviral-Antifungal": [  "bacterial_30s_ribosomal_subunit_inhibitor",
  "bacterial_50s_ribosomal_subunit_inhibitor",
  "bacterial_antifolate",
  "bacterial_cell_wall_synthesis_inhibitor",
  "bacterial_dna_gyrase_inhibitor",
  "bacterial_dna_inhibitor",
  "bacterial_membrane_integrity_inhibitor",
  "hiv_inhibitor",],



  "/services/useCases/Antineoplastic-Anticancer": ["alk_inhibitor",
  "aurora_kinase_inhibitor",
  "bcr-abl_inhibitor",
  "egfr_inhibitor",
  "flt3_inhibitor",
  "hcv_inhibitor",
  "mtor_inhibitor",
  "proteasome_inhibitor",
  "raf_inhibitor",
  "ras_gtpase_inhibitor",
  "topoisomerase_inhibitor",
  "tyrosine_kinase_inhibitor",],



  "/services/useCases/Neurological-Agents": ["acetylcholine_receptor_agonist ",
"acetylcholinesterase_inhibitor ",
"cannabinoid_receptor_agonist ",
"dopamine_receptor_agonist ",
"dopamine_receptor_antagonist ",
"gamma_secretase_inhibitor ",
"gaba_receptor_agonist ",
"gaba_receptor_antagonist ",
"histamine_receptor_agonist ",
"serotonin_receptor_agonist",
"serotonin_receptor_antagonist",
"serotonin_reuptake_inhibitor ",],



  "/services/useCases/Cardiovascular-Agents": [    "adenosine_receptor_agonist",
"adrenergic_receptor_agonist ",
"angiotensin_receptor_antagonist", 
"calcium_channel_blocker ",
"cholesterol_inhibitor" ,
"mineralocorticoid_receptor_antagonist" ,
"nitric_oxide_donor",],


  "/services/useCases/Endocrine-Agents": ["11-beta-hsd1_inhibitor ",
"akt_inhibitor ", 
"aldehyde_dehydrogenase_inhibitor  ",
"aromatase_inhibitor ",
"cortisol_synthesis_inhibitor  ",
"estrogen_receptor_agonist ", 
"estrogen_receptor_antagonist  ",
"faah_inhibitor ",
"farnesyltransferase_inhibitor ", 
"glucocorticoid_receptor_agonist ",
"hmgcr_inhibitor ",
"insulin_secretagogue ", 
"insulin_sensitizer ",
"progesterone_receptor_agonist ", 
"progesterone_receptor_antagonist  ",
"vitamin_d_receptor_agonist ",],


  "/services/useCases/Immunomodulators": ["akt_inhibitor",
"bcl_inhibitor",
"btk_inhibitor",
"calcineurin_inhibitor",
"histone_lysine_demethylase_inhibitor",
"histone_lysine_methyltransferase_inhibitor",
"hsp_inhibitor",
"igf-1_inhibitor",
"ikk_inhibitor",
"mtor_inhibitor",
"nfkb_inhibitor",
"p38_mapk_inhibitor",
"pi3k_inhibitor",
"tgf-beta_receptor_inhibitor",
"tlr_agonist",
"tlr_antagonist",
"Tnfr_antagonist",],


  "/services/useCases/Analgesics-Anesthetics": [
"analgesic",
"anesthetic_-_local",
"serotonin_receptor_agonist",],


  "/services/useCases/Gastrointestinal-Agents": ["acetylcholine_receptor_agonist",
"adrenergic_receptor_agonist",
"calcium_channel_blocker",
"chloride_channel_blocker",
"h2_receptor_antagonist",
"histamine_receptor_antagonist",
"leukotriene_receptor_antagonist",
"muscarinic_receptor_antagonist",
"opioid_receptor_agonist",
"opioid_receptor_antagonist",
"potassium_channel_activator",
"potassium_channel_antagonist",
"serotonin_receptor_agonist",],


  "/services/useCases/Respiratory-Agents": ["adenosine_receptor_agonist",
"adrenergic_receptor_agonist",
"antihistamine",
"leukotriene_inhibitor",
"leukotriene_receptor_antagonist",
"serotonin_receptor_agonist",
"serotonin_receptor_antagonist"],


  // Add other mappings if needed
};

const getRouteForSuggestion = (suggestion) => {
  for (const route in suggestionRoutes) {
    if (suggestionRoutes[route].includes(suggestion)) {
      return route;
    }
  }
  return null;
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [noMatch, setNoMatch] = useState(false); // New state for no match found message
  const router = useRouter();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setNoMatch(filteredSuggestions.length === 0); // Set noMatch based on suggestions
    } else {
      setSuggestions([]);
      setNoMatch(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const route = getRouteForSuggestion(suggestion);
    if (route) {
      router.push(route);
    }
    setQuery("");
    setSuggestions([]);
    setNoMatch(false); // Reset noMatch state
  };

  return (
<div className="relative">
  <div className={`${styles.searchContainer} bg-white dark:bg-gray-700 border-2 border-blue-600 rounded-lg p-1.5 relative`}>
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      className={`${styles.searchInput} bg-white dark:bg-gray-700 dark:text-gray-400 border-none outline-none flex-1 p-2.5 text-lg rounded-lg mr-2.5 placeholder-gray-400`}
      placeholder="Search by Moa..."
    />
    <button className={`${styles.browseButton} bg-blue-500 text-white border-none py-2 px-5 rounded-lg cursor-pointer hover:bg-blue-700`}>
      Browse
    </button>
  </div>
  {suggestions.length > 0 && (
    <ul className={`${styles.suggestionsList} bg-white dark:bg-gray-700 border border-gray-300 mt-1.5 rounded-lg max-h-48 overflow-y-auto z-50`}>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className={`${styles.suggestionItem} p-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-black`}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )}
  {noMatch && (
    <div className='text-destructive dark:text-red-500 text-lg text-center mt-2'>
      Not found. Try something else.
    </div>
  )}
</div>

  );
};

export default SearchBar;
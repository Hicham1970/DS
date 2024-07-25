import {
  calculateTrim,
  calculateLbm,
  calculDeMoyennes,
  initialForeInput,
  initialAftInput,
  optInitialForeSelect,
  optInitialAftSelect,
} from "./ds.js";

console.log("salut");

async function calculateQuarterMean() {
  const moyennes = await calculDeMoyennes();
  const moyenneFor = moyennes.moyenneFor;
  const moyenneAft = moyennes.moyenneAft;
  const moyenneMid = moyennes.moyenneMid;
  console.log(moyenneFor);
  console.log(moyenneAft);
  console.log(moyenneMid);

  const initialObsTr = await calculateTrim(moyenneAft, moyenneFor);
  console.log(initialObsTr);

  // Use the imported variables
  const initialForeValue = parseFloat(initialForeInput.value);
  const initialAftValue = parseFloat(initialAftInput.value);
  console.log(initialForeValue);
  console.log(initialAftValue);
  const optInitialFore = optInitialForeSelect.value;
  console.log(optInitialFore);

  // Declare optInitialAftSelect here
  const optInitialAft = optInitialAftSelect.value;
  console.log(optInitialAft);

  // new variables :
  const initMidDist = document.getElementById("initial-mid");
  const initMidValue = parseFloat(initMidDist.value);
  console.log(`La valeur de la distance au milieu est:${initMidValue}`);
  const optInitialMidSelect = document.getElementById("opt-initial-mid");
  const optInitialMid = optInitialMidSelect.value;
  console.log(optInitialMid);

  // lbm
  const lbmInput = document.getElementById("initial-lbm");
  const initialLbm = await calculateLbm(lbmInput.value);
  console.log(initialLbm);

  // Calculate the init fore draft corrected:
  const trimmedDraft = await calculateTrim(moyenneFor, moyenneAft);
  console.log(trimmedDraft);

  if (initialLbm !== 0) {
    const initialForeCorrection =
      (trimmedDraft * initialForeValue) / initialLbm;
    const initialForeCorrected = initialForeValue + initialForeCorrection;
    console.log(` The initial Fore Corrected is:  ${initialForeCorrected}`);
    document.getElementById("initial-quarter-mean").value =
      initialForeCorrected;
  } else {
    console.log("Erreur : initialLbm est égal à 0");
    // Vous pouvez également afficher un message d'erreur à l'utilisateur
  }
}

calculateQuarterMean();

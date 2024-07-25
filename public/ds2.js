/**Les distances drafts marks-perpendiculaires */
const initForDist = document.getElementById("initial-fore");
const initAftDist = document.getElementById("initial-aft");
const initMidDist = document.getElementById("initial-mid");
const finalForDist = document.getElementById("final-fore");
const finalAftDist = document.getElementById("final-aft");
const finalMidDist = document.getElementById("final-mid");
const optInitialForeSelect = document.getElementById("opt-initial-fore");
const optInitialAftSelect = document.getElementById("opt-initial-aft");
const optInitialMidSelect = document.getElementById("opt-initial-mid");
/**Le LBP et le LBM */
const lbp = document.getElementById("lbp");
const lbpValue = document.getElementById("lbp").value;
const finalLbm = document.getElementById("final-lbm");

// add an eventListener sur le click du btn btnCalc:

// Fonctions de QuarteMean.js
function calculerMoyenneDrafts() {
  console.log("Calcul des moyennes des drafts...");
  // Code pour calculer les moyennes des drafts
  const initialDraftForePort = parseFloat(
    document.getElementById("initial-draft-fore-port").value
  );
  const initialDraftForeStBd = parseFloat(
    document.getElementById("initial-draft-fore-stBd").value
  );
  const initialDraftAftPort = parseFloat(
    document.getElementById("initial-draft-aft-port").value
  );
  const initialDraftAftStBd = parseFloat(
    document.getElementById("initial-draft-aft-stBd").value
  );
  const initialDraftMidPort = parseFloat(
    document.getElementById("initial-draft-mid-port").value
  );
  const initialDraftMidStBd = parseFloat(
    document.getElementById("initial-draft-mid-stBd").value
  );

  const finalDraftForePort = parseFloat(
    document.getElementById("final-draft-fore-port").value
  );
  const finalDraftForeStBd = parseFloat(
    document.getElementById("final-draft-fore-stBd").value
  );
  const finalDraftAftPort = parseFloat(
    document.getElementById("final-draft-aft-port").value
  );
  const finalDraftAftStBd = parseFloat(
    document.getElementById("final-draft-aft-stBd").value
  );
  const finalDraftMidPort = parseFloat(
    document.getElementById("final-draft-mid-port").value
  );
  const finalDraftMidStBd = parseFloat(
    document.getElementById("final-draft-mid-stBd").value
  );

  console.log("Valeurs des drafts :");
  console.log(`Initial Draft Fore Port : ${initialDraftForePort}`);
  console.log(`Initial Draft Fore StBd : ${initialDraftForeStBd}`);
  console.log(`Initial Draft Aft Port : ${initialDraftAftPort}`);
  console.log(`Initial Draft Aft StBd : ${initialDraftAftStBd}`);
  console.log(`Initial Draft Mid Port : ${initialDraftMidPort}`);
  console.log(`Initial Draft Mid StBd : ${initialDraftMidStBd}`);
  console.log(`Final Draft Fore Port : ${finalDraftForePort}`);
  console.log(`Final Draft Fore StBd : ${finalDraftForeStBd}`);
  console.log(`Final Draft Aft Port : ${finalDraftAftPort}`);
  console.log(`Final Draft Aft StBd : ${finalDraftAftStBd}`);
  console.log(`Final Draft Mid Port : ${finalDraftMidPort}`);
  console.log(`Final Draft Mid StBd : ${finalDraftMidStBd}`);

  const moyenneInitialDraftFore =
    (initialDraftForePort + initialDraftForeStBd) / 2;
  const moyenneInitialDraftAft =
    (initialDraftAftPort + initialDraftAftStBd) / 2;
  const moyenneInitialDraftMid =
    (initialDraftMidPort + initialDraftMidStBd) / 2;

  const moyenneFinalDraftFore = (finalDraftForePort + finalDraftForeStBd) / 2;
  const moyenneFinalDraftAft = (finalDraftAftPort + finalDraftAftStBd) / 2;
  const moyenneFinalDraftMid = (finalDraftMidPort + finalDraftMidStBd) / 2;

  console.log("Moyennes des drafts :");
  console.log(`Moyenne Initial Draft Fore : ${moyenneInitialDraftFore}`);
  console.log(`Moyenne Initial Draft Aft : ${moyenneInitialDraftAft}`);
  console.log(`Moyenne Initial Draft Mid : ${moyenneInitialDraftMid}`);
  console.log(`Moyenne Final Draft Fore : ${moyenneFinalDraftFore}`);
  console.log(`Moyenne Final Draft Aft : ${moyenneFinalDraftAft}`);
  console.log(`Moyenne Final Draft Mid : ${moyenneFinalDraftMid}`);

  return {
    moyenneInitialDraftFore,
    moyenneInitialDraftAft,
    moyenneInitialDraftMid,
    moyenneFinalDraftFore,
    moyenneFinalDraftAft,
    moyenneFinalDraftMid,
  };
}

calculerMoyenneDrafts();
// Fonctions pour le calcul du Trim observé:
function calculerTrim() {
  // Appel de la fonction calculerMoyenneDrafts pour récupérer les moyennes des drafts
  const moyennesDrafts = calculerMoyenneDrafts();

  // Calcul du trim initial observé
  const trimInitialObserve =
    moyennesDrafts.moyenneInitialDraftAft -
    moyennesDrafts.moyenneInitialDraftFore;

  // Calcul du trim final observé
  const trimFinalObserve =
    moyennesDrafts.moyenneFinalDraftAft - moyennesDrafts.moyenneFinalDraftFore;

  // Affichage du trim initial observé
  document.getElementById("initial-obs-trim").value =
    trimInitialObserve.toFixed(2);
  console.log(`the initial obs trim is :${trimInitialObserve}`);
  // Affichage du trim final observé
  document.getElementById("final-obs-trim").value = trimFinalObserve.toFixed(2);
  console.log(`the final obs trim is :${trimFinalObserve}`);
}
calculerTrim();

// calcul du lbm initial et lbm final
var initialLbm; // variable global
const calculateLbm = () => {
  const initialForeValue = parseFloat(initForDist.value);
  const initialAftValue = parseFloat(initAftDist.value);
  const lbpValue = parseFloat(lbp.value);

  let calculatedLbmValue = lbpValue;

  switch (optInitialForeSelect.value) {
    case "A":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue = lbpValue + (initialAftValue - initialForeValue);
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue = lbpValue + (initialForeValue - initialAftValue);
      } else if (optInitialAftSelect.value === "N/A") {
        calculatedLbmValue = lbpValue - initialForeValue;
      }
      break;
    case "F":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue = lbpValue + (initialAftValue + initialForeValue);
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue = lbpValue + (initialForeValue - initialAftValue);
      } else if (optInitialAftSelect.value === "N/A") {
        calculatedLbmValue = lbpValue + initialForeValue;
      }
      break;
    case "N/A":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue += initialAftValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue -= initialAftValue;
      } else if (optInitialAftSelect.value === "N/A") {
        calculatedLbmValue = lbpValue;
      }
      break;
      return { lbmInitial: initialLbm };
  }

  // Display the calculated LBM value in the initialLbm input field
  initialLbm = document.getElementById("initial-lbm");
  initialLbm.value = calculatedLbmValue.toFixed(2);
};
// calculateLbm();
// Ajout de l'événement sur le bouton btnCalc
document.getElementById("btnCalc").addEventListener("click", async () => {
  console.log("Calcul en cours...");
  const moyennesDrafts = calculerMoyenneDrafts();
  const trim = calculerTrim();
  const lbm = calculateLbm();
  const initialForecorrected = calculerInitialForecorrected(
    moyennesDrafts.moyenneInitialDraftFore,
    trim.trimInitial,
    lbm.lbmInitial
  );
  console.log(`Résultat final : ${initialForecorrected}`);
  console.log(`Initial LBM : ${initialLbm.value}`);
  console.log(`Initial Obs Trim : ${trimInitial}`);
});
// Fonction pour calculer l'initialForecorrected
function calculerInitialForeCorrected(
  moyenneInitialDraftFore,
  trimInitial,
  lbmInitial
) {
  if (lbmInitial === 0) {
    throw new Error("initial lbm doit être different de Zero");
  }

  let initialForecorrected = 0;

  if (trimInitial > 0) {
    initialForecorrected =
      moyenneInitialDraftFore +
      (trimInitial * moyenneInitialDraftFore) / lbmInitial;
  } else if (trimInitial < 0) {
    initialForecorrected =
      moyenneInitialDraftFore -
      (trimInitial * moyenneInitialDraftFore) / lbmInitial;
  } else {
    initialForecorrected = moyenneInitialDraftFore;

    console.log(
      `Résultat du calcul de l'initialForecorrected : ${initialForecorrected}`
    );
    return initialForecorrected;
  }
  // Ajout de l'événement sur le bouton btnCalc
  document.getElementById("btnCalc").addEventListener("click", async () => {
    console.log("Calcul en cours...");
    const moyennesDrafts = calculerMoyenneDrafts();
    const trim = calculerTrim();
    const lbm = calculateLbm();
    const initialForecorrected = calculerInitialForecorrected(
      moyennesDrafts.moyenneInitialDraftFore,
      trim.trimInitial,
      lbm.lbmInitial
    );
    console.log(`Résultat final : ${initialForecorrected}`);
  });
}

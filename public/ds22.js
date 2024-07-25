// Les distances drafts pa rapport aux marks-perpendiculaires
const initForDist = document.getElementById("initial-fore");
const initAftDist = document.getElementById("initial-aft");
const initMidDist = document.getElementById("initial-mid");
const finalForDist = document.getElementById("final-fore");
const finalAftDist = document.getElementById("final-aft");
const finalMidDist = document.getElementById("final-mid");
const optInitialForeSelect = document.getElementById("opt-initial-fore");
const optInitialAftSelect = document.getElementById("opt-initial-aft");
const optInitialMidSelect = document.getElementById("opt-initial-mid");
const optFinalForeSelect = document.getElementById("opt-final-fore");
const optFinalAftSelect = document.getElementById("opt-final-aft");
const optFinalMidSelect = document.getElementById("opt-final-mid");

// Le LBP : length between perpendiculars  et le LBM : length between marks
const lbp = document.getElementById("lbp");
const lbpValue = document.getElementById("lbp").value;

const initialLbm = document.getElementById("initial-lbm");
const finalLbm = document.getElementById("final-lbm");

// Calculate draft means: moyennes des drafts observés:
// Fonction pour calculer la moyenne des drafts
function calculerMoyenneDrafts() {
  const moyenneInitialDraftFore = document.getElementById(
    "moyenne-initial-draft-fore"
  ).value;
  const moyenneInitialDraftAft = document.getElementById(
    "moyenne-initial-draft-aft"
  ).value;
  const moyenneDraftFore =
    (moyenneInitialDraftFore + moyenneInitialDraftAft) / 2;
  return { moyenneDraftFore };
}

// Fonction pour calculer le trim
function calculerTrim() {
  const trimInitial = document.getElementById("trim-initial").value;
  const trim = trimInitial;
  return { trim };
}

// Fonction pour calculer la valeur LBM
function calculateLbm() {
  const lbpValue = document.getElementById("lbp-value").value;
  const initialForeValue = document.getElementById("initial-fore-value").value;
  const initialAftValue = document.getElementById("initial-aft-value").value;
  const optInitialAftSelect = document.getElementById(
    "opt-initial-aft-select"
  ).value;

  let calculatedLbmValue = 0;

  switch (optInitialAftSelect) {
    case "A":
      calculatedLbmValue = lbpValue + initialAftValue;
      break;
    case "F":
      calculatedLbmValue = lbpValue + (initialForeValue - initialAftValue);
      break;
    case "N/A":
      calculatedLbmValue = lbpValue + initialForeValue;
      break;
    default:
      calculatedLbmValue = lbpValue;
  }

  return { lbmInitial: calculatedLbmValue };
}

// Fonction pour calculer la correction de l'initial Fore
function calculerInitialForeCorrected(
  moyenneInitialDraftFore,
  trimInitial,
  lbmInitial
) {
  if (lbmInitial === 0) {
    throw new Error("initial lbm doit être différent de zéro");
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
  }

  return initialForecorrected;
}

// Ajout de l'événement sur le bouton btnCalc
document.getElementById("btnCalc").addEventListener("click", async () => {
  console.log("Calcul en cours...");
  const moyennesDrafts = calculerMoyenneDrafts();
  const trim = calculerTrim();
  const lbm = calculateLbm();
  const initialForecorrected = calculerInitialForeCorrected(
    moyennesDrafts.moyenneDraftFore,
    trim.trim,
    lbm.lbmInitial
  );
  console.log(`Résultat final : ${initialForecorrected}`);
  console.log(`Initial LBM : ${lbm.lbmInitial}`);
  console.log(`Initial Obs Trim : ${trim.trim}`);
});

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
const optFinalForeSelect = document.getElementById("opt-final-fore");
const optFinalAftSelect = document.getElementById("opt-final-aft");
const optFinalMidSelect = document.getElementById("opt-final-mid");

/**Le LBP: length between perpendiculars et le LBM: length between marks */
const lbp = document.getElementById("lbp");
const lbpValue = document.getElementById("lbp").value;
var initialLbm; // variable global
var finalLbm; // variable global

function calculerMoyenneDrafts() {
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

  //Initial moyennes:
  const moyenneInitialDraftFore =
    (initialDraftForePort + initialDraftForeStBd) / 2;
  const moyenneInitialDraftAft =
    (initialDraftAftPort + initialDraftAftStBd) / 2;
  const moyenneInitialDraftMid =
    (initialDraftMidPort + initialDraftMidStBd) / 2;

  const moyenneFinalDraftFore = (finalDraftForePort + finalDraftForeStBd) / 2;
  const moyenneFinalDraftAft = (finalDraftAftPort + finalDraftAftStBd) / 2;
  const moyenneFinalDraftMid = (finalDraftMidPort + finalDraftMidStBd) / 2;

  return {
    moyenneInitialDraftFore,
    moyenneInitialDraftAft,
    moyenneInitialDraftMid,
    moyenneFinalDraftFore,
    moyenneFinalDraftAft,
    moyenneFinalDraftMid,
  };
}

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

  // Affichage du trim final observé
  document.getElementById("final-obs-trim").value = trimFinalObserve.toFixed(2);
}
calculerTrim();

const calculateLbm = () => {
  // valeurs Initials des distances des drafts marks par rapport au perpendiculaires :
  const initialForeValue = parseFloat(initForDist.value);
  const initialAftValue = parseFloat(initAftDist.value);
  const lbpValue = parseFloat(lbp.value);

  let initCalculatedLbmValue = lbpValue;

  switch (optInitialForeSelect.value) {
    case "A":
      if (optInitialAftSelect.value === "A") {
        initCalculatedLbmValue =
          lbpValue + (initialAftValue - initialForeValue);
      } else if (optInitialAftSelect.value === "F") {
        initCalculatedLbmValue =
          lbpValue + (initialForeValue - initialAftValue);
      } else if (optInitialAftSelect.value === "N/A") {
        initCalculatedLbmValue = lbpValue - initialForeValue;
      }
      break;
    case "F":
      if (optInitialAftSelect.value === "A") {
        initCalculatedLbmValue =
          lbpValue + (initialAftValue + initialForeValue);
      } else if (optInitialAftSelect.value === "F") {
        initCalculatedLbmValue =
          lbpValue + (initialForeValue - initialAftValue);
      } else if (optInitialAftSelect.value === "N/A") {
        initCalculatedLbmValue = lbpValue + initialForeValue;
      }
      break;
    case "N/A":
      if (optInitialAftSelect.value === "A") {
        initCalculatedLbmValue += initialAftValue;
      } else if (optInitialAftSelect.value === "F") {
        initCalculatedLbmValue -= initialAftValue;
      } else if (optInitialAftSelect.value === "N/A") {
        initCalculatedLbmValue = lbpValue;
      }
      break;
      return { lbmInitial: initialLbm };
  }

  // Display the calculated LBM value in the initialLbm input field
  initialLbm = document.getElementById("initial-lbm");
  initialLbm.value = initCalculatedLbmValue.toFixed(2);

  // valeurs Final draft des distances des drafts marks par rapport au perpendiculaires :
  const finalForeValue = parseFloat(finalForDist.value);
  const finalAftValue = parseFloat(finalAftDist.value);
  let finalCalculatedLbmValue = lbpValue;

  switch (optFinalForeSelect.value) {
    case "A":
      if (optFinalAftSelect.value === "A") {
        finalCalculatedLbmValue = lbpValue + (finalAftValue - finalForeValue);
      } else if (optFinalAftSelect.value === "F") {
        finalCalculatedLbmValue = lbpValue + (finalForeValue - finalAftValue);
      } else if (optFinalAftSelect.value === "N/A") {
        finalCalculatedLbmValue = lbpValue - finalForeValue;
      }
      break;
    case "F":
      if (optFinalAftSelect.value === "A") {
        finalCalculatedLbmValue = lbpValue + (finalAftValue + finalForeValue);
      } else if (optFinalAftSelect.value === "F") {
        finalCalculatedLbmValue = lbpValue + (finalForeValue - finalAftValue);
      } else if (optFinalAftSelect.value === "N/A") {
        finalCalculatedLbmValue = lbpValue + finalForeValue;
      }
      break;
    case "N/A":
      if (optFinalAftSelect.value === "A") {
        finalCalculatedLbmValue += finalAftValue;
      } else if (optFinalAftSelect.value === "F") {
        finalCalculatedLbmValue -= finalAftValue;
      } else if (optFinalAftSelect.value === "N/A") {
        finalCalculatedLbmValue = lbpValue;
      }
      break;
      return { lbmFinal: finalLbm };
  }

  // Display the calculated LBM value in the finalLbm input field
  finalLbm = document.getElementById("final-lbm");
  finalLbm.value = finalCalculatedLbmValue.toFixed(2);
};

function calculDraftCorrected(moyenneDraft, trimObs, lbm, dist, optDist) {
  if (lbm === 0) {
    throw new Error("Attention le lbm doit être different de Zero");
  }

  let draftCorrected = 0;

  switch (optDist) {
    case "A":
      if (trimObs > 0) {
        draftCorrected = moyenneDraft - (trimObs * dist) / lbm;
      } else if (trimObs < 0) {
        draftCorrected = moyenneDraft + (trimObs * moyenneDraft) / lbm;
      } else {
        draftCorrected = moyenneDraft;
      }
      break;
    case "F":
      if (trimObs > 0) {
        draftCorrected = moyenneDraft + (trimObs * dist) / lbm;
      } else if (trimObs < 0) {
        draftCorrected = moyenneDraft - (trimObs * moyenneDraft) / lbm;
      }
      break;
    case "N/A":
      draftCorrected = moyenneDraft;
      break;
    default:
      draftCorrected = moyenneDraft;
  }

  return draftCorrected;
}
// Ajout de l'événement sur le bouton btnCalc
document.getElementById("btnCalc").addEventListener("click", async () => {
  // Calcul des moyennes
  const moyennesDrafts = calculerMoyenneDrafts();
  // affichage des moyennes:
  document.getElementById("moyenne-init-draft-fore").value =
    moyennesDrafts.moyenneInitialDraftFore.toFixed(2);
  document.getElementById("moyenne-init-draft-aft").value =
    moyennesDrafts.moyenneInitialDraftAft.toFixed(2);
  document.getElementById("moyenne-init-draft-mid").value =
    moyennesDrafts.moyenneInitialDraftMid.toFixed(2);
  document.getElementById("moyenne-final-draft-fore").value =
    moyennesDrafts.moyenneFinalDraftFore.toFixed(2);
  document.getElementById("moyenne-final-draft-aft").value =
    moyennesDrafts.moyenneFinalDraftAft.toFixed(2);
  document.getElementById("moyenne-final-draft-mid").value =
    moyennesDrafts.moyenneFinalDraftMid.toFixed(2);
  // Calcul du trim Initial et Final
  const trim = calculerTrim();
  const trimInitialObserve = document.getElementById("initial-obs-trim").value;

  const trimFinalObserve = document.getElementById("final-obs-trim").value;

  //Calcul du Lbm Initial et Final
  const lbm = calculateLbm();
  const initialLbm = document.getElementById("initial-lbm").value;
  const finalLbm = document.getElementById("final-lbm").value;
  //Distances par rapport aux perpendiculaires:
  const initialForeValue = document.getElementById("initial-fore").value;
  const initialAftValue = document.getElementById("initial-aft").value;
  const initialMidValue = document.getElementById("initial-mid").value;
  const finalForeValue = document.getElementById("final-fore").value;
  const finalAftValue = document.getElementById("final-aft").value;
  const finalMidValue = document.getElementById("final-mid").value;
  // Positions des draft marks "A" en aft "F" Foreword:
  const optInitialForeSelect = document.getElementById("opt-initial-fore");
  const optInitialAftSelect = document.getElementById("opt-initial-aft");
  const optInitialMidSelect = document.getElementById("opt-initial-mid");
  const optFinalForeSelect = document.getElementById("opt-final-fore");
  const optFinalAftSelect = document.getElementById("opt-final-aft");
  const optFinalMidSelect = document.getElementById("opt-final-mid");

  //Calcul des drafts corrigés
  // initial Fore Corrected
  const initialForecorrected = calculDraftCorrected(
    moyennesDrafts.moyenneInitialDraftFore,
    trimInitialObserve,
    initialLbm,
    initialForeValue,
    optInitialForeSelect.value
  );
  document.getElementById("initial-fore-corrected").value =
    initialForecorrected.toFixed(2);
  // final Fore Corrected
  const finalForecorrected = calculDraftCorrected(
    moyennesDrafts.moyenneFinalDraftFore,
    trimFinalObserve,
    finalLbm,
    finalForeValue,
    optFinalForeSelect.value
  );

  document.getElementById("final-fore-corrected").value =
    finalForecorrected.toFixed(2);
  // initial Aft Corrected
  const initialAftCorrected = calculDraftCorrected(
    moyennesDrafts.moyenneInitialDraftAft,
    trimInitialObserve,
    initialLbm,
    initialAftValue,
    optInitialAftSelect.value
  );
  document.getElementById("initial-aft-corrected").value =
    initialAftCorrected.toFixed(2);
  // final Aft Corrected
  const finalAftCorrected = calculDraftCorrected(
    moyennesDrafts.moyenneFinalDraftAft,
    trimFinalObserve,
    finalLbm,
    finalAftValue,
    optFinalAftSelect.value
  );
  document.getElementById("final-aft-corrected").value =
    finalAftCorrected.toFixed(2);
  // Initial Mid corrected:
  const initialMidCorrected = calculDraftCorrected(
    moyennesDrafts.moyenneInitialDraftMid,
    trimInitialObserve,
    initialLbm,
    initialMidValue,
    optInitialMidSelect.value
  );
  document.getElementById("initial-mid-corrected").value =
    initialMidCorrected.toFixed(2);
  // Final Mid corrected:
  const finalMidCorrected = calculDraftCorrected(
    moyennesDrafts.moyenneFinalDraftMid,
    trimFinalObserve,
    finalLbm,
    finalMidValue,
    optFinalMidSelect.value
  );
  document.getElementById("final-mid-corrected").value =
    finalMidCorrected.toFixed(2);

  //  Quarter Mean Initial State:

  const initialQuarterMean =
    (initialForecorrected + initialAftCorrected + 6 * initialMidCorrected) / 8;
  console.log(initialQuarterMean);
  document.getElementById("initial-quarter-mean").value =
    initialQuarterMean.toFixed(2);

  //  Quarter Mean Final State:

  const finalQuarterMean =
    (finalForecorrected + finalAftCorrected + 6 * finalMidCorrected) / 8;
  console.log(finalQuarterMean);
  document.getElementById("final-quarter-mean").value =
    finalQuarterMean.toFixed(2);
});

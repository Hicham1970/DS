/**Les distances drafts marks-perpendiculaires */
const initForDist = document.getElementById("initial-fore");
const initAftDist = document.getElementById("initial-aft");
const initMidDist = document.getElementById("initial-mid");
const finalForDist = document.getElementById("final-fore");
const finalAftDist = document.getElementById("final-aft");
const finalMidDist = document.getElementById("final-mid");

/**Le LBP et le LBM */
const lbp = document.getElementById("lbp");
const initialLbm = document.getElementById("initial-lbm");
const finalLbm = document.getElementById("final-lbm");

/*Les draft Observés*/
const initForPort = document.getElementById("initial-draft-fore-port");
const initForStar = document.getElementById("initial-draft-fore-stBd");
const initialAftPort = document.getElementById("initial-draft-aft-port");
const initialAftStar = document.getElementById("initial-draft-aft-stBd");
const initialMidPort = document.getElementById("initial-draft-mid-port");
const initialMidStar = document.getElementById("initial-draft-mid-stBd");

/**Assigner un rôle au btnCalc */
const btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener("click", function () {
  try {
    const moyennes = calculDeMoyennes();
    const moyenneFor = moyennes.moyenneFor;
    const moyenneAft = moyennes.moyenneAft;
    calculateLbm();
    console.log(lbmInput.value);
    const trim = calculateTrim(moyenneAft, moyenneFor);
    console.log(trim.toFixed(2)); // you can also display the trim value somewhere
    const initialObsTrim = document.getElementById("initial-obs-trim");
    initialObsTrim.value = trim.toFixed(2); // display the trim value
  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
});

//**Calcul des moyennes des draft observés */
function calculDeMoyennes() {
  const moyenneFor = (
    (parseFloat(initForPort.value) + parseFloat(initForStar.value)) /
    2
  ).toFixed(3); // keep the decimal points
  const moyenneAft = (
    (parseFloat(initialAftPort.value) + parseFloat(initialAftStar.value)) /
    2
  ).toFixed(3); // keep the decimal points
  const moyenneMid = (
    (parseFloat(initialMidPort.value) + parseFloat(initialMidStar.value)) /
    2
  ).toFixed(3); // keep the decimal points
  console.log(moyenneFor);
  console.log(moyenneAft);
  console.log(moyenneMid);
  return { moyenneFor, moyenneAft, moyenneMid };
}

/**Fonction pour calculer le lbm: Length over all */
const initialForeInput = document.getElementById("initial-fore");
const initialAftInput = document.getElementById("initial-aft");
const optInitialForeSelect = document.getElementById("opt-initial-fore");
const optInitialAftSelect = document.getElementById("opt-initial-aft");

/**Fonction pour calculer le lbm: Length between Perpendiculars  */
const calculateLbm = () => {
  const initialForeValue = parseFloat(initialForeInput.value);
  const initialAftValue = parseFloat(initialAftInput.value);
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
    case "A":
      if (optInitialAftSelect.value === "N/A") {
        calculatedLbmValue -= initialForeValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue -= initialForeValue - initialAftValue;
      }
      break;
    case "F":
      if (optInitialAftSelect.value === "N/A") {
        calculatedLbmValue += initialForeValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue += initialForeValue - initialAftValue;
      }
  }

  // Display the calculated LBM value in the initialLbm input field
  initialLbm.value = calculatedLbmValue.toFixed(2);
  return Promise.resolve(lbm);
};

// fonction de calcul du trim :
function calculateTrim(moyenneAft, moyenneFor) {
  // calculate the trim value based on moyenneAft and moyenneFor
  const trim = moyenneAft - moyenneFor;
  return parseFloat(trim.toFixed(3)); // return a number
}

export {
  calculateTrim,
  calculateLbm,
  calculDeMoyennes,
  initialForeInput,
  initialAftInput,
  optInitialForeSelect,
  optInitialAftSelect,
  lbp,
};

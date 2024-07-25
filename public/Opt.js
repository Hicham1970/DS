const calculateLBM = () => {
  const initialForeValue = parseFloat(initialForeInput.value);
  const initialAftValue = parseFloat(initialAftInput.value);
  const lbpValue = parseFloat(lbp.value);

  let calculatedLbmValue = lbpValue;

  switch (optInitialForeSelect.value) {
    case "A":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue += initialAftValue - initialForeValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue += initialForeValue + initialAftValue;
      }
      break;
    case "F":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue -= initialAftValue - initialForeValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue += initialForeValue - initialAftValue;
      }
      break;
    case "N/A":
      if (optInitialAftSelect.value === "A") {
        calculatedLbmValue += initialAftValue;
      } else if (optInitialAftSelect.value === "F") {
        calculatedLbmValue -= initialAftValue;
      }
      break;
  }

  calculatedLbmValue = parseFloat(calculatedLbmValue.toFixed(2));
  lbmInput.value = calculatedLbmValue;
};

btnCalc.addEventListener("click", calculateLBM);

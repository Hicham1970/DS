Variables and Elements

initForDist, initAftDist, initMidDist: HTML elements representing the initial distances from the perpendiculars for fore, aft, and mid drafts, respectively.
finalForDist, finalAftDist, finalMidDist: HTML elements representing the final distances from the perpendiculars for fore, aft, and mid drafts, respectively.
optInitialForeSelect, optInitialAftSelect, optInitialMidSelect: HTML select elements representing the options for the initial fore, aft, and mid drafts, respectively.

If the option is 'A' : that means the drafts are aftword perpendiculars.

If the option is 'F' : that means the drafts are foreword perpendiculars.

If the option is 'N/A' : that means the drafts are on perpendiculars.


optFinalForeSelect, optFinalAftSelect, optFinalMidSelect: HTML select elements representing the options for the final fore, aft, and mid drafts, respectively.


lbp: HTML element representing the length between perpendiculars (LBP).
lbpValue: The value of the LBP element.
initialLbm and finalLbm: Variables representing the initial and final length between marks (LBM), respectively.

**Functions**

calculerMoyenneDrafts():

 Goal: Calculates the mean drafts for the initial and final states.
Method: Retrieves the values of the initial frm the final draft elements.
Parameters : Calculates the mean drafts for the initial and final states using the formula: (draftPortside + draftStarboard) / 2.
Returns : an object with the mean drafts for the initial and final states.


calculerTrim():

Goal: Calculates the trim (difference between aft and fore drafts) for the initial and final states.
Method:Calls calculerMoyenneDrafts() to retrieve the mean drafts.
Calculates the trim for the initial and final states using the formula: moyenneDraftAft - moyenneDraftFore.
Return: Displays the trim values in the corresponding HTML elements.
calculateLbm():


calculateLbm():

Goal: Calculates the initial and final values.

Retrieves the values of the LBP element and the initial and final draft elements.
Calculates the initial LBM value based on the selected options and the LBP value.
Displays the initial LBM value in the corresponding HTML element.




calculDraftCorrected():

 Calculates the corrected draft value based on the mean draft, trim, LBM, and distance from the perpendicular.
Takes five arguments: moyenneDraft, trimObs, lbm, distance, and option.
Calculates the corrected draft value using a formula that depends on the option value.
Returns the corrected draft value.


Event Listeners

An event listener is added to the btnCalc button to trigger the calculation of the mean drafts, trim, LBM, and corrected drafts when clicked.




Script Flow

The script retrieves the values of the initial and final draft elements.
It calculates the mean drafts for the initial and final states using calculerMoyenneDrafts().
It calculates the trim for the initial and final states using calculerTrim().
It calculates the initial and final LBM values using calculateLbm().
It calculates the corrected draft values for each draft mark using calculDraftCorrected().
The script displays the calculated values in the corresponding HTML elements.
Note: The script uses a mix of French and English variable names, which may make it difficult to understand. It's recommended to use consistent naming conventions throughout the script.


import { generateDailyRashifal } from './rashifalLogic';

// Improve console logging for clarity
console.log("----------------------------------------------------------------");
console.log("TESTING MOON TRANSITION LOGIC");
console.log("----------------------------------------------------------------");

// Mock Data
const dateKey = "2081-10-10";
const tithiName = "शुक्ल पञ्चमी";
const nakshatraName = "अश्विनी";
const currentMoonRashi = "मेष"; // Aries
const nextMoonRashi = "वृष";    // Taurus
const transitionTime = "08:55 AM";
const nextNakshatra = "भरणी";
const nakshatraTransitionTime = "05:00 PM";

console.log(`Scenario: Moon moves from ${currentMoonRashi} (Mesh) to ${nextMoonRashi} (Vrish) at ${transitionTime}.`);
console.log(`Nakshatra changes from ${nakshatraName} to ${nextNakshatra} at ${nakshatraTransitionTime}.`);
console.log("----------------------------------------------------------------\n");

// Generate Prediction
const results = generateDailyRashifal(
    dateKey,
    tithiName,
    nakshatraName,
    currentMoonRashi,
    nextMoonRashi,
    transitionTime,
    nextNakshatra,
    nakshatraTransitionTime
);

// We will check critical rashis to see different house effects.
// 1. Mesh Rashi User (User is Mesh) -> Moon is in Mesh (1st House) -> Moves to Vrish (2nd House)
// 2. Karkat Rashi User (User is Karkat) -> Moon is in Mesh (10th House) -> Moves to Vrish (11th House)

results.forEach(r => {
    // Show all rashis
    console.log(`### RASHI: ${r.name} ###`);

    // Strip HTML tags for readable plaintext output
    const cleanPrediction = r.prediction.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const cleanTechnical = r.technicalReason ? r.technicalReason.replace(/<[^>]*>/g, '\n').replace(/\n+/g, '\n').trim() : "N/A";

    console.log(`PREDICTION (Cleaned):`);
    console.log(cleanPrediction);
    console.log(`\nTECHNICAL REASON (Why):`);
    console.log(cleanTechnical);
    console.log("\n----------------------------------------------------------------\n");
});

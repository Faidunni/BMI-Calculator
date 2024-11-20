/**
 * Function to calculate BMI
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in meters
 * @returns {Object} An object containing BMI and its category
 */
export function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be positive numbers.");
  }

  const bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  return {
    bmi: bmi.toFixed(2), // Limit BMI to 2 decimal places
    category,
  };
}

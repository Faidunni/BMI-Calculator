import { calculateBMI } from "../util/bmi.js";

function ResultBmi({ userInput }) {
  return (
    <div>
      {userInput.map((user, index) => {
        const { bmi, category } = calculateBMI(user.weight, user.height);
        return (
          <ul key={index}>
            <li>
              <p>
                {user.name}, your weight is {user.weight} and your height is{" "}
                {user.height}. Your BMI is {bmi} and you fall in the {category}{" "}
                category.
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ResultBmi;

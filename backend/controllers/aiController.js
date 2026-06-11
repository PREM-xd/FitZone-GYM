const groq =
  require("../config/groq");

const generateFitnessPlan =
  async (req, res) => {
    try {

      const {
        age,
        gender,
        height,
        weight,
        experience,
        bench,
        squat,
        deadlift,
        goal,
      } = req.body;

      const prompt = `
You are an elite fitness coach.

User Details:

Age: ${age}
Gender: ${gender}
Height: ${height} cm
Weight: ${weight} kg
Training Experience: ${experience}

Bench Press: ${bench}
Squat: ${squat}
Deadlift: ${deadlift}

Goal: ${goal}

Generate:

1. Maintenance Calories
2. Recommended Calories
3. Protein
4. Carbs
5. Fats
6. Workout Split
7. Cardio Recommendation
8. Personalized Advice

Keep response clean and easy to read.
`;

      const completion =
        await groq.chat.completions.create(
          {
            messages: [
              {
                role: "user",
                content:
                  prompt,
              },
            ],

            model:
              "llama-3.3-70b-versatile",
          }
        );

      const plan =
        completion.choices[0]
          .message.content;

      res.status(200).json({
        plan,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });

    }
};

module.exports = {
  generateFitnessPlan,
};
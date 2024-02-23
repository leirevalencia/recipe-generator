function displayRecipe(response) {
  console.log("here is your recipe");
  new Typewriter('#recipe', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
 

function generateRecipe(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "d48505t8703c543fo79ae4f4d413e7bf";
    let prompt = `Generate quick and healthy vegetarian recipes in spanish about ${instructionInput.value}`;
    let context = `Create a quick recipe with the ingredient given to you with basic ingredients you 
    can find at home. Use HTML tags for formatting text.`;

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `Generating recipe with ${instructionInput.value}`;

  console.log("generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener ('submit', generateRecipe);

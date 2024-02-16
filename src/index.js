function generateRecipe(event) {
    event.preventDefault();

    new Typewriter('#recipe', {
        strings: "the recipe will go here",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener ('submit', generateRecipe);

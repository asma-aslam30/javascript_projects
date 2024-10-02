const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Fetch and display all meals on page load
function displayAllMeals() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json())
    // .then(function(response) {
    //     return response.json();
    .then(data => {
        let html = '';
        data.meals.forEach(meal => {
            html += `
                <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" onclick="getMealRecipe('${meal.idMeal}')" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
        });
        mealList.innerHTML = html;
    });
}

// Get meal list based on searched ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    if (!searchInputTxt) {
        // If search input is empty, display all meals again
        displayAllMeals();
        return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = '';
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                    <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" onclick="getMealRecipe('${meal.idMeal}')" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else {
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}

// Get meal recipe based on the meal ID
function getMealRecipe(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(response => response.json())
    .then(data => mealRecipeModal(data.meals));
}

// Display recipe modal
function mealRecipeModal(meal) {
    meal = meal[0];
    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" alt="">
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}

// Close the recipe modal
recipeCloseBtn.onclick = function() {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
};

// Initial display of all meals
displayAllMeals();

// Add search functionality
document.getElementById('search-btn').onclick = function() {
    getMealList();
};
# Recipe Radar 

<img src="public/recipe-radar-icon.svg" width="250">

Embark on a culinary journey with Recipe Radar, your ultimate companion for exploring a world of flavors. Discover delightful dishes from around the globe with just a search. From savory classics to sweet sensations, Recipe Radar guides you through a treasure trove of recipes, helping you create masterpieces in your kitchen.

[Click here to visit the website!](https://bryandevelops-recipe-radar.netlify.app/)

## Technologies

Recipe Radar is crafted using modern web technologies to ensure a smooth, engaging, and efficient single-page user experience. Here's a glimpse into the technologies that power the app:

### React

The frontend of Recipe Radar is built with React, a powerful JavaScript library for building user interfaces. React's component-based architecture enhances code reusability and helps manage the app's complex UI components.

### Vite

Vite is the build tool of choice for Recipe Radar. Its rapid build speed and modern development server create a lightning-fast development environment, contributing to a more efficient development process.

### TheMealDB API

Recipe Radar integrates seamlessly with TheMealDB API to fetch an extensive variety of recipes. As a publicly accessible API, it provides a wealth of culinary information, allowing users to discover and explore diverse dishes effortlessly.

### HTML5 & CSS3

The app's structure and styling are built using HTML5 for content and CSS3 for styling. This combination creates visually appealing recipe cards, search interfaces, and a cohesive user interface.

### JavaScript ES6+

Modern JavaScript features and syntax, such as ES6+, are utilized to write clean, concise, and maintainable code. These features enhance the app's interactivity and functionality.

### Git & GitHub

Version control is managed using Git, allowing for efficient code management. GitHub provides a platform for hosting and sharing the app's source code.

### Deployment on Netlify

Recipe Radar is optimized for deployment on Netlify, a powerful platform for hosting static websites and web applications. Netlify's seamless integration with GitHub streamlines the deployment process, ensuring that the app is easily accessible to users online.

## Features

Recipe Radar is a web application designed to make your culinary journey enjoyable and effortless. With a focus on simplicity and discovery, Recipe Radar empowers users to explore a diverse range of recipes and unleash their inner chef. Here are some of the key features:

### Search recipes by name

* Users are able to type into a search bar to search for recipes by name

### Filter recipes by category

* Users are able to filter recipes by category

### Filter recipes by area

* Users are able to filter recipes by areas of the world (countries)

### Lookup a random recipe

* Users are able to cycle through random recipes on click

### List all recipes by the first letter

* Users are able to list all recipes whose name begins with the clicked letter

### View recipe details

* Users are able to click on any recipe card to view the details of the clicked recipe (name, ingredients, etc.)

### Save recipes

* Users are able to save recipes which can be viewed later in the favorites page


## Frontend Routing

* `Route`
  * `Component`
    * Description

***

* `/`
  * `Home`
    * The default homepage containing the 'search' feature of the application
* `/:id`
  * `RecipeDetailView`
    * Displays the detailed view of a recipe which contains all of the recipe information (such as name, ingredients, etc.)
* `/favorites`
  * `Favorites`
    * Displays all of the users favorited recipes, if any
* `/category`
  * `Categories`
    * Displays all of the available recipe categories
* `/category/:category`
  * `CategoryView`
    * Displays all of the recipes that fall under a category
* `/area`
  * `Areas`
    * Displays different country flags so users can filter recipes by areas of the world
* `/area/:area`
  * `AreaView`
    * Displays all of the recipes that fall under an area (country)
* `/random`
  * `RecipeDetailView`
    * Displays the recipe detail view of a random meal every time the user clicks
* `/alphabet/:letter`
  * `Alphabet`
    * Displays all of the recipes whose name begins with the letter the user clicked

## Challenge

During the development of Recipe Radar, one notable challenge I encountered revolved around making an API call for each element in an array. This challenge emerged when I wanted users to be directed to the Recipe Detail View by clicking on a Recipe Card component whose data was being displayed by JSON that was fetched from a Filter by Category API request. The problem was that the data returned by the endpoint I was using didn't display all of the recipe information, only the ID and a few other pieces of data. In order to pass down the relevant information to the Recipe Detail View component, I had to iterate over each element of the fetched JSON data and initiate a second API call for each element that would allow me to look up all of the recipe information for each ID.

To overcome this challenge, I had to utilize the `Promise.all()` method from the Promise object, which I had never used before. This method proved to be a powerful solution for handling multiple asynchronous operations simultaneously. By wrapping each API call inside a Promise and then using `Promise.all()`, I was able to execute all the API calls concurrently and efficiently collect the required data.

```javascript
export async function getMealsByCategory(setState, category) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    const resp = await fetch(url);
    const data = await resp.json();

    const newDataArray = await Promise.all(
      data.meals.map(async (meal) => {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const data = await resp.json();
        return await data.meals[0];
      })
    )

    setState(newDataArray)
  } catch(err) {
    console.error(err)
  }
}
```

This function was able to return data that originally looked like this:

```json
[
        {
            "strMeal": "Baked salmon with fennel & tomatoes",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
            "idMeal": "52959"
        },
        {
            "strMeal": "Cajun spiced fish tacos",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
            "idMeal": "52819"
        },
        {
            "strMeal": "Escovitch Fish",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
            "idMeal": "52944"
        },

        ...

]
```

And in the end, looked like this:

```json
[
       {
           "idMeal": "52959",
           "strMeal": "Baked salmon with fennel & tomatoes",
           "strCategory": "Seafood",
           "strArea": "British",
            ...
       },
       {
           "idMeal": "52944",
           "strMeal": "Escovitch Fish",
           "strCategory": "Seafood",
           "strArea": "Jamaican",
            ...
       },

       ...

]
```

This challenge not only expanded my knowledge of asynchronous operations but also introduced me to a valuable tool in JavaScript's Promise API. I was able to apply this solution to several other API function calls as well, further solidifying my understanding. However, given that this is the function where I first encountered the problem and found the solution, I wanted to go ahead and highlight this one specifically.

## Resources

* [Carousel Component](https://mdbootstrap.com/docs/react/components/carousel/)
* [Images for Carousel Component](https://unsplash.com/)
* [SVG Icons](https://www.svgrepo.com/)
* [SVG Page Dividers](https://omatsuri.app/)
* [Font Awesome Icons](https://fontawesome.com/)
* [Custom Fonts](https://fonts.google.com/)
* [CSS Loader](https://loading.io/css/)
* [Pass Props Through React Router's Link Component](https://ui.dev/react-router-pass-props-to-link)
* [Scroll To Top on Page Transition](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)
* [Make API Calls For Each Element In An Array](https://stackoverflow.com/questions/66505445/how-to-make-api-calls-for-each-element-in-array)
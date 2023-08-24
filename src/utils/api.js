export const countryCodes = {
  American: 'us',
  British: 'gb',
  Canadian: 'ca',
  Chinese: 'cn',
  Croatian: 'hr',
  Dutch: 'nl',
  Egyptian: 'eg',
  Filipino: 'ph',
  French: 'fr',
  Greek: 'gr',
  Indian: 'in',
  Irish: 'ie',
  Italian: 'it',
  Jamaican: 'jm',
  Japanese: 'jp',
  Kenyan: 'kn',
  Malaysian: 'my',
  Mexican: 'mx',
  Moroccan: 'ma',
  Polish: 'pl',
  Portuguese: 'pt',
  Russian: 'ru',
  Spanish: 'es',
  Thai: 'th',
  Tunisian: 'tn',
  Turkish: 'tr',
  Unknown: '',
  Vietnamese: 'vn'
}

export async function getMealsBySearch(setState, value) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setState(data.meals)
  } catch(err) {
    console.error(err)
  }
}

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

export async function getMealsByArea(setState, area) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
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
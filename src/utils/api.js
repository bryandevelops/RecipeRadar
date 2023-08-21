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
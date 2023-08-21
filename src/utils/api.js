export async function getRandomMeal(setState) {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const resp = await fetch(url)
    const data = await resp.json();
    setState(data)
  } catch(err) {
    console.error(err)
  }
}
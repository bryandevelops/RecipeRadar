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
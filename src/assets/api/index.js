import axios from 'axios'

export const TheCocktailAPI = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
})

export const TheCocktailRoutes = {
  listCategories: 'list.php?c=list',
  filterByCategory: 'filter.php?c=',
  fullDrinkDetail: 'lookup.php?i=',
  filterByDrinkName: 'search.php?s=',
  randomDrink: 'random.php',
}

import { createContext, useContext, useEffect, useState } from 'react'
import { TheCocktailAPI, TheCocktailRoutes } from '../assets/api'
import { CategoriesContext } from './categories'

export const DrinksContext = createContext()

const DrinksContextComponent = ({ children }) => {
  const { currentCategory } = useContext(CategoriesContext)
  const [drinks, setDrinks] = useState([])
  const [currentDrink, setCurrentDrink] = useState([])
  const [drinksPagesData, setDrinksPageData] = useState([])

  useEffect(() => {
    ;(async () => {
      let { data } = await TheCocktailAPI.get(
        `${TheCocktailRoutes.filterByCategory}${currentCategory}`
      )

      setDrinks(data.drinks)
    })()
  }, [currentCategory])

  useEffect(() => {
    let qtdPages = Math.ceil(drinks?.length / 20)
    let drinksTemp = [...(drinks || [])]
    let drinksPages = []

    for (let i = 0; i < qtdPages; i++) {
      drinksPages.push({ page: i + 1, drinks: drinksTemp.splice(0, 20) })
    }

    setDrinksPageData(drinksPages)
  }, [drinks])

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        setDrinks,
        currentDrink,
        setCurrentDrink,
        drinksPagesData,
      }}
    >
      {children}
    </DrinksContext.Provider>
  )
}

export default DrinksContextComponent

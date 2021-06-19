import { createContext, useEffect, useState } from 'react'
import { TheCocktailAPI, TheCocktailRoutes } from '../assets/api'

export const CategoriesContext = createContext()

const CategoriesContextComponent = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')

  useEffect(() => {
    ;(async () => {
      let { data } = await TheCocktailAPI.get(TheCocktailRoutes.listCategories)

      setCategories(data.drinks)
    })()
  }, [currentCategory])

  return (
    <CategoriesContext.Provider
      value={{ categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextComponent

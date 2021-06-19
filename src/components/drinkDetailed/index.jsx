import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TheCocktailAPI, TheCocktailRoutes } from '../../assets/api'
import { Typhography } from '../../styles/typhography/index'
import {
  Drink,
  DrinkContent,
  DrinkIngredient,
  DrinkPoster,
  DrinkText,
  DrinkTextAlt,
} from './styles'

const DrinkDetailed = ({ idDrink }) => {
  const [drink, setDrink] = useState(null)
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    ;(async () => {
      let { data } = await TheCocktailAPI(
        `${TheCocktailRoutes.fullDrinkDetail}${idDrink}`
      )
      setDrink(data.drinks[0])
    })()
  }, [idDrink])

  useEffect(() => {
    let ingredientsTemp = []

    if (drink) {
      for (let i = 1; i <= 15; i++) {
        drink[`strIngredient${i}`] &&
          ingredientsTemp.push(drink[`strIngredient${i}`])
      }
    }

    setIngredients(ingredientsTemp)
  }, [drink])

  return drink ? (
    <Drink>
      <DrinkContent>
        <Typhography tag='h4'>{drink.strDrink}</Typhography>
        <DrinkText>
          Category:{' '}
          <Link to={`/category/${drink.strCategory}`}>{drink.strCategory}</Link>
        </DrinkText>
        <DrinkText>Ingredients:</DrinkText>
        {ingredients.map((item) => (
          <DrinkIngredient key={item}>{item} ,</DrinkIngredient>
        ))}
        <DrinkTextAlt>
          <a
            href={`https://www.youtube.com/results?search_query=${drink.strDrink}`}
            target='_blank'
            rel='noreferrer'
          >
            Youtube results for {drink.strDrink}
          </a>
        </DrinkTextAlt>
      </DrinkContent>
      <DrinkPoster src={drink.strDrinkThumb} />
    </Drink>
  ) : (
    <Typhography>Loading drink details...</Typhography>
  )
}

export default DrinkDetailed

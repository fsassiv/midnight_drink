import { useEffect, useState } from 'react'
import { TheCocktailAPI, TheCocktailRoutes } from '../../assets/api'
import DrinkLink from '../../components/drinkLink/index'
import { Typhography } from '../../styles/typhography/index'
import { HomeContainer } from './styles'

const Home = () => {
  const [drink, setDrink] = useState({})

  useEffect(() => {
    ;(async () => {
      let { data } = await TheCocktailAPI(TheCocktailRoutes.randomDrink)
      setDrink(data.drinks[0])
    })()
  }, [])

  return (
    <HomeContainer>
      <Typhography tag='h3'>Home Suggestion:</Typhography>
      <DrinkLink drink={drink} />
    </HomeContainer>
  )
}

export default Home

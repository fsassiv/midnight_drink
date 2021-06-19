import { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { TheCocktailAPI, TheCocktailRoutes } from '../../assets/api'
import { CategoriesContext } from '../../context/categories'
import { DrinksContext } from '../../context/drinks'
import {
  Form,
  SearchButton,
  SearchInput,
  Select,
} from '../../styles/form/index'
import { Container } from '../../styles/layout/index'
import { Typhography } from '../../styles/typhography/index'
import { Header, ReturnHomeBtn } from './styles'

const Index = () => {
  const { setCurrentCategory, currentCategory } = useContext(CategoriesContext)
  const { setDrinks } = useContext(DrinksContext)
  const { categories } = useContext(CategoriesContext)
  const history = useHistory()
  const location = useLocation()

  const [drinkName, setDrinkName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (drinkName !== '') {
      let { data } = await TheCocktailAPI(
        `${TheCocktailRoutes.filterByDrinkName}${drinkName}`
      )
      if (data.drinks) {
        setDrinks(data.drinks)
        history.push(`/drink`)
      }
    } else {
      setDrinks([])
      history.push(`/`)
    }
  }

  const handleCategoryChange = ({ target }) => {
    setCurrentCategory(target.value)
    history.push(`/category/${target.value}`)
  }

  return (
    <Header>
      <Container>
        <Typhography color='white' tag='h1' size={4}>
          Midnight Drink
        </Typhography>
        <Form onSubmit={handleSubmit}>
          <SearchInput
            onChange={({ target }) => setDrinkName(target.value)}
            type='text'
            placeholder='What are you looking for?'
          />
          <SearchButton type='submit'>Search</SearchButton>
        </Form>
        <Select onChange={handleCategoryChange}>
          <option disabled={currentCategory !== ''} value=''>
            Select the category
          </option>
          {categories.map(({ strCategory }) => (
            <option key={strCategory}>{strCategory}</option>
          ))}
        </Select>
        {location.pathname !== '/' && (
          <ReturnHomeBtn to='/'>Return Home</ReturnHomeBtn>
        )}
      </Container>
    </Header>
  )
}

export default Index

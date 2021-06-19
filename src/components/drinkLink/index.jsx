import { CustomLink, LinkLabel } from './styles'

const DrinkLink = ({ drink }) => {
  return (
    <CustomLink to={`/drink/${drink.idDrink}`} imgSrc={drink.strDrinkThumb}>
      <LinkLabel>{drink.strDrink}</LinkLabel>
    </CustomLink>
  )
}

export default DrinkLink

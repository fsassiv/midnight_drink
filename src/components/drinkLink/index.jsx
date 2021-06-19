import { CustomLink, LinkLabel } from './styles'

const DrinkLink = ({ drink, homeSuggestion }) => {
  return (
    <CustomLink
      homeSuggestion={homeSuggestion}
      to={`/drink/${drink.idDrink}`}
      imgSrc={drink.strDrinkThumb}
    >
      <LinkLabel>{drink.strDrink}</LinkLabel>
    </CustomLink>
  )
}

export default DrinkLink

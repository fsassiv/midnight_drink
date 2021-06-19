import styled from 'styled-components'

export const Drink = styled.div`
  display: flex;
  margin-top: 2rem;
  height: 30rem;
  & > div,
  & > img {
    width: 50%;
  }
`
export const DrinkContent = styled.div`
  h4 {
    font-size: 3.4rem;
    margin-bottom: 1rem;
    color: white;
  }

  a {
    border-bottom: 1px solid white;
    color: white;
  }
`

export const DrinkPoster = styled.img`
  object-fit: cover;
  color: white;
`
export const DrinkText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: white;
`
export const DrinkIngredient = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  color: white;
`

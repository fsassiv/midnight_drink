import { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import DrinkDetailed from '../../components/drinkDetailed/index'
import PageContent from '../../components/pageContent'
import { DrinksContext } from '../../context/drinks'
import { Container } from '../../styles/layout'

const DrinkPage = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const { drinks, drinksPagesData } = useContext(DrinksContext)

  const params = useParams()
  const history = useHistory()
  const { id } = params

  useEffect(() => {
    if (!id && drinks?.length === 0) {
      history.push('/')
    }
  }, [id, drinks, history])

  return (
    <>
      {id ? (
        <Container>
          <DrinkDetailed idDrink={id} />
        </Container>
      ) : (
        <PageContent
          drinksPagesData={drinksPagesData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default DrinkPage

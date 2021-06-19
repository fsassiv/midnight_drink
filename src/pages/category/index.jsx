import { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import PageContent from '../../components/pageContent'
import { CategoriesContext } from '../../context/categories'
import { DrinksContext } from '../../context/drinks'

const Index = () => {
  const { setCurrentCategory } = useContext(CategoriesContext)
  const { drinks, drinksPagesData } = useContext(DrinksContext)
  const { slug } = useParams()
  const history = useHistory()
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    if (!slug) {
      history.push('/')
    }
    if (slug && drinks?.length === 0) {
      setCurrentCategory(location.pathname.replace('/category/', ''))
    }
  }, [drinks, slug, history, setCurrentCategory, location])

  return (
    <PageContent
      drinksPagesData={drinksPagesData}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
}

export default Index

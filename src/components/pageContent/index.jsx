import React from 'react'
import DrinkLink from '../drinkLink'
import { PageItem, PageList, PageSection } from './styles'

const PageContent = ({ drinksPagesData, currentPage, setCurrentPage }) => {
  return (
    <>
      <PageSection>
        {drinksPagesData[currentPage]?.drinks?.map((item) => (
          <DrinkLink key={item.idDrink} drink={item} />
        ))}
      </PageSection>
      {drinksPagesData.length > 1 && (
        <PageList>
          {drinksPagesData.map((item) => (
            <PageItem
              key={item.page}
              onClick={() => setCurrentPage(item.page - 1)}
              active={item.page - 1 === currentPage}
            >
              {item.page}
            </PageItem>
          ))}
        </PageList>
      )}
    </>
  )
}

export default PageContent

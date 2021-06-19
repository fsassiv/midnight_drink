import styled from 'styled-components'

export const PageSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
export const PageItem = styled.li`
  display: inline-block;
  padding: 8px;
  border-bottom: 1px solid transparent;
  font-weight: 300;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 4px;
  }

  ${(props) =>
    props.active &&
    `
    font-weight:400;
    border-bottom-color: #212121;
  `}
`

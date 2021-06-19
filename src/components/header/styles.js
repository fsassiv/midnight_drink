import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  height: 50vh;
  padding-top: 20px;
  padding-bottom: 20px;
  background-image: url('/img/hero-bg.jpg');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    margin-bottom: 3rem;
    font-weight: 300;
    letter-spacing: 4px;
  }
`
export const ReturnHomeBtn = styled(Link)`
  position: absolute;
  bottom: 5%;
  color: white;
  font-size: 1.4rem;
`

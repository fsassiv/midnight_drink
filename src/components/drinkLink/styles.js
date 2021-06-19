import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../styles/layout/index'

export const CustomLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 4px;
  width: 50%;
  height: 10rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgSrc});
  &::before {
    content: '""';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all linear 0.25s;
  }
  &:hover {
    p {
      background-color: rgba(0, 0, 0, 0.75);
      color: white;
      left: 5%;
    }
    &::before {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @media ${device.desktop} {
    width: 25%;
    height: 20rem;
  }
`

export const LinkLabel = styled.p`
  position: relative;
  top: 5%;
  left: 100%;
  font-size: 1.2rem;
  font-weight: 300;
  color: black;
  padding: 10px 2px 10px 8px;
  transition: all linear 0.25s;
`

import styled from 'styled-components'

const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  desktopL: '1920px',
}

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
}

export const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.desktop} {
    width: 80%;
  }
`

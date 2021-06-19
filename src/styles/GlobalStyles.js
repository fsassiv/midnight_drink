import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

html,body{
  font-size:10px;
  width:100%;
  max-width:100vw;
  overflow-x:hidden;
  background-color:black;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
    font-family: 'Lato', sans-serif;
    font-size:1.6rem;
    text-decoration:none;
    list-style:none;
    color:#212121;
  }

  img{
    width:100%;
  }
`

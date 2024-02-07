import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }

  :root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Arial, sans-serif';
    background-color: #f9f9f9; /* Cor de fundo do body */
  }

  div {
    height: 100%;
    width: 100%;
  }

	button {
		height: 43px;
		border-radius: 3px;
		border-style: none;
		font-family: 'Lexend Deca', sans-serif;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0;
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
		margin-bottom: 25px;
		margin-top: 10px;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
	}
	a {
		text-decoration: none;
  		color: inherit;
	}
`

export default GlobalStyle
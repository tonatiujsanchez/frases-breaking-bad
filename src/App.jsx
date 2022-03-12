import { useState, useEffect } from 'react'
import styled from 'styled-components'

function App() {

  const [ quote, setQuote ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect( ()=>{
    getQuote();
  },[])
  
  const getQuote = async() =>{
    setLoading( true )
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    const resp = await fetch(url);
    const [ result ] = await resp.json()
    setQuote( result )
    setLoading( false );
  }

  

  return (
    <Container>
        <QuoteContainer>

          {( loading )
              ? <div>
                  <Loading><div></div><div></div></Loading>
                </div>
              : <div>
                  <Quote>{ quote.quote }</Quote>
                  <Author> - { quote.author } </Author>
                </div>
          }
        </QuoteContainer>
        <Button onClick={ getQuote }>Obtener Frase</Button>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and ( max-width:768px ){
    padding-top: 1rem;
  }
`

const QuoteContainer = styled.div`
  background-color: rgb(243 244 246);
  width: 600px;
  height: 300px;
  margin-top: 5rem;
  border-radius: 1rem;
  display: grid;
  place-content: center;
  padding: 3rem;
  text-align: center;
  @media screen and ( max-width:768px ){
    width: 100%;
  }
  `
const Quote = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.2rem;
  letter-spacing: -1px;
  word-spacing: 2px;
  @media screen and ( max-width:500px ){
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`

const Author = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
  @media screen and ( max-width:500px ){
    font-size: 1rem;
  }
`
const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 320px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    border: none;
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
      background: -webkit-linear-gradient(top left, #01923e 0%, #018d3b 40%, #177267 100%);
    }
    &:active{
      transform: scale(.98);
    }

    @media screen and ( max-width:768px ){
      width: 100%;
      background-size: 100%;
      font-size: 1.1rem;
    }

`

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid #007d35;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

export default App

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import axios from 'axios'

export default function Home() {

  const [questoes, setQuestoes] = useState([])
  const [pergunta, setPergunta] = useState(null)
  const [countQuestao, setCountQuestao] = useState(0)
  const [selectedOption, setOption] = useState(null)
  const [respostas, setRespostas] = useState([])

  const headers = { Authorization: sessionStorage.getItem('token') }

  // Faz a requisição de todas as questões
  useEffect(() => {
    axios.get('https://pim-aespi.herokuapp.com/questionnaires/list/', {
      headers: headers
    })
    .then(response => {
      console.log(response.data.listQuestions)
      setQuestoes(response.data.listQuestions)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  // Define a questão ser exibida
  useEffect(() => {
    setPergunta(questoes[countQuestao])
  }, [countQuestao, questoes])

  function proximaQuestao(event) {
    event.preventDefault();

    let salvaResposta = pergunta
    salvaResposta.resposta = selectedOption

    let data = {
      idQuestion: salvaResposta.id,
      typeResponse: salvaResposta.resposta
    }

    axios.post('https://pim-aespi.herokuapp.com/evaluative-report', data, {
      headers: headers
    })
    .then(response => {
      console.log(response.data)
    })

    setRespostas([...respostas, salvaResposta])

    setPergunta(questoes[countQuestao])
    setCountQuestao(countQuestao + 1)
    setOption(null)

  }
  
  function voltaQuestao(event) {
    event.preventDefault();

    setRespostas(respostas => respostas.splice(-1, 1))
    
    if (countQuestao > 0) {
      setCountQuestao(countQuestao - 1)
    }
    setPergunta(questoes[countQuestao])
    setOption(null)
  }

  // useEffect(() => {
  //   if (countQuestao >= questoes.length && respostas.length > 0) {
  //     console.log(respostas)
  //     let data = []
  //     respostas.map(item => {
  //       data.push({
  //         idQuestion: item.id,
  //         typeResponse: item.resposta
  //       })
  //     })

  //     axios.post('https://pim-aespi.herokuapp.com/evaluative-report', data, {
  //       headers: headers
  //     })
  //   }
  // }, [respostas])

  return (
    <>
      <Head>
        <title>Aespi - Questões Aluno</title>
      </Head>

      <Header>
        <Link href="/">
          <Image src="/images/logo-aespi.png" alt="AESPI" width={ 130, 210 } height={ 56, 90 } />
        </Link>
        <SairButton>
          <Link href="/login/aluno">
            <a>
              Sair
              <Image src="/images/icon-sair.svg" alt="" width={ 16 } height={ 16 } />
            </a>
          </Link>
        </SairButton>
      </Header>

      <Body>
        <div className="container">
          <Card>
            {countQuestao < questoes.length ? (
              <>
                <h1>Avaliação Institucional</h1>
                <p className="pergunta">
                  { pergunta ? pergunta.question : null }
                </p>
                <div className="options">
                  <label>
                    <input 
                      type="radio" 
                      value="Ótimo" 
                      checked={selectedOption === "great"} 
                      onChange={e => setOption('great')} 
                    />
                    Ótimo
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="Muito bom" 
                      checked={selectedOption === "good"} 
                      onChange={e => setOption('good')} 
                    />
                    Muito bom
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="Regular" 
                      checked={selectedOption === "regular"} 
                      onChange={e => setOption('regular')}
                    />
                    Regular
                  </label>
                  <label>
                    <input
                      type="radio" 
                      value="Ruim" 
                      checked={selectedOption === "bad"} 
                      onChange={e => setOption('bad')}
                    />
                    Ruim
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="Muito ruim" 
                      checked={selectedOption === "very bad"} 
                      onChange={e => setOption('very bad')}/>
                      Muito ruim
                  </label>
                </div>
                <div className="row">
                  <ButtonVoltar
                    onClick={e => voltaQuestao(e)}
                    disabled={countQuestao === 0}
                  >
                    Voltar
                  </ButtonVoltar>
                  <ButtonAvancar 
                    onClick={e => proximaQuestao(e)}
                    disabled={selectedOption === null}
                  >
                    Avançar
                  </ButtonAvancar>
                </div>
              </>
            ) : (
              <>
                <h2>
                  Obrigado pela sua avaliação, ela é muito importante para o progresso da faculdade.
                </h2>
                <ButtonVoltar style={{margin: '0 auto', display: 'flex'}}>
                  <Link href="/">
                    Início
                  </Link>
                </ButtonVoltar>
              </>
            )}
          </Card>
        </div>
      </Body>
    </>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 8px 24px;
`

const Body = styled.div`
  background-color: #0B4DA2;
  .container {
    min-height: calc(100vh - 90px - 16px);
    background-color: transparent;
  }
  .row {
    justify-content: space-between;
  }
`

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 16px 8px;
  width: 414px;
  max-width: 100%;
  h1 {
    font-size: 36px;
    border-bottom: 2px solid #CCC;
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 30px;
    width: 100%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .pergunta {
    padding: 16px 8px;
    margin: 8px 0;
    background-color: #F0F0F0;
    border-radius: 10px;
    font-size: 18px;
  }
  .options {
    display: flex;
    flex-direction: column;
    label {
      font-size: 18px;
      width: 100%;
      margin: 8px 0;
      cursor: pointer;
      input {
        margin-right: 4px;
      }
    }
  }
`

const SairButton = styled.div`
  a {
    background-color: #C82333;
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    transition: opacity 0.5s;
    &:hover {
      opacity: 0.8;
    }
    img {
      margin: 0 4px;
    }
  }
`

const ButtonVoltar = styled.button`
  cursor: pointer;
  text-align: center;
  justify-content: center;
  background-color: #0B4DA2;
  border-radius: 5px;
  width: 45%;
  padding: 16px;
  color: #fff;
  border: none;
  font-size: 18px;
  margin: 24px 0 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
const ButtonAvancar = styled.button`
  cursor: pointer;
  text-align: center;
  background-color: #218838;
  border-radius: 5px;
  width: 45%;
  padding: 16px;
  color: #fff;
  border: none;
  font-size: 18px;
  margin: 24px 0 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
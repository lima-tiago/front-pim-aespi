import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Drawer from '../../components/drawer'
import axios from 'axios'

export default function Questionarios() {
  const [questaoFuncionario, setQuestaoFuncionario] = useState(null);
  const [questaoAluno, setQuestaoAluno] = useState(null);

  const headers = {
    Authorization: sessionStorage.getItem('token')
  }

  function sendQuestaoFuncionario(event) {
    event.preventDefault();
    
    let data = {
      text: questaoFuncionario,
      role: "teacher"
    }

    axios.post("https://pim-aespi.herokuapp.com/questionnaires", data, {
      headers: headers
    })
    .then(response => {
      console.log(response)
      setQuestaoFuncionario(null)
      alert('Questão cadastrada com sucesso!')
    })
    .catch(error => {
      console.log(error)
    })
  }

  function sendQuestaoAluno(event) {
    event.preventDefault();
    
    let data = {
      text: questaoAluno,
      role: "student"
    }

    axios.post("https://pim-aespi.herokuapp.com/questionnaires", data, {
      headers: headers
    })
    .then(response => {
      console.log(response)
      setQuestaoAluno(null)
      alert('Questão cadastrada com sucesso!')
    })
    .catch(error => {
      console.log(error)
    })

  }

  return (
    <>
      <Head>
        <title>Aespi - Painel</title>
      </Head>

      <Drawer />

      <Container>
        <Header>
          <div className="sair">
            <Link href="/login/painel">
              <Image src="/images/avatar.png" alt="Sair" width={40} height={40} />
            </Link>
          </div>
          <div className="title">
            <h1>Olá, Vanusa!</h1>
          </div>
        </Header>

        <Card>
          <div className="title">
            <h1>Cadastro de questão de Funcionário</h1>
          </div>
          <form onSubmit={e => sendQuestaoFuncionario(e)}>
            <div className="groupInput">
              <textarea 
                onChange={e => setQuestaoFuncionario(e.target.value)}
                value={ questaoFuncionario } 
                required
              ></textarea>
            </div>
            <ButtonAvancar 
              // onClick={e => proximaQuestao(e)}
              disabled={questaoFuncionario === null}
            >
              Avançar
            </ButtonAvancar>

          </form>
          <div className="title">
            <h1>Cadastro de questão de Aluno</h1>
          </div>
          <form onSubmit={e => sendQuestaoAluno(e)}>
            <div className="groupInput">
              <textarea
                onChange={e => setQuestaoAluno(e.target.value)}
                value={ questaoAluno } 
                required
              ></textarea>
            </div>
            <ButtonAvancar 
              // onClick={e => proximaQuestao(e)}
              disabled={questaoAluno === null}
            >
              Avançar
            </ButtonAvancar>
          </form>
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin-left: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D0D7DF;
  min-height: 100vh;
  padding: 0 40px;
`

const Header = styled.div`
  display: block;
  width: 100%;
  margin: 8px 0 24px 0;
  > div {
    width: 100%;
    img {
      border-radius: 50%;
    }
    h1 {
      font-size: 24px;
      opacity: 0.88;
      text-align: left;
      font-weight: 400;
    }
    &.sair {
      display: flex;
      justify-content: flex-end;
      img {
        &:hover {
          cursor: pointer;
        }
      }
    }
    &.title {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 220px;
        height: 2px;
        background: #0B4DA2;
        bottom: -8px;
        left: 0;
      }
    }
  }
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  min-height: 480px;
  width: 100%;
  .row {
    > div {
      width: 50%;
    }
  }
  .title {
    h1 {
      position: relative;
      font-weight: 400;
      font-size: 32px;
      display: flex;
      margin-left: auto;
      &:after {
        content: '';
        position: absolute;
        width: 300px;
        height: 2px;
        background: #0B4DA2;
        bottom: -8px;
        left: 0;
      }
    }
  }
`

const ButtonAvancar = styled.button`
  cursor: pointer;
  text-align: center;
  background-color: #0B4DA2;
  border-radius: 5px;
  width: 45%;
  padding: 16px;
  color: #fff;
  border: none;
  font-size: 18px;
  margin: 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`

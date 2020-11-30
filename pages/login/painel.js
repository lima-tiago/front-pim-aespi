import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const router = useRouter()

  function sendLogin (event) {
    event.preventDefault();

    axios.post('https://pim-aespi.herokuapp.com/users/login', {
      email: email,
      password: senha,
      role: 'admin'
    })
    .then(response => {
      console.log(response)
      router.push('/painel')
    })
    .catch(error => {
      console.log(error)
      router.push('/painel')
    })
  }

  return (
    <>
      <Head>
        <title>Aespi - Login Painel</title>
      </Head>

      <Body>
        <div className="container">
          <Image src="/images/logo-aespi.png" alt="AESPI Ensino Superior do Piauí" width={210} height={90} />
          <h1>Seja bem-vindo!</h1>
          <p className="subtitle">
            Painel de relatórios do Sistema de Avaliação da Faculdade
          </p>

          <form onSubmit={e => sendLogin(e)}>
            <div className="groupInput">
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="groupInput">
              <input id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required/>
              <label htmlFor="senha">Senha</label>
            </div>
            <SendButton type="submit" disabled={email === null || email.length <= 0 || senha === null || senha.length <= 0}>
              Entrar
            </SendButton>
          </form>
        </div>
      </Body>
    </>
  )
}

const Body = styled.div`
  background-color: #F0F0F0;
  .container {
    min-height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    .groupInput {
      position: relative;
      margin: 8px 0;
      label {
        position: absolute;
        top: 16px;
        left: 24px;
        z-index: 1;
        padding: 0 4px;
        transition: top 0.5s, font-size 0.5s;
      }
      input {
        background-color: #FFF;
        border: 1px solid #CCC;
        border-radius: 10px;
        padding: 16px 24px;
        width: 360px;
        max-width: 100%;
        transition: border 0.5s;
        &:focus {
          outline: none;
          border-color: #333;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
        &:valid {
          border-color: #0ab800;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
        &:invalid {
          border-color: #f00;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
      }
    }
  }
`

const SendButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  text-align: center;
  margin: 8px 0;
  background-color: #218838;
  color: #FFF;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.5s;
  &:disabled {
    background-color: rgba(33, 136, 56, 0.5);
  }
`
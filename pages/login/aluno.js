import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const router = useRouter()

  function sendLogin(event) {
    event.preventDefault();

    axios.post('https://pim-aespi.herokuapp.com/users/login', {
      email: email,
      password: senha,
      role: 'student'
    })
      .then(response => {
        sessionStorage.setItem('token', response.data.token)
        router.push('/questionario/aluno')
      })
      .catch(error => {
        console.log(error)
        alert('Verifique se os dados foram preenchidos corretamente!')
      })
  }

  return (
    <>
      <Head>
        <title>Aespi - Login Aluno</title>
      </Head>

      <Body>
        <div className="container">
          <Link href="/">
            <Image src="/images/logo-aespi.png" alt="AESPI Ensino Superior do Piauí" width={210} height={90} />
          </Link>
          <h1>Seja bem-vindo!</h1>
          <p className="subtitle">
            Questionário para alunos
          </p>

          <form onSubmit={e => sendLogin(e)}>
            <div className="groupInput">
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="groupInput">
              <input id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
              <label htmlFor="senha">Senha</label>
            </div>
            <SendButton type="submit" disabled={email === null || email.length <= 0 || senha === null || senha.length <= 0}>
              ENTRAR
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
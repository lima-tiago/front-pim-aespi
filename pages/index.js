import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aespi</title>
      </Head>
      <Body>
        <div className="container">
          <Image src="/images/logo-aespi.png" alt="AESPI Ensino Superior do Piauí" width={ 210 } height={ 90 } />
          <h1>Seja bem-vindo!</h1>
          <p className="subtitle">
            Escolha o que você deseja acessar.
          </p>
          <Card>
            <Link href="">
              <a>
                <p>Questionário de aluno</p>
                <Image src="/images/computer.svg" alt="" width={ 63 } height={ 63 } />
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="">
              <a>
                <p>Questionário de professores</p>
                <Image src="/images/professor.svg" alt="" width={ 63 } height={ 63 } />
              </a>
            </Link>
          </Card>
          <Card className="only-desktop">
            <Link href="">
              <a>
                <p>Painel administrativo</p>
                <Image src="/images/painel.svg" alt="" width={ 63 } height={ 63 } />
              </a>
            </Link>
          </Card>
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

const Card = styled.div`
  a {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 22px;
    width: 390px;
    max-width: calc(100vw - 30px);
    padding: 16px 12px;
    margin: 8px 0;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.25);
    }

    p {
      width: calc(100% - 63px)
    }
  }
`

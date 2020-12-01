import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Drawer from '../../components/drawer'
import Chart from 'react-apexcharts'

export default function Relatorios() {

  const colors = [
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0'
  ]

  const seriesFuncionarios = [{
    data: [20, 10, 30, 35, 5]
  }]
  const seriesAlunos = [{
    data: [20, 10, 30, 35, 5]
  }]

  const options = {
    chart: {
      height: 200,
      type: 'bar',
    },
    colors: colors,
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '45%'
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'Ótimo', 'Muito bom', 'Regular', 'Ruim', 'Muito ruim'
      ]
    },
    labels: {
      style: {
        colors: colors,
        fontSize: '12px'
      }
    }
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
          <div className="row">
            <div className="title">
              <h1>
                Funcionários
              </h1>
              <p>
                Os serviços da Biblioteca permitem atendimento adequado às necessidades dos usuários (alunos
                e egressos)
              </p>
            </div>
            <div className="graph">
              <div id="chart">
                {seriesFuncionarios && options && (
                  <Chart options={options} series={seriesFuncionarios} type="bar" height={200} />
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="title">
              <h1>
                Alunos
              </h1>
              <p>
                O Curso atende, de forma satisfatória, aquilo que você esperava quando ingressou na IES.
              </p>
            </div>
            <div className="graph">
              {seriesAlunos && options && (
                <Chart options={options} series={seriesAlunos} type="bar" height={200} />
              )}
            </div>
          </div>
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
      text-align: left;
      font-size: 28px;
      width: 100%;
      display: flex;
      margin-left: auto;
      &:after {
        content: '';
        position: absolute;
        width: 240px;
        height: 2px;
        background: #0B4DA2;
        bottom: -8px;
        left: 0;
      }
    }
  }
`

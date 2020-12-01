import React, { Component } from 'react'
import styled from 'styled-components'
import ActiveLink from './activeLink'
import Image from 'next/image'

class Drawer extends Component {
  state = {}

  render() {
    return (
      <>
        <DrawerLeft>
          <Logo>
            <Image src="/images/logo-aespi.png" alt="AESPI" width={ 210 } height={ 90 } />
          </Logo>

          <Menu>
            <li>
              <ActiveLink activeClassName="active" href="/painel">
                <a>
                  DASHBOARD
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/painel/questionarios">
                <a>
                  QUESTIONÁRIOS
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/painel/relatorios">
                <a>
                  RELATÓRIOS
                </a>
              </ActiveLink>
            </li>
          </Menu>
        </DrawerLeft>
      </>
    )
  }
}

const DrawerLeft = styled.div`
  width: 340px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #F2F2F2;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`

const Logo = styled.div`
  display: flex;
  margin: 50px auto;
  width: max-content;
`

const Menu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    width: 100%;
    display: flex;
    a {
      width: 100%;
      padding: 16px 40px;
      color: #0B4DA2;
      background-color: transparent;
      display: flex;
      align-items: center;
      opacity: 0.5;
      transition: background-color 0.5s, opacity 0.5s, color 0.5s;
      &.active {
        opacity: 1;
        color: #FFF;
        background-color: #0B4DA2;
      }
      &:hover {
        color: #FFF;
        background-color: #0B4DA2;
      }
    }
  }
`

export default Drawer;
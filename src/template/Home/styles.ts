'use client'

import styled from 'styled-components'

export const Divider = styled.div`
  width: 100%;
  background-color: #24293F;
  height: 1px;
  margin: 35px 0px;
`

export const ContainerHead = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #EE8328 0%, #E14318 100%);
  position: relative;

  &::before {
    position: absolute;
    content: '';
    bottom: 55px;
    width: 200px;
    height: 400px;
    background-image: url('/assets/pokeball.svg');
    background-repeat: no-repeat;
    transform: rotate(180deg);

    @media (max-width: 1150px) {
      bottom: 300px;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 55px;
    right: 0;
    width: 200px;
    height: 400px;
    background-image: url('/assets/pokeball.svg');
    background-repeat: no-repeat;

    @media (max-width: 1150px) {
      bottom: 300px;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }
`

export const MainContainer = styled.div`
  width: 100%;
  background-color: #060b28;
  padding-top: 60px;
  padding-bottom: 100px;
`

export const SearchAndFilterContainer = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const ContainerStartAndFilterTypes = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (min-width: 500px) and (max-width: 900px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const ContainerListPokemon = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`
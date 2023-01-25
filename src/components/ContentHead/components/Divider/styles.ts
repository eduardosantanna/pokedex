'use client'

import styled from "styled-components"

export const ContainerDivider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 80px;

  &::before {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    height: 210px;
    width: 1px;
    position: absolute;
    transform: translateX(25px);
    top: 0;
  }

  &::after {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    height: 210px;
    width: 1px;
    position: absolute;
    transform: translateX(25px);
    bottom: 0;
  }

  @media (max-width: 1150px) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 28px 0px;

    &::before {
      position: relative;
      height: 1px;
      width: 210px;
      background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    }

    &::after {
      position: relative;
      height: 1px;
      width: 210px;
      transform: translateX(-25px);
      background: linear-gradient(100deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    }
  }
`
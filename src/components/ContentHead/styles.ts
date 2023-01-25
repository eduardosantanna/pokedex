'use client'

import styled from 'styled-components'

interface ITextPropsData {
  fontSize?: number
  fontWeight?: number
  color?: string
}

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  justify-content: space-between;
  padding-bottom: 50px;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;

  @media (max-width: 1150px) {
    width: 100%;
    max-width: 600px;
    align-items: center;
  }
`

export const ContentImage = styled.div`
  z-index: 1;
  position: relative;
  width: 488px;
  height: 528px;

  @media (max-width: 500px) {
    width: 100%;
    height: 24rem;
  }
`

export const ContainerElements = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;

  @media (max-width: 1150px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
  }
`

export const TextTitle = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  margin-top: 14px;
  
  @media (max-width: 1150px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    margin-top: 8px;
    width: 100%;
    text-align: left;
    font-size: 3rem;
  }
`

export const Text = styled.p<ITextPropsData>`
  color: ${p => p.color || '#fff'};
  font-size: ${p => p.fontSize || 1}em;
  font-weight: ${p => p.fontWeight || 400};
  margin-top: 14px;
  line-height: 24px;
  
  @media (max-width: 1150px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    width: 100%;
    text-align: left;
    margin-top: 8px;
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 12px 0;
  color: #e14318;
  font-size: 1em;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 1150px) {
    width: max-content;
    padding: 12px 28px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
'use client'

import styled from "styled-components"
import { IElementTypes, backgroundColorsElements } from "./types"

interface IContainerElementPropsData extends IElementTypes {
  cursorPointer?: boolean
}

export const ContainerElement = styled.div<IContainerElementPropsData>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  background-color: ${p => backgroundColorsElements[`${p.typeElement}`]};
  cursor: ${({ cursorPointer }) => cursorPointer ? 'pointer' : 'default'};
`

export const TextElement = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1em;
`
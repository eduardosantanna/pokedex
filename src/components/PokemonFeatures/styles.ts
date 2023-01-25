import styled from 'styled-components'

type TTextGeneric = {
  fontWeight: number
  fontSize?: number
}

export const ContainerFeatures = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 2px;
`

export const ContainerImageAndFeature = styled.div`
  display: flex;
  gap: 10px;
`

export const ContainerDescription = styled.div`
  width: 100%;
`

export const TextGeneric = styled.p<TTextGeneric>`
  color: #fff;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize || 1}rem;
  text-align: center;
`
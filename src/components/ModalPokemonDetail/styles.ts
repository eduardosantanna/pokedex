import styled, { keyframes } from 'styled-components'

type ITextGenericProps = {
  fontSize: number
  fontWeight: number
  paddingTop?: number
  width?: number
  textAlign?: 'center' | 'left'
}

type ProgressBarFeature = {
  progress: number
}

type ContainerLimiterFeatureProps = {
  flex: number
}

export const ContainerModalOberlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 6;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerContentModal = styled.div`
  position: relative;
  width: 948px;
  height: 352px;
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 40px 72px 40px 0px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
    height: 734px;
    margin: 224px 16px 112px 16px;
  }
`

export const TextGeneric = styled.p<ITextGenericProps>`
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  color: #FFF;
  width: ${({ width }) => width || 100 + '%'}%;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin-top: 4px;
`

export const ContainerPokemonCard = styled.div`
  width: 30%;
`

export const ContainerImage = styled.div`
  position: absolute;
  top: -160px;
  left: 52px;
`

export const ContainerTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`

export const ContainerFeatures = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 26px;
  margin-top: 24px;
`

export const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 27.75px;
  right: 27.75px;
`

export const ContainerFeaturesList = styled.div`
  width: 52%;
`

export const ListFeatures = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const ElementListFeature = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerLimiterFeature = styled.div<ContainerLimiterFeatureProps>`
  flex: ${({ flex }) => flex};
`

export const ProgressBarFeature = styled.div<ProgressBarFeature>`
  width: 100%;
  height: 8px;
  background-color: #555555;
  border-radius: 4px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: ${({ progress }) => progress > 50 ? '#1CD80E' : '#FF364E'};
    border-radius: 4px;
    height: 8px;
    width: ${({ progress }) => progress > 100 ? 100 : progress}%;
    animation-name: progressBarAnimation;
    animation-duration: 2s;

    @keyframes progressBarAnimation {
      0% { width: 0%; }
      100% { width: ${({ progress }) => progress > 100 ? 100 : progress}%; }
    }
  }
`
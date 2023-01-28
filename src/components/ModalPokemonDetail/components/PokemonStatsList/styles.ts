import styled, { keyframes } from 'styled-components'

type TProgressBarValue = {
  progress: number
}

export const ContainerStats = styled.div`
  flex: 2;
  padding-left: 67.5px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding-left: 0px;
    flex: 1;
  }
`

export const TitleStats = styled.p`
  width: 100%;
  color: #FFF;
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
`

export const ListStatus = styled.ul`
  flex-grow: 1;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ElementListStatus = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StatsName = styled.span`
  flex: 1;
  color: #FFF;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 1000px) {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex: .4;
  }
`

export const StatsValue = styled.span`
  flex: .5;
  color: #FFF;
  font-size: 1rem;
  font-weight: 700;

  @media (max-width: 1000px) {
    flex: .5;
  }

  @media (max-width: 600px) {
    flex: .2;
  }
`

export const ProgressBarBase = styled.div`
  flex: 4;
  background-color: #555555;
  height: 8px;
  border-radius: 4px;

  @media (max-width: 1000px) {
    flex: 6;
  }

  @media (max-width: 600px) {
    flex: 1;
  }
`

const progressAnimation = (progress: number) => keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: ${progress};
    }
`

export const ProgressBarValue = styled.div<TProgressBarValue>`
  width: ${({ progress }) => progress > 100 ? 100 : progress}%;
  background-color: ${({ progress }) => progress < 50 ? '#FF364E' : '#1CD80E'};
  height: 8px;
  border-radius: 4px;
  animation-name: ${({ progress }) => progressAnimation(progress)};
  animation-duration: 2s;
`
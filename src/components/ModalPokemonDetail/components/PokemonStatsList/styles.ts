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
  flex: .7;
  color: #FFF;
  font-size: 1rem;
  font-weight: 400;
`

export const StatsValue = styled.span`
  flex: .4;
  color: #FFF;
  font-size: 1rem;
  font-weight: 700;
`

export const ProgressBarBase = styled.div`
  flex: 2;
  background-color: #555555;
  height: 8px;
  border-radius: 4px;
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
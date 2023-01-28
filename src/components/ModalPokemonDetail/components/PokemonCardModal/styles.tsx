import styled from 'styled-components'

export const ContainerPokemonCard = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 1000px) {
    align-items: center;
    flex: 1;
  }
`

export const ContainerAlign = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerImage = styled.div`
  position: absolute;
  top: -146px;
`

export const PokemonNumber = styled.p`
  color: #fff;
  font-size: 1.2rem;
  width: max-content;
  font-weight: 700;
  text-align: center;
`

export const PokemonName = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 2rem;
  width: max-content;
  font-weight: 700;
  text-align: center;
`

export const ContainerTypes = styled.div`
  margin-top: 12px;
  width: max-content;
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const ContainerFeatures = styled.div`
  margin-top: 24px;
  width: max-content;
  display: flex;
  justify-content: center;
  gap: 26px;
`

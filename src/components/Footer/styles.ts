import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #060b28;
  padding-bottom: 28px;
`

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 35px;
  }
`

export const ContainerText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column; 
`

export const ContainerSocialMedia = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`

export const Text = styled.p`
  font-size: .8rem;
  color: #FFF;
  font-weight: 400;
 `
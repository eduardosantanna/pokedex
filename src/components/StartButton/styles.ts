import styled from 'styled-components'

export const ButtonStartContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 500px) and (max-width: 900px) {
    width: max-content;
    margin: 0;
    display: flex;
    align-items: flex-end;
  }
`

export const Button = styled.button`
  width: max-content;
  height: max-content;
  background: linear-gradient(180deg, #151A37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293F;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  padding: 13px 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
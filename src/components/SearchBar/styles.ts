import styled from 'styled-components'

export const MainContainerSearchBar = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;

  @media (max-width: 900px) {
    margin-top: 24px;
    width: 100%;
  }
`

export const ContainerSearchAndButton = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #2F5AFF;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(47,90,255,0.8);
  }
`

export const InputSearch = styled.input`
  flex: 1;
  height: 56px;
  background-color: #060b28;
  color: #fff;
  font-weight: 500;
  padding: 16px;
  border-radius: 6px 0 0 6px;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
`

export const ButtonSearch = styled.button`
  height: 56px;
  width: 56px;
  background-color: #2F5AFF;
  outline: #2F5AFF;
  border: #2F5AFF;
  color: transparent;
  border-radius: 0px 4px 4px 0px;
  background-image: url(/assets/icon-search.svg);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
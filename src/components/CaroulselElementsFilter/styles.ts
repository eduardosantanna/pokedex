import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const TitleCarousel = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  padding: 0 0 16px 0;
`

export const ContainerSlidersCarousel = styled.div`
  display: flex;
  padding: 0 0;
`

export const ButtonPrev = styled.button`
  background-color: transparent;
  background-image: url(/assets/icon-arrow-left.svg);
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
  margin: 0px 15px;
  border: transparent;

  @media (max-width: 500px) {
    display: none;
  }
`

export const ButtonNext = styled.button`
  background-color: transparent;
  background-image: url(/assets/icon-arrow-right.svg);
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
  margin: 0px 15px;
  border: transparent;

  @media (max-width: 500px) {
    display: none;
  }
`
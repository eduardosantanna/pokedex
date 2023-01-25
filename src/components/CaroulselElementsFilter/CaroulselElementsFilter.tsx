import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper'
import * as S from './styles'
import { ElementTag } from '../ElementTag/ElementTag'
import { useRef } from 'react'

export const CaroulselElementsFilter: React.FC = () => {
  const elements = [
    'fire',
    'flying',
    'bug',
    'dark',
    'dragon',
    'electric',
    'grass',
    'poison',
    'water',
    'fairy',
    'fighting',
    'ghost',
    'ground',
    'ice',
    'normal',
    'psychic',
    'rock',
    'steel',
  ]

  const swiperRef = useRef<SwiperCore>()

  return (
    <S.CarouselContainer>
      <S.TitleCarousel>Pesquisar por tipos</S.TitleCarousel>
      <S.ContainerSlidersCarousel>
        <S.ButtonPrev onClick={() => swiperRef.current?.slidePrev()}>
          P
        </S.ButtonPrev>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView="auto"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {elements.map((element) => (
            <SwiperSlide key={element}>
              <ElementTag cursorPointer typeElement={element as 'fire'} />
            </SwiperSlide>
          ))}
        </Swiper>
        <S.ButtonNext onClick={() => swiperRef.current?.slideNext()}>
          N
        </S.ButtonNext>
      </S.ContainerSlidersCarousel>
    </S.CarouselContainer>
  )
}

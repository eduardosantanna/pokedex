import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper'
import { useRef } from 'react'
import * as S from './styles'
import { pokemonTypesInArray } from '@/helpers/pokemonTypesInArray'
import { ElementTag } from '../ElementTag/ElementTag'

interface ICaroulselElementsFilterProps {
  children: React.ReactNode
}

export const CaroulselElementsFilter: React.FC<
  ICaroulselElementsFilterProps
> = ({ children }) => {
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
          {children}
        </Swiper>
        <S.ButtonNext onClick={() => swiperRef.current?.slideNext()}>
          N
        </S.ButtonNext>
      </S.ContainerSlidersCarousel>
    </S.CarouselContainer>
  )
}

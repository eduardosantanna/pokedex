'use client'

import StyledComponentsRegistry from '../lib/registry'
import '../style/swiperConfigStyles.css'
import '../style/globalStyle.css'
import '../style/scroolBar.css'
import 'swiper/css/navigation'
import 'swiper/css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Pokédex</title>
      <body>
        <StyledComponentsRegistry>
          <>{children}</>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

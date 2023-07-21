"use client" 

import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import BackgroundText from '../UI/BackgroundText/BackgroundText'

interface MyHeadContainerProps {
  children: React.ReactNode
}

export const MyHeadSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const MyHeadContainer = forwardRef(({ children }: MyHeadContainerProps, ref: React.Ref<HTMLDivElement>) => (
  <Box
    ref={ref}
    className="my-head"
    m="auto"
    mt={[ '40px', '40px', '60px' ]}
    mb={[ '20px', '30px', '-30px' ]}
    w={[280, 380, 480]}
    h={[280, 380, 480]}
    position="relative"
  >
    <BackgroundText text="McKelvie" />
    {children}
  </Box>
))

const Loader = () => {
  return (
    <MyHeadContainer>
      <MyHeadSpinner />
    </MyHeadContainer>
  )
}

MyHeadContainer.displayName = 'MyHeadContainer';

export default Loader
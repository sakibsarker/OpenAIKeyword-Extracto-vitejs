import { Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <>
    <Heading color="white" marginBottom="1rem">
        Open AI KEYWORD EXTRATOR
    </Heading>
    <Text fontSize={25} textAlign="center">
        Paste in your text below and we'll
    </Text>
    </>
  )
}

export default Header
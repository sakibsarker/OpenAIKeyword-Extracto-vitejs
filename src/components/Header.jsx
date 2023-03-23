import { Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <>
    <Heading color="white" marginBottom="1rem">
        TEXT TO KEYWORDS GENERATOR
    </Heading>
    <Text fontSize={18} textAlign="center">
    I'm happy to assist you with your writing.
    <br/>Please share your text and I'll provide suggestions and improvements.
    </Text>
    </>
  )
}

export default Header
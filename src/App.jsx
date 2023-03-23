import { useState } from 'react'
import { Container,Box } from '@chakra-ui/react'
import Header from './components/Header'
import TextInput from './components/TextInput'
import KeyModal from './components/KeyModal'
import Footer from './components/Footer'

const App=()=> {
  const[keyword,setKeyword]=useState('')
  const[isOpen,setIsOpen]=useState(false)
  const[loading,SetLoading]=useState(false)



 const extractKeywords=async(text)=>{
  SetLoading(true)
  setIsOpen(true)
  const options={
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${import.meta.env.VITE_OPENAI_KEY}`
    },
    body:JSON.stringify({
      model:'text-davinci-003',
      prompt:'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:'+text+'',
      temperature:0.5,
      max_tokens:60,
      frequency_penalty:0.8,
    })
    
  }

  try{
    const res=await fetch(import.meta.env.VITE_OPENAI_URL,options);
    const json=await res.json()
    const data=json.choices[0].text.trim()
    console.log(data)
    setKeyword(data)
    SetLoading(false)

  }
  catch(error){
    console.log(error)
  }

 }

 const closeModal=()=>{
  setIsOpen(false)
 }
  return (
    <Box bg='#8080ff' color='white' height='100vh' paddingTop='120'>
     <Container maxW="3xl" centerContent>
  
     <Header/>
     <TextInput extractKeywords={extractKeywords}/>
     <Footer/>
     </Container>
     <KeyModal keyword={keyword} loading={loading} isOpen={isOpen} closeModal={closeModal}/>
    </Box>
  )
}

export default App

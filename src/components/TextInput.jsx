import { useState } from "react"
import { Textarea,Button,useToast } from "@chakra-ui/react"

const TextInput = ({extractKeywords}) => {
    const[text,setText]=useState('')
    const Toast=useToast();
    const submitText=()=>{
        if(text===''){
            Toast({
                title:'Text field is empty',
                description:'Please enter',
                status:'error',
                duration: 5000,
                isClosable:false,
            })
        }
        else{
           extractKeywords(text)
        }

    }
  return (
    <>
    <Textarea
    bg='#e6e6fd'
    color='black'
    padding={4}

    marginTop={6}
    height={200}
    value={text}
    onChange={e=>setText(e.target.value)}
    />
    <Button
    bg='#bfbff9'
    color="white"
    marginTop={4}
    width='100%'
    _hover={{bg: '#e6e6fd'}}
    onClick={submitText}>
        EXTRACT KEYWORDS
        
    </Button>
    </>
  )
}

export default TextInput
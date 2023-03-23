import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    Text,
    Button,


} from "@chakra-ui/react"

const KeyModal = ({keyword,loading,isOpen,closeModal}) => {
   return(
    <>
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Keywords Generated!</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' alignItems='center' justifyContent='center'>
          {loading ? (
            <CircularProgress isIndeterminate color='#bfbff9' />
          ) : (
            <Text>{keyword}</Text>
          )}
        </ModalBody>

        
      </ModalContent>
    </Modal>
  </>
   )
}

export default KeyModal
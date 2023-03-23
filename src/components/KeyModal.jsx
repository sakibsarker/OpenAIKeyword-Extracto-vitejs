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
            <CircularProgress isIndeterminate color='blue.300' />
          ) : (
            <Text>{keyword}</Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
   )
}

export default KeyModal
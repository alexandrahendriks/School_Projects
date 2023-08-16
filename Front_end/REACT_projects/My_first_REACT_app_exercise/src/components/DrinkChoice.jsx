import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Image,
  Center,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Button } from "./UI/button";

export const DrinkChoice = ({ drink, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center flexDir={"column"} gap={4}>
        <Heading>Your choice is: {drink.name}</Heading>
        <Image src={drink.imgUrl} alt={drink.alt} width={100} height={100} />
        <Text>Your drink will be ready in a few minutes!</Text>
        <Flex mt={4}>
          <Button text="Confirm your order" onClick={onOpen} mr={4}>
            Confirm your order
          </Button>
          <Button
            text="Change selection"
            onClick={() => onClick()}
            variant="ghost"
          >
            Change selection
          </Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} size={["full", "md"]}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm your order please!</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              height={["full", "fit-content"]}
              display="flex"
              justifyContent="center"
              alignItems={["center", "flex-start"]}
              flexDir="column"
            >
              <Text>1x {drink.name}</Text>
            </ModalBody>
            <ModalFooter>
              <Button text="Confirm" colorScheme="teal" mr={10} />
              <Button
                text="Cancle and close"
                variant="ghost"
                onClick={onClose}
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

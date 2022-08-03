import React from "react";
import {
  Button,
  chakra,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";

type CreateInvoiceProps = {
  children: React.ReactElement;
};
export const CreateInvoice = ({ children }: CreateInvoiceProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => onOpen(),
      })}

      <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent my={6} rounded="20px" overflow="hidden" maxW="container.lg">
          <ModalHeader px={4} py={2}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <IconButton
                position="absolute"
                aria-label="close-invoice"
                size="sm"
                icon={<Icon boxSize="24px" as={IoMdCloseCircle} />}
                p={0}
                rounded="full"
                left="4"
                top="2"
                onClick={() => onClose()}
              />

              <Text color="rgb(0 0 0 / 75%)">New Invoice</Text>
            </Stack>
          </ModalHeader>

          <ModalBody p={0} bgColor="#FCFCFC">
            <Container py={8}>
              <Text fontWeight="500">Design Studio by Roosevelt.</Text>

              <Stack spacing={6} my={6}>
                <Stack>
                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Invoice to
                    </FormLabel>

                    <Select fontSize="sm" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>

                    <FormHelperText px={2} fontSize="xs" fontWeight="400" color="gray.700">
                      Choose an existing client or create a new one
                    </FormHelperText>
                  </FormControl>
                </Stack>

                <Stack direction="row" spacing={8} justifyContent="space-between">
                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Client address
                    </FormLabel>

                    <Input fontSize="sm" placeholder="3a Samson Street, California" />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Client country
                    </FormLabel>

                    <Select fontSize="sm" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </Stack>

                <Stack direction="row" spacing={8} justifyContent="space-between">
                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Issue date
                    </FormLabel>

                    <Select fontSize="sm" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Due date
                    </FormLabel>

                    <Select fontSize="sm" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={4}>
                <Text fontSize="sm" fontWeight="400">
                  Service
                </Text>
                <Divider borderColor="rgb(0 0 0 / 26%)" />
              </Stack>

              <Stack spacing={6} my={6}>
                <Stack>
                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Service title
                    </FormLabel>

                    <Input fontSize="sm" placeholder="Design Services" />
                  </FormControl>
                </Stack>

                <Stack direction="row" spacing={8} justifyContent="space-between" alignItems="stretch">
                  <Stack w="full" spacing={6}>
                    <FormControl>
                      <FormLabel fontSize="sm" fontWeight="400">
                        Service 1
                      </FormLabel>

                      <Input fontSize="sm" placeholder="Landing page" />
                    </FormControl>

                    <FormControl>
                      <FormLabel fontSize="sm" fontWeight="400">
                        Cost
                      </FormLabel>

                      <Input fontSize="sm" placeholder="0" type="number" />
                    </FormControl>
                  </Stack>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Due date
                    </FormLabel>

                    <Textarea fontSize="sm" height="full" placeholder="Optional" />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={4}>
                <Text fontSize="sm" whiteSpace="nowrap" fontWeight="400">
                  Total Cost: $0
                </Text>
                <Divider borderColor="rgb(0 0 0 / 26%)" />
              </Stack>

              <Button my={6} fontWeight="500" fontSize="sm" leftIcon={<Icon as={FiPlus} />} rounded="xl">
                Add Service
              </Button>

              <Stack my={2}>
                <FormControl>
                  <FormLabel fontSize="sm" fontWeight="400">
                    Crypto payout address
                  </FormLabel>

                  <Input fontSize="sm" placeholder="0x2840...159a" />

                  <FormHelperText px={2} fontSize="xs" fontWeight="400" color="gray.700">
                    Leave blank if you choose to use your account address
                  </FormHelperText>
                </FormControl>
              </Stack>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateInvoice;

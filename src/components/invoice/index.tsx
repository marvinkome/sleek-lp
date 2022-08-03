import React from "react";
import {
  Button,
  chakra,
  Container,
  Heading,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdCloseCircle } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";

type InvoiceModalProps = {
  children: React.ReactElement;
};
const InvoiceModal = ({ children }: InvoiceModalProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const statusColor = { pending: "#F4B731", received: "#2ED573" };

  return (
    <>
      {React.cloneElement(children, {
        onClick: () => onOpen(),
      })}

      <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent my={8} rounded="20px" maxW="container.lg">
          <ModalHeader px={4} py={2}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <IconButton
                aria-label="close-invoice"
                size="sm"
                icon={<Icon boxSize="24px" as={IoMdCloseCircle} />}
                p={0}
                rounded="full"
                onClick={() => onClose()}
              />

              <Stack direction="row" alignItems="center" spacing={2} bgColor="gray.100" px={2} py={1} rounded="24px">
                <chakra.div boxSize="8px" rounded="full" bgColor={statusColor.pending} />
                <Text fontSize="sm" fontWeight="500">
                  Pending
                </Text>
              </Stack>
            </Stack>
          </ModalHeader>

          <ModalBody p={0}>
            <Stack direction="row" bgColor="#000" px={20} py={8}>
              <chakra.div flexGrow={0} flexBasis="25%" mr="auto !important">
                <Heading color="white" fontWeight="500" fontSize="3xl" mb={6}>
                  Design studio by Roosevelt.
                </Heading>

                <chakra.div fontSize="2xl" fontWeight="500">
                  <Text lineHeight="1.2" color="white">
                    Invoice
                  </Text>
                  <Text fontSize="3xl" color="rgb(255 255 255 / 58%)">
                    102
                  </Text>
                </chakra.div>
              </chakra.div>

              <Stack flexGrow={0} flexBasis="25%" spacing={4}>
                <chakra.div fontWeight="500">
                  <Text color="white">Issued</Text>
                  <Text color="rgb(255 255 255 / 58%)">01 Jul, 2022</Text>
                </chakra.div>

                <chakra.div fontWeight="500">
                  <Text color="white">From</Text>

                  <Text color="rgb(255 255 255 / 58%)">
                    Roosevelt Innocent <br />
                    20 Central park, California <br />
                    USA
                  </Text>
                </chakra.div>
              </Stack>

              <Stack flexGrow={0} flexBasis="25%" spacing={4}>
                <chakra.div fontWeight="500">
                  <Text color="white">Due</Text>
                  <Text color="rgb(255 255 255 / 58%)">30 Jul, 2022</Text>
                </chakra.div>

                <chakra.div fontWeight="500">
                  <Text color="white">To</Text>

                  <Text color="rgb(255 255 255 / 58%)">
                    Binural App <br />
                    1a Harmony Way, Calgary <br />
                    Canada.
                  </Text>
                </chakra.div>
              </Stack>
            </Stack>

            <chakra.section px={20} py={6} fontWeight="500">
              <Stack py={4} direction="row" justifyContent="space-between" borderBottom="1px dashed rgb(0 0 0 / 15%)">
                <Text>Services</Text>
                <Text>Total</Text>
              </Stack>

              <Stack spacing={6} py={4}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Text>Landing Pages</Text>
                    <Text fontSize="sm" color="rgb(0 0 0 / 70%)">
                      Description
                    </Text>
                  </Stack>
                  <Text>$800</Text>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Text>Dashboards</Text>
                    <Text fontSize="sm" color="rgb(0 0 0 / 70%)">
                      Description
                    </Text>
                  </Stack>
                  <Text>$1,000</Text>
                </Stack>

                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Text>Brand Assets</Text>
                    <Text fontSize="sm" color="rgb(0 0 0 / 70%)">
                      Description
                    </Text>
                  </Stack>
                  <Text>$3,000</Text>
                </Stack>

                <Stack direction="row" justifyContent="space-between" pt={4} borderTop="1px dashed rgb(0 0 0 / 15%)">
                  <Text>Total</Text>
                  <Text>$4,800</Text>
                </Stack>
              </Stack>

              <Stack py={2} spacing={4}>
                <Text fontSize="sm">Note</Text>

                <Text width="50%" fontSize="sm" fontWeight="400" color="rgb(0 0 0 / 75%)">
                  Hi Meg, here&apos;s the invoice for the complete payment of the website and brand design. The added $100 covers any
                  additional cost for reviews and value tax. You can go ahead and wire the transfer and let me know if there are any issues.
                  Thank you.
                </Text>

                <chakra.div>
                  <Button
                    colorScheme="green"
                    rounded="24px"
                    variant="ghost"
                    leftIcon={<Icon as={FiLink2} />}
                    bgColor="green.50"
                    fontWeight="500"
                    fontSize="sm"
                    border="1px solid transparent"
                    _hover={{ borderColor: "green.600" }}
                  >
                    Copy Invoice link
                  </Button>
                </chakra.div>
              </Stack>
            </chakra.section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InvoiceModal;

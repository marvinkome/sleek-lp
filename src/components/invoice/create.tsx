import React from "react";
import DatePicker from "components/datepicker";
import {
  Button,
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

  const [client, setClient] = React.useState<string>();
  const [clientDetails, setClientDetails] = React.useState({
    name: "",
    address: "",
  });
  const [formData, setFormData] = React.useState<any>({
    issueDate: null,
    dueDate: null,
    payoutAddress: "",
  });

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
                p={0}
                top="2"
                left="4"
                size="sm"
                rounded="full"
                position="absolute"
                onClick={() => onClose()}
                bgColor="rgb(0 0 0 / 8%)"
                aria-label="close-invoice"
                _hover={{ bgColor: "rgb(0 0 0 / 12%)" }}
                icon={<Icon boxSize="24px" as={IoMdCloseCircle} />}
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

                    <Select fontSize="sm" placeholder="Select client" value={client} onChange={(e) => setClient(e.target.value)}>
                      <option value="create">Create new client</option>
                    </Select>

                    <FormHelperText px={2} fontSize="xs" fontWeight="400" color="gray.700">
                      Choose an existing client or create a new one
                    </FormHelperText>
                  </FormControl>
                </Stack>

                {client === "create" && (
                  <Stack direction="row" spacing={8} justifyContent="space-between">
                    <FormControl>
                      <FormLabel htmlFor="name" fontSize="sm" fontWeight="400">
                        Client name
                      </FormLabel>

                      <Input
                        id="name"
                        fontSize="sm"
                        placeholder="Softcom Inc."
                        value={clientDetails.name}
                        onChange={(e) => {
                          setClientDetails({ ...clientDetails, name: e.target.value });
                        }}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="address" fontSize="sm" fontWeight="400">
                        Client address
                      </FormLabel>

                      <Input
                        id="address"
                        fontSize="sm"
                        placeholder="3a Samson Street, California"
                        value={clientDetails.address}
                        onChange={(e) => {
                          setClientDetails({ ...clientDetails, address: e.target.value });
                        }}
                      />
                    </FormControl>
                  </Stack>
                )}

                <Stack direction="row" spacing={8} justifyContent="space-between">
                  <FormControl>
                    <FormLabel htmlFor="issue-date" fontSize="sm" fontWeight="400">
                      Issue date
                    </FormLabel>

                    <DatePicker value={formData.issueDate} onChange={(date) => setFormData({ ...formData, issueDate: date })}>
                      <Input id="issue-date" fontSize="sm" placeholder="Select issue date" />
                    </DatePicker>
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="due-date" fontSize="sm" fontWeight="400">
                      Due date
                    </FormLabel>

                    <DatePicker value={formData.dueDate} onChange={(date) => setFormData({ ...formData, dueDate: date })}>
                      <Input id="due-date" fontSize="sm" placeholder="Select due date" />
                    </DatePicker>
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

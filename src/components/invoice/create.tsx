import React from "react";
import DatePicker from "components/datepicker";
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
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
  StackDivider,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";

const isPresent = (value: any) => {
  return value !== null && value !== undefined && typeof value === "string" && value.trim().length > 0;
};

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
    services: [
      {
        title: "",
        cost: 0,
        description: "",
      },
    ],
  });

  const [dateErrors, setDateErrors] = React.useState<any[]>([]);
  const dateValidator: any = {
    issueDate: isPresent,
    dueDate: isPresent,
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // validate date
    setDateErrors([]);
    const dateFieldsWithError = Object.keys(dateValidator).filter((field) => {
      const validator = dateValidator[field];
      return !validator(formData[field]);
    });
    if (dateFieldsWithError.length) {
      setDateErrors(dateFieldsWithError);
      return;
    }

    // submit form
  };

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
            <Container py={8} as="form" onSubmit={onSubmitForm}>
              <Text fontWeight="500">Design Studio by Roosevelt.</Text>

              <Stack spacing={6} my={6}>
                <Stack>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="400">
                      Service title
                    </FormLabel>

                    <Input fontSize="sm" placeholder="Design Services" />
                  </FormControl>
                </Stack>

                <Stack>
                  <FormControl isRequired>
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
                    <FormControl isRequired>
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

                    <FormControl isRequired>
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
                  <FormControl isInvalid={dateErrors.includes("issueDate")}>
                    <FormLabel htmlFor="issue-date" fontSize="sm" fontWeight="400">
                      Issue date
                    </FormLabel>

                    <DatePicker value={formData.issueDate} onChange={(date) => setFormData({ ...formData, issueDate: date })}>
                      <Input id="issue-date" fontSize="sm" placeholder="Select issue date" />
                    </DatePicker>

                    <FormErrorMessage fontSize="xs">Issue date is required</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={dateErrors.includes("dueDate")}>
                    <FormLabel htmlFor="due-date" fontSize="sm" fontWeight="400">
                      Due date
                    </FormLabel>

                    <DatePicker value={formData.dueDate} onChange={(date) => setFormData({ ...formData, dueDate: date })}>
                      <Input id="due-date" fontSize="sm" placeholder="Select due date" />
                    </DatePicker>

                    <FormErrorMessage fontSize="xs">Due date is required</FormErrorMessage>
                  </FormControl>
                </Stack>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={4}>
                <Text fontSize="sm" fontWeight="400">
                  Service
                </Text>
                <Divider borderColor="rgb(0 0 0 / 26%)" />
              </Stack>

              <Stack spacing={6} my={6} divider={<StackDivider borderColor="rgb(0 0 0 / 16%)" />}>
                {formData.services.map((service: any, idx: any) => (
                  <Stack key={idx} direction="row" spacing={8} justifyContent="space-between" alignItems="stretch">
                    <Stack w="full" spacing={6}>
                      <FormControl isRequired>
                        <FormLabel fontSize="sm" fontWeight="400">
                          Service
                        </FormLabel>

                        <Input
                          fontSize="sm"
                          placeholder="Landing page"
                          value={service.title}
                          onChange={(e) => {
                            const services = formData.services;
                            services[idx].title = e.target.value;

                            setFormData({ ...formData, services });
                          }}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="sm" fontWeight="400">
                          Cost
                        </FormLabel>

                        <Input
                          fontSize="sm"
                          placeholder="0"
                          type="number"
                          value={service.cost}
                          onChange={(e) => {
                            const services = formData.services;
                            services[idx].cost = e.target.value;

                            setFormData({ ...formData, services });
                          }}
                        />
                      </FormControl>
                    </Stack>

                    <FormControl>
                      <FormLabel fontSize="sm" fontWeight="400">
                        Description
                      </FormLabel>

                      <Textarea
                        fontSize="sm"
                        height="full"
                        placeholder="Optional"
                        value={service.description}
                        onChange={(e) => {
                          const services = formData.services;
                          services[idx].description = e.target.value;

                          setFormData({ ...formData, services });
                        }}
                      />
                    </FormControl>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="outline"
                fontWeight="500"
                size="sm"
                fontSize="sm"
                leftIcon={<Icon as={FiPlus} />}
                rounded="xl"
                onClick={() =>
                  setFormData({
                    ...formData,
                    services: formData.services.concat({ title: "", cost: 0, description: "" }),
                  })
                }
              >
                Add Service
              </Button>

              <Stack my={6} direction="row" alignItems="center" spacing={4}>
                <Text fontSize="sm" whiteSpace="nowrap" fontWeight="400">
                  Total Cost: ${formData.services.reduce((total: number, service: any) => Number(total) + Number(service.cost), 0) || 0}
                </Text>
                <Divider borderColor="rgb(0 0 0 / 26%)" />
              </Stack>

              <Stack my={2}>
                <FormControl>
                  <FormLabel fontSize="sm" fontWeight="400">
                    Crypto payout address
                  </FormLabel>

                  <Input
                    fontSize="sm"
                    placeholder="0x2840...159a"
                    value={formData.payoutAddress}
                    onChange={(e) => setFormData({ ...formData, payoutAddress: e.target.value })}
                  />

                  <FormHelperText px={2} fontSize="xs" fontWeight="400" color="gray.700">
                    Leave blank if you choose to use your account address
                  </FormHelperText>
                </FormControl>
              </Stack>

              <Button
                my={4}
                fontWeight="500"
                size="lg"
                fontSize="sm"
                rounded="xl"
                bgColor="black"
                color="#fff"
                _hover={{ bgColor: "blackAlpha.800" }}
                _active={{ bgColor: "blackAlpha.700" }}
                leftIcon={<TbFileInvoice />}
                type="submit"
              >
                Create Invoice
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateInvoice;

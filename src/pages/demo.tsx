import { Container, Heading, Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import Layout from "components/layout";
import Script from "next/script";

declare global {
  var SleekPay: any | undefined;
}

const payModal = ({ amount, receiver }: { amount: string; receiver: string }) => {
  return new Promise<any>((resolve, reject) => {
    if (!global.SleekPay) {
      reject(new Error("Payment module not loaded"));
    }

    global.SleekPay({
      amount,
      recipientAddress: receiver,
      onSuccess: (data: any) => {
        resolve(data);
      },
      onError: (e: any) => {
        reject(e);
      },
    });
  });
};

const Demo: NextPage = () => {
  const [formState, setFormState] = React.useState({
    address: "",
    amount: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const [payment, setPayment] = React.useState<any>();
  const [payout, setPayout] = React.useState<any>();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const data = await payModal({ amount: formState.amount, receiver: formState.address });

      setPayment(data);
      console.log({ paymentResp: data });

      // send withdraw request to the api
      const resp = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chainId: data.chainId,
          transactionHash: data.tx?.hash,
          amount: formState.amount,
          recipientAddress: formState.address,
        }),
      });

      if (!resp.ok) {
        const errorPayload = await resp.json();
        throw new Error(errorPayload?.message || "Unexpected Error");
      }

      const payload = await resp.json();
      console.log({ payoutResp: payload });

      setPayout(payload);
      setFormState({ address: "", amount: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      ContainerProps={{
        minH: "100vh",
        bgImage: "url(/neon.png)",
        bgRepeat: "no-repeat",
        bgSize: { base: "cover", md: "cover" },
        bgPosition: "center center",
        d: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container maxW="container.lg" pt={{ base: "calc(90px + 5rem)", md: "calc(90px + 5rem)" }} pb={{ base: 4, md: "7rem" }}>
        <Stack
          bgColor="#fff"
          boxShadow="0px 58px 67px rgba(0, 0, 0, 0.09)"
          borderRadius="10px"
          py={{ base: "8", md: "20" }}
          px={{ base: "2", md: "12" }}
          spacing={16}
        >
          <Stack align="center" px={{ base: "4", md: "10rem" }} spacing={{ base: "2", md: "4" }}>
            <Heading
              textAlign="center"
              fontSize={{ base: "2rem", md: "3rem" }}
              fontWeight="600"
              color="#0F0F0F"
              lineHeight={{ base: "3rem", md: "4.25rem" }}
            >
              Sleek Demo
            </Heading>
            <Text textAlign="center" fontSize="sm">
              Start by entering a wallet address the payable amount will go to, sleek works across web and mobile devices.
            </Text>

            <Text textAlign="center" color="green.600" fontSize="sm">
              This is a real transaction and your account will be charged, choose a small amount to transfer.
            </Text>
          </Stack>

          <Stack as="form" onSubmit={onSubmit} spacing={{ base: "8", md: "12" }} px={{ base: "1rem", md: "12rem" }}>
            <FormControl id="address">
              <FormLabel htmlFor="address">Receiver Wallet Address</FormLabel>
              <Input
                type="text"
                placeholder="0x2840...159a"
                variant="flushed"
                onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                isRequired
              />
              <FormErrorMessage>Address is required</FormErrorMessage>
            </FormControl>

            <FormControl id="amount">
              <FormLabel htmlFor="amount">Amount to transfer ($)</FormLabel>
              <Input
                type="number"
                placeholder="0"
                min="0"
                step="0.01"
                variant="flushed"
                onChange={(e) => setFormState({ ...formState, amount: e.target.value })}
                isRequired
              />
              <FormErrorMessage>Amount is required</FormErrorMessage>
            </FormControl>

            <Button
              isLoading={loading}
              isDisabled={parseInt(formState.amount || "0", 10) <= 0}
              type="submit"
              variant="primary"
              bgColor="#3742FA"
              px="12"
              py="6"
            >
              Pay {formState.amount ? `$${formState.amount}` : ""}
            </Button>

            <Stack>
              {error && (
                <Text textAlign="center" color="#FF6348" fontSize="sm">
                  {error}
                </Text>
              )}

              {payment && (
                <Link href={payment?.receipt} isExternal textAlign="center" fontSize="sm">
                  Payment Receipt: {payment?.receipt ? `${payment?.receipt}` : ""}
                </Link>
              )}

              {payout && (
                <Text textAlign="center" fontSize="sm">
                  Payout Transaction: {payout?.transactionHash ? `${payout?.transactionHash}` : ""}
                </Text>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* load sleekPay script */}
      <Script src="https://cdn.jsdelivr.net/gh/marvinkome/sleek-checkout@main/dist/sleek.min.js" />
    </Layout>
  );
};

export default Demo;

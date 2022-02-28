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
          px={{ base: "1rem", md: "12" }}
          bgColor="rgba(255, 255, 255, 0.9)"
          backdropFilter="blur(24px)"
          boxShadow="0px 58px 67px rgba(0, 0, 0, 0.09)"
          borderRadius="10px"
          py={{ base: "6", md: "20" }}
          spacing={{ base: "10", md: "16" }}
        >
          <Stack align="center" px={{ base: "4", md: "12rem" }} spacing={{ base: "2", md: "4" }}>
            <Heading textAlign="center" fontSize={{ base: "2rem", md: "3rem" }} fontWeight="600" color="#0F0F0F" lineHeight="auto">
              Sleek Demo
            </Heading>
            <Text textAlign="center" w={{ base: "100%", md: "624px" }} fontSize={{ base: "sm", md: "md" }} opacity="0.87" color="#2F3542">
              Start by entering a wallet address the payable amount will go to, sleek works across web and mobile devices.
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

            <Text textAlign="center" color="#FF6348" fontSize={{ base: "0.825rem", md: "1rem" }}>
              This is a real transaction and your account will be charged, choose a small amount to transfer.
            </Text>

            <Stack>
              {error && (
                <Text textAlign="center" fontWeight="600" color="#FF6348" fontSize="sm">
                  {error}
                </Text>
              )}

              {payment && (
                <Link href={payment?.receipt} fontWeight="600" isExternal textAlign="center" fontSize="sm">
                  Payment Receipt: {payment?.receipt ? `${payment?.receipt}` : ""}
                </Link>
              )}

              {payout && (
                <Text textAlign="center" fontWeight="600" fontSize="sm">
                  Payout Transaction: {payout?.transactionHash ? `${payout?.transactionHash}` : ""}
                </Text>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* load sleekPay script */}
      {/* TODO: using tagged version, use main once cache expires (in 7 days) */}
      <Script src="https://cdn.jsdelivr.net/gh/marvinkome/sleek-checkout@0.1.1/dist/sleek.min.js" />
    </Layout>
  );
};

export default Demo;

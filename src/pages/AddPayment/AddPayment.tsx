import {
  Box,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  useTheme,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { Header } from "../../atomic/molecules/Header";

import { InputPayment } from "../../atomic/atoms/InputPayment";
import { InputCustomPayment } from "../../atomic/atoms/InputCustomPayment";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { SwipeableCard } from "../../atomic/organism/SwipeableCard";

export function AddPayment() {
  const [nameCard, setNameCard] = useState("");
  const [validate, setValidate] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [CVV, setCVV] = useState("");
  const { colors } = useTheme();
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Box px={"20px"} flex={1} bg={"primary.100"}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraScrollHeight={112}
      >
        <Box>
          <Header
            inverted
            type="goBack"
            text="Pagamento"
            handlePress={goBack}
          />
        </Box>

        <Box mt={8} borderRadius={"lg"}>
          <LinearGradient
            colors={[
              colors.purple[100],
              colors.ocean[50],
              colors.ocean[200],
              colors.ocean[100],
            ]}
            start={{ x: 0, y: -0.5 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              height: 196,
              borderRadius: 10,
              padding: 12,
            }}
          >
            <Box w={"100%"} h={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Text color={"white"} fontSize={"md"}>
                  {nameCard}
                </Text>
              </HStack>
              <HStack>
                <Text color={"white"} fontSize={"md"}>
                  {validate}
                </Text>
              </HStack>
              <HStack>
                <Text color={"white"} fontSize={"md"}>
                  {numberCard}
                </Text>
                <Text ml={"50px"} color={"white"} fontSize={"md"}>
                  {CVV}
                </Text>
              </HStack>
            </Box>
          </LinearGradient>
        </Box>
        <Box pb={4}>
          <HStack
            space={2}
            width={"100%"}
            mt={12}
            justifyContent={"space-between"}
          >
            <Box w={"62%"}>
              <InputPayment
                title="Nome no Cartão"
                value={nameCard}
                onChangeText={(value) => setNameCard(value)}
              />
            </Box>
            <Box w={"35%"}>
              <InputCustomPayment
                type={"custom"}
                options={{
                  mask: "99/99",
                }}
                keyboardType="numeric"
                title="Validade"
                value={validate}
                onChangeText={(value) => setValidate(value)}
              />
            </Box>
          </HStack>
          <HStack
            space={2}
            width={"100%"}
            mt={6}
            justifyContent={"space-between"}
          >
            <Box w={"62%"}>
              <InputCustomPayment
                type={"custom"}
                options={{
                  mask: "9999 9999 9999 S9999",
                }}
                keyboardType="numeric"
                title="Número do Cartão"
                value={numberCard}
                onChangeText={(value) => setNumberCard(value)}
              />
            </Box>
            <Box w={"35%"}>
              <InputCustomPayment
                type={"custom"}
                options={{
                  mask: "999",
                }}
                keyboardType="numeric"
                title="Validade"
                value={CVV}
                onChangeText={(value) => setCVV(value)}
              />
            </Box>
          </HStack>

          <Center mt={8}>
            <SwipeableCard
              handleSwipeable={() => alert("pagamento efetuado")}
              text="Confirmar Pagamento"
              width="240px"
            />
          </Center>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
}

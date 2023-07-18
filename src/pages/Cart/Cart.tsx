import {
  Box,
  Button,
  Center,
  Icon,
  ScrollView,
  Text,
  useTheme,
} from "native-base";
import React, { useEffect } from "react";
import { Header } from "../../atomic/molecules/Header";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { CartItem } from "../../atomic/atoms/CartItem";
import { SectionFooterCart } from "../../atomic/molecules/SectionFooterCard";
import { SwipeableButton } from "../../atomic/molecules/SwipeableButton";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useCart } from "../../context/useCart";
import { useNavigation } from "@react-navigation/native";
import { SwipeableCard } from "../../atomic/organism/SwipeableCard";

export function Cart() {
  const { goBack, navigate } = useNavigation<AppNavigatorRoutesProps>();
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { items, handleTabBarIsVisble } = useCart();

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      handleTabBarIsVisble(false);
    });
    return focused;
  }, []);

  function handleAddPayment() {
    navigation.navigate("AddPayment");
  }

  return (
    <Box flex={1} pl={"20px"} pr={"20px"} justifyContent={"space-between"}>
      <Box h={"70%"}>
        <Box>
          <Header
            text="Meu Carrinho"
            inverted
            type="goBack"
            handlePress={goBack}
          />
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          {items.map((item, index) => {
            return (
              <CartItem
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            );
          })}
        </ScrollView>
      </Box>

      <Box mb={"30px"}>
        <SectionFooterCart title="Subtotal" value="200" />
        <SectionFooterCart title="Delivery Fee" value="0" />
        <SectionFooterCart title="Total" value="200" />
        <Center mt={5}>
          <SwipeableCard
            handleSwipeable={handleAddPayment}
            text="Checkout"
            width="140px"
          />
        </Center>
      </Box>
    </Box>
  );
}

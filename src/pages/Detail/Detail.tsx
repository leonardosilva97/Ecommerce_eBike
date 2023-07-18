import { Box, Button, Center, HStack, Image, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { CardProps } from "../Home/Home";
import rectangle from "../../assets/img/rectangle.png";
import { ImagePreview } from "../../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../../atomic/atoms/ButtonDetail";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Header } from "../../atomic/molecules/Header";
import { useCart } from "../../context/useCart";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useNavigation } from "@react-navigation/native";

type RouteProps = {
  equipmentID: string;
};

export function Detail() {
  const route = useRoute();

  const { equipmentID } = route.params as RouteProps;

  const [equipment, setEquipment] = useState<CardProps>({} as CardProps);
  const [toggleDescription, setToggleDescription] = useState(true);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { handleTabBarIsVisble } = useCart();

  const cardOffset = useSharedValue(460);

  useEffect(() => {
    async function getEquipmentsById() {
      try {
        const { data } = await api
          .get(`equipments/${equipmentID}`)
          .catch((error) => console.log("erro try catch", error));

        setEquipment(data);
      } catch (error) {
        console.log(error);
      }
    }

    getEquipmentsById();
  }, []);

  function handleToggleDescription() {
    setToggleDescription((oldValue) => !oldValue);
  }

  function handleAnimatedToggle() {
    handleToggleDescription();

    if (toggleDescription) {
      cardOffset.value = withTiming(1, {
        duration: 800,
      });
    } else {
      cardOffset.value = withTiming(460, {
        duration: 800,
      });
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: cardOffset.value,
        },
      ],
    };
  });

  function handleGoBack() {
    if (toggleDescription) {
      navigation.goBack();
      return;
    }

    handleAnimatedToggle();
  }

  function handleAddToCart() {
    navigation.navigate("Cart");
  }

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      handleTabBarIsVisble(false);
    });
    return focused;
  }, []);

  return (
    <>
      <Box pl={"20px"} pr={"20px"}>
        <Header
          text={equipment.title}
          inverted={true}
          type={toggleDescription ? "goBack" : "down"}
          handlePress={handleGoBack}
        />
      </Box>
      <Box
        safeArea
        flex={1}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          source={rectangle}
          alt="image detail"
          position={"absolute"}
          top={"-50"}
          right={"0"}
          bottom={"0"}
        />
        <ImagePreview
          showDescription={toggleDescription}
          image={equipment.image}
          alt={equipment.title}
        />
      </Box>
      {toggleDescription ? (
        <Box
          bg={"primary.100"}
          justifyContent={"center"}
          p="7"
          borderTopRadius={30}
          shadow={5}
          h={"110px"}
        >
          <HStack width={"100%"} justifyContent={"space-between"}>
            <ButtonDetail title="Descrição" onPress={handleAnimatedToggle} />
            <ButtonDetail title="Especificação" />
          </HStack>
        </Box>
      ) : (
        <Animated.View style={animatedStyle}>
          <Box bg="primary.100" borderTopRadius={30} shadow={5} h={"460px"}>
            <Box pl="7" pr="7" pt="7">
              <HStack width={"100%"} justifyContent={"space-between"}>
                <ButtonDetail
                  title="Descrição"
                  onPress={handleAnimatedToggle}
                />
                <ButtonDetail title="Especificação" />
              </HStack>
              <Box mt="30">
                <Text bold color={"white"} fontSize={17}>
                  {equipment.title}
                </Text>
                <Text color={"white"} opacity={0.6} mt="8">
                  The LR01 uses the same design as the most iconic bikes from
                  PEUGEOT Cycles' 130-year history and combines it with agile,
                  dynamic performance that's perfectly suited to navigating
                  today's cities. As well as a lugged steel frame and iconic
                  PEUGEOT black-and-white chequer design, this city bike also
                  features a 16-speed Shimano Claris drivetrain. I
                </Text>
              </Box>
            </Box>
            <HStack
              bg="primary.200"
              borderRadius={30}
              justifyContent={"space-between"}
              shadow={5}
              h={100}
              w={"100%"}
              mt={30}
              alignItems={"center"}
              p={7}
            >
              <Text bold color={"ocean.200"} fontSize={"17"}>
                {equipment.price}
              </Text>
              <Button
                w={149}
                h={43}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"10px"}
                shadow={5}
                bg="ocean.200"
                _pressed={{
                  bgColor: "ocean.100",
                }}
                onPress={handleAddToCart}
              >
                Add to Cart
              </Button>
            </HStack>
          </Box>
        </Animated.View>
      )}
    </>
  );
}

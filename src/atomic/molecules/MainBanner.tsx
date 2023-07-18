import React from "react";
import { Box, Image } from "native-base";
import { ImageBackground } from "react-native";
import slider from "../../assets/img/slider.png";
import bike from "../../assets/img/bike.png";

export function MainBanner() {
  return (
    <Box w={"100%"} h="300" mt={"-5"}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="contain"
        source={slider}
      >
        <Image source={bike} alt="bike" />
      </ImageBackground>
    </Box>
  );
}

import { Box, Text, useTheme } from "native-base";
import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";

type Props = {
  title: string;
} & TextInputProps;

export function InputPayment({ title, ...rest }: Props) {
  const { colors } = useTheme();
  const [inputBackGroundColor, setInputBackgroundColor] = useState(
    colors.primary[50]
  );
  const [inputBorderColor, setInputBorderColor] = useState(colors.primary[100]);

  const customOnFocus = () => {
    rest?.onFocus;
    setInputBackgroundColor(colors.ocean[5]);
    setInputBorderColor(colors.ocean[50]);
  };

  const customOnBlur = () => {
    rest?.onBlur;
    setInputBackgroundColor(colors.primary[50]);
    setInputBorderColor(colors.primary[100]);
  };
  return (
    <Box>
      <Text color={"white:alpha.50"} fontSize="sm" mx={3} mb={1}>
        {title}
      </Text>

      <Box width={"100%"} borderRadius="lg" h={"12"} justifyContent="center">
        <TextInput
          style={[
            {
              backgroundColor: inputBackGroundColor,
              borderWidth: 1,
              borderColor: inputBorderColor,
              height: "100%",
              width: "100%",
              paddingLeft: 12,
              color: "white",
              borderRadius: 10,
            },
            rest.style,
          ]}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          {...rest}
        />
      </Box>
    </Box>
  );
}

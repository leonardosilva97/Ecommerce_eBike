import { Box, Center, HStack, Icon, Text, View } from "native-base";
import { Platform, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { useCart } from "../../context/useCart";

export function CustomTabBar({ state, descriptors, navigation }: any) {
  const { tabBarIsVisible } = useCart();

  if (tabBarIsVisible) {
    return (
      <Center>
        <HStack
          mb={Platform.OS === "ios" ? 24 : 24}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          bottom={-80}
          w={"220px"}
          pl={"110px"}
          p={"10px"}
          backgroundColor={"primary.50"}
          borderRadius={20}
          space={4}
          shadow={5}
        >
          {state.routes.map((route: any, index: any) => {
            const { options } = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <View>
                  <Icon
                    as={MaterialIcons}
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? "ocean.50" : "white:alpha.50"}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </HStack>
      </Center>
    );
  } else {
    return <Text display={"none"}></Text>;
  }
}

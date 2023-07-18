import { Box, NativeBaseProvider } from "native-base";
import { THEME } from "./src/Styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { CartProvider } from "./src/context/useCart";

const navigationTheme = DefaultTheme;
navigationTheme.colors.background = THEME.colors.primary[100];

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Box flex={1} bg={THEME.colors.primary[100]}>
        <NavigationContainer theme={navigationTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <CartProvider>
              <AppRoutes />
            </CartProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}

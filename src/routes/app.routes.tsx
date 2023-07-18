import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";

import { Home } from "../pages/Home/Home";
import { Detail } from "../pages/Detail/Detail";
import { Cart } from "../pages/Cart/Cart";
import { Map } from "../pages/Map/Map";
import { Person } from "../pages/Person/Person";
import { CustomTabBar } from "../atomic/atoms/CustomTabBar";
import { AddPayment } from "../pages/AddPayment/AddPayment";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type AppRoutes = {
  Home: undefined;
  Detail: { equipmentID: string };
  Cart: undefined;
  Map: undefined;
  Person: undefined;
  AddPayment: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const Stack = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#37B6E9",
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "home",
        }}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={{
          tabBarIcon: "person",
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: "shopping-cart",
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: "map",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="AddPayment"
        component={AddPayment}
        options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
      />
    </Stack.Navigator>
  );
}

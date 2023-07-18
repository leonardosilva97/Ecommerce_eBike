import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { DetailBackground } from "../../atomic/atoms/DetailBackground";
import { Card } from "../../atomic/molecules/Card";
import api from "../../service/api";
import { FlatList } from "react-native";
import { HomeHeader } from "../../atomic/organism/HomeHeader";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/useCart";

export type CardProps = {
  title: string;
  price: number;
  model: string;
  image: string;
  id: string;
  handleRedirect?: (id: string) => void;
};

export function Home() {
  const [equipments, setEquipments] = useState<CardProps[]>([]);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { handleTabBarIsVisble } = useCart();

  function handleRedirect(id: string) {
    navigation.navigate("Detail", { equipmentID: id });
  }

  useEffect(() => {
    const focused = navigation.addListener("focus", () => {
      handleTabBarIsVisble(true);
    });
    return focused;
  }, []);

  useEffect(() => {
    async function getEquiments() {
      try {
        const { data } = await api
          .get("equipments")
          .catch((error) => console.log(error));

        console.log(data);

        setEquipments(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    getEquiments();
  }, []);

  function footerHome() {
    return <Box w={"100%"} h={20}></Box>;
  }
  return (
    <Box
      flex={1}
      padding={"20px"}
      pb={"-10px"}
      paddingTop={"-10px"}
      position={"relative"}
    >
      <DetailBackground />
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        ListFooterComponent={footerHome}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={equipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item: equipment }) => (
          <Card
            onPress={() => handleRedirect(equipment.id)}
            title={equipment.title}
            image={equipment.image}
            id={equipment.id}
            model={equipment.model}
            price={equipment.price}
          />
        )}
      />
    </Box>
  );
}

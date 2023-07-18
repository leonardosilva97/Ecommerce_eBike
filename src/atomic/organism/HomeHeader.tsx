import React from "react";
import { Header } from "../molecules/Header";
import { MainBanner } from "../molecules/MainBanner";
import { CategoryList } from "./CategoryList";

export function HomeHeader() {
  return (
    <>
      <Header text="Escolha sua Bike" handlePress={() => {}} />
      <MainBanner />
      <CategoryList />
    </>
  );
}

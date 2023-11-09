import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { featured } from "../constants";
import FeatureRow from "../components/featureRow";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="bg-white">
        <StatusBar style="dark" />
        {/* Search bar */}

        <View className="flex-row items-center space-x-2 px-4 py-2">
          <View className="flex-row flex-1 items-center  p-3 rounded-full border border-gray-300">
            <Icon.Search height={"25"} width={"25"} stroke={"gray"} />
            <TextInput placeholder="Restaurants" className="ml-2 flex-1" />

            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height={"20"} width={"20"} stroke={"gray"} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: themeColors.bgColor(1),
            }}
            className="p-3 rounded-full "
          >
            <Icon.Sliders
              width={"20"}
              height={"20"}
              stroke={"white"}
              strokeWidth={"2.5"}
            />
          </View>
        </View>

        {/* main */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          {/* categories */}
          <Categories />

          {/* featured */}

          <View className="mt-5">
            {[featured, featured, featured].map((category, index) => {
              return (
                <FeatureRow
                  key={index}
                  id={category.id}
                  title={category.title}
                  resturants={category?.restaurants}
                  description={category.description}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

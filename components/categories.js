import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      > */}
      <FlatList
        style={{ paddingHorizontal: 15 }}
        horizontal
        data={categories}
        renderItem={({ item }) => {
          let isActive = item.id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View
              key={item.id}
              className="flex items-center justify-center mr-6"
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(item.id)}
                className={"p-1 rounded-full shadow" + btnClass}
              >
                <Image style={{ width: 45, height: 45 }} source={item.image} />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{item.name}</Text>
            </View>
          );
        }}
      />

      {/* {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View key={index} className="flex items-center justify-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={"p-1 rounded-full shadow" + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })} */}
      {/* </ScrollView> */}
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import CustomText from "@/components/CustomText";

const SnackData = [
  {
    id: "1",
    title: "Biscuit",
    price: "10000",
  },
  {
    id: "2",
    title: "Chocolate",
    price: "20000",
  },
  {
    id: "4",
    title: "Karanga",
    price: "5000",
  },
  {
    id: "5",
    title: "Karanga",
    price: "5000",
  },
  {
    id: "6",
    title: "Karanga",
    price: "5000",
  },
  {
    id: "7",
    title: "Karanga",
    price: "5000",
  },
  {
    id: "8",
    title: "Karanga",
    price: "5000",
  },
  {
    id: "9",
    title: "Karanga",
    price: "5000",
  },
];

type ItemProps = { title: string; price: string };

const Item = ({ title, price }: ItemProps) => (
  <View style={styles.item}>
    <CustomText>{title}</CustomText>
    <CustomText>{price}</CustomText>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SnackData}
        renderItem={({ item }) => (
          <Item title={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    backgroundColor: "red",
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
});

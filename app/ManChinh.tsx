import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const type = [
  { name: "All" },
  { name: "Cappuccino" },
  { name: "Espresso" },
  { name: "Americano" },
  { name: "Macchiato" },
];
const coffeeData = [
  {
    id: "1",
    name: "Cappuccino",
    description: "With Steamed Milk",
    price: "$4.20",
    rating: 4.5,
    image: require("../assets/images/cappuccino.jpg"),
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "With Steamed Milk",
    price: "$4.20",
    rating: 4.5,
    image: require("../assets/images/cappuccino.jpg"),
  },
  {
    id: "3",
    name: "Cappuccino",
    description: "With Steamed Milk",
    price: "$4.20",
    rating: 4.5,
    image: require("../assets/images/cappuccino.jpg"),
  },
  {
    id: "4",
    name: "Cappuccino",
    description: "With Steamed Milk",
    price: "$4.20",
    rating: 4.5,
    image: require("../assets/images/cappuccino.jpg"),
  },
  // Các phần tử khác...
];

const beanData = [
  {
    id: "1",
    name: "Robusta Beans",
    description: "Medium Roasted",
    price: "$4.20",
    image: require("../assets/images/anh-hat-caffe.jpg"),
  },
  {
    id: "2",
    name: "Robusta Beans",
    description: "Medium Roasted",
    price: "$4.20",
    image: require("../assets/images/anh-hat-caffe.jpg"),
  },
  {
    id: "3",
    name: "Robusta Beans",
    description: "Medium Roasted",
    price: "$4.20",
    image: require("../assets/images/anh-hat-caffe.jpg"),
  },
  {
    id: "4",
    name: "Robusta Beans",
    description: "Medium Roasted",
    price: "$4.20",
    image: require("../assets/images/anh-hat-caffe.jpg"),
  },
  // Các phần tử khác...
];

const ManChinh = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const typeItem = ({ item }: any) => {
    return (
      <TouchableOpacity>
        <Text style={[styles.title, { paddingLeft: 20, fontSize: 18 }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find the best coffee for you</Text>
        <Ionicons name="person-circle-outline" size={30} color="#fff" />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Find Your Coffee..."
        placeholderTextColor="#aaa"
      />
      <FlatList
        data={type}
        renderItem={typeItem}
        horizontal
        keyExtractor={(item) => item.name}
        style={styles.horizontalList}
      />
      <FlatList
        data={coffeeData}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id}
        style={styles.horizontalList}
      />
      <Text style={styles.sectionTitle}>Coffee beans</Text>
      <FlatList
        data={beanData}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id}
        style={styles.horizontalList}
      />

      {/* Thanh điều hướng ở dưới cùng */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#ff7f50" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="cart-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="heart-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="notifications-outline" size={24} color="#aaa" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  searchInput: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  horizontalList: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    marginRight: 16,
    padding: 10,
    width: 150,
    height: 200,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  description: {
    fontSize: 12,
    color: "#aaa",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#ff7f50",
    borderRadius: 5,
    padding: 5,
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#2a2a2a",
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 2,
  },
});

export default ManChinh;

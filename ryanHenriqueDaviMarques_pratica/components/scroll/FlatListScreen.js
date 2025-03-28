import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FlatListScreen = () => {
  const [data, setData] = useState(Array.from({ length: 80 }, (v, i) => i));

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Item {item + 1}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "#B2FFFF",
  },
  info: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FlatListScreen;

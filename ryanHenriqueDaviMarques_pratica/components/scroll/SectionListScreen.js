import { SectionList, StyleSheet, Text, View } from "react-native";

const SectionListScreen = () => {
  const data = [
    {
      title: "SEÇÃO 1",
      data: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "SEÇÃO 2",
      data: [7, 8, 9, 10, 11, 12],
    },
    {
      title: "SEÇÃO 3",
      data: [12, 13, 14, 15],
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>Item {item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{section.title}</Text>
      </View>
    );
  };

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#A9A9A9",
    padding: 10,
  },
  itemContainer: {
    backgroundColor: "#FFFFF0",
    marginVertical: 5,
    padding: 15,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SectionListScreen;

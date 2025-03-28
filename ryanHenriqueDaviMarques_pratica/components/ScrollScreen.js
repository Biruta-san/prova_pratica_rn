import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FormScreen from "./scroll/FormScreen";
import FlatListScreen from "./scroll/FlatListScreen";
import SectionListScreen from "./scroll/SectionListScreen";

const Tab = createBottomTabNavigator();

const ScrollScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Lista") {
            return <FontAwesome name={"list"} size={size} color={color} />;
          } else if (route.name === "Seção") {
            return (
              <Ionicons name={"bookmarks-outline"} size={size} color={color} />
            );
          } else if (route.name === "Formulário") {
            return <SimpleLineIcons name={"doc"} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Lista" component={FlatListScreen} />
      <Tab.Screen name="Seção" component={SectionListScreen} />
      <Tab.Screen name="Formulário" component={FormScreen} />
    </Tab.Navigator>
  );
};

export default ScrollScreen;

import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "#000000",
            height: 80,
            paddingBottom: 5,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            position: "absolute",
            zIndex: 100,
            borderColor: "#000",
            borderTopColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="home"
                  size={24}
                  color={focused ? "#FFFF" : "#A3ABB2"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="search1"
                  size={24}
                  color={focused ? "#FFFF" : "#A3ABB2"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Plus"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="plussquareo"
                  size={24}
                  color={focused ? "#FFFF" : "#A3ABB2"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Heart"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <AntDesign name="heart" size={24} color="#FFF" />
              ) : (
                <AntDesign name="hearto" size={24} color="#A3ABB2" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? "#FFFF" : "#A3ABB2"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

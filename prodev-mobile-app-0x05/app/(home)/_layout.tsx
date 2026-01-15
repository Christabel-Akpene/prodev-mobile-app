import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "#34967c", headerShown: false}}>
        <Tabs.Screen name="index" options={{
            title: "Home",
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name="search" options={{
            title: "Home",
            tabBarIcon: ({color}) => <Feather name="search" size={24} color={color} />
        }}/>
        <Tabs.Screen name="saved" options={{
            title: "Home",
            tabBarIcon: ({color}) => <EvilIcons name="heart" size={24} color={color} />
        }}/>
        <Tabs.Screen name="inbox" options={{
            title: "Home",
            tabBarIcon: ({color}) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
        }}/>
        <Tabs.Screen name="profile" options={{
            title: "Home",
            tabBarIcon: ({color}) => <FontAwesome name="user-o" size={24} color={color} />
        }}/>

        </Tabs>
    )
}

export default HomeRootLayout;

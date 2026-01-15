import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find your favorite place here
              </Text>
              <Text style={styles.titleSubText}>
                The best prices for over 2{" "}
              </Text>
              <Text style={styles.titleSubText}>
                million properties worldwide
              </Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.buttonPrimary}
                  onPress={() => router.navigate("/join")}
                >
                  <Text style={styles.buttonPrimaryText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonSecondary}
                  onPress={() => router.navigate("/signin")}
                >
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;

import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { Link } from "expo-router";


import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.iconsection}>
            <Link href={"/"}>
              <Ionicons name="arrow-back" size={25} />
            </Link>
            <Image source={HEROLOGOGREEN} />
          </View>
          <Text style={styles.titleText}>Create Your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to create an account.
          </Text>

          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                keyboardType="email-address"
                style={styles.formControl}
              />
            </View>
            <View>
              <Text style={styles.passwordControl}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
            <View>
              <Text style={styles.passwordControl}>Confirm Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={{ flex: 1 }} />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>

          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image source={GOOGLELOGO} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image source={FACEBOOKLOGO} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>
              {" "}
              Already have an account?
            </Text>
            <Link href={"/signin"}>
              <Text style={styles.signupSubTitleText}> Sign In</Text>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

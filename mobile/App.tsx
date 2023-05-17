import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import blur from "./assets/bg-blur.png";
import Logo from "./assets/simple-logo.svg";
import Stripes from "./assets/stripes.svg";
import { styled } from "nativewind";

const StyledStripes = styled(Stripes);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={blur}
      className="relative flex-1 justify-center bg-zinc-900 px-8"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2 float-left" />
      <View className="flex-1 justify-between">
        <View></View>

        <View className="items-center justify-center space-y-6">
          <Logo />

          <View className="space-y-2">
            <Text className="text-center font-Roboto-Bold text-2xl leading-tight text-gray-50">
              Sua cápsula do tempo
            </Text>
            <Text className="text-center font-Roboto-Regular leading-relaxed text-zinc-100">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-full bg-green-400 px-5 py-2"
          >
            <Text className="font-Jamjuree text-sm text-black">
              COMEÇAR A CADASTRAR
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="pb-8 text-center text-gray-100">
          Feito por Lucas Falcão Lopes
        </Text>
      </View>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}

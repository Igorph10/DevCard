import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Informações de Apresentação da Tela Home */}
        <View style={styles.headerContainer}>
          <Text style={styles.titleLogo}>DevCard</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital de dev mobile
          </Text>
        </View>

        {/* Botão da Tela Home */}
        <Button label="Criar meu cartão" onPress={() => router.push("/cadastro")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 25,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 600,
  },
  titleLogo: {
    color: THEME.colors.primary,
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    width: 200,
    textAlign: "center",
  }
});
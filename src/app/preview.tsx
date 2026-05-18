import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/contants";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function PreviewScreen() {
  const router = useRouter()
  const params = useLocalSearchParams() as unknown as Form

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Cabeçalho do App */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Seu cartão</Text>
        </View>

        {!!params && <DevCard data={params} />}

        {/* Rodapé do App */}
        <View style={styles.footerContainer}>
          <Button label="Editar dados" variant="outline" onPress={() => router.push("/cadastro")} />
          <Button label="Finalizar" onPress={() => router.push("/sucesso")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
    gap: 15,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },
  title: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h3,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 22,
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
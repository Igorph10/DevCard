import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function SucessoScreen() {
  const router = useRouter()

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Informações de Apresentação da Tela Home */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cartão criado com sucesso!</Text>
          <Text style={styles.subtitle}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
        </View>

        <View style={styles.footerContainer}>
          <Button label="Criar outro cartão" onPress={() => router.push('/cadastro')} />
          <Button label="Voltar ao início" variant="secondary" onPress={() => router.push('/')} />
        </View>
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
    gap: 12,
  },

  title: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    width: 200,
    textAlign: "center",
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    width: 200,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
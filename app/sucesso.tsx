import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconeContainer}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Cartão criado{"\n"}com sucesso!</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoCriar}
          onPress={() => router.replace("/")}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoCriar}>Criar outro cartão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 90,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconeContainer: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  checkCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },

  checkIcon: {
    fontSize: 52,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 16,
  },

  botoesContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },

  botaoCriar: {
    backgroundColor: "#6C63FF",
    paddingVertical: 18,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  textoBotaoCriar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  botaoVoltar: {
    paddingVertical: 12,
    alignItems: "center",
  },
});
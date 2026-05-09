import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function BoasVindas() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.iconContainer}>
          <Text style={styles.icon}>💳</Text>
        </View>

        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>
          Seu cartão de visita digital{"\n"}de dev mobile
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cadastro")}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 40,
    alignItems: "center",
    width: "100%",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EDE7FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  icon: {
    fontSize: 44,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: "100%",
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

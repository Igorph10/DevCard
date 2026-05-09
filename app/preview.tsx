import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const coresMap: { [key: string]: string } = {
  Azul: "#3B82F6",
  Verde: "#10B981",
  Roxo: "#8B5CF6",
};

const coresEscurasMap: { [key: string]: string } = {
  Azul: "#1E40AF",
  Verde: "#065F46",
  Roxo: "#5B21B6",
};

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anos: string;
    tecnologia: string;
    cor: string;
  }>();

  const {
    nome = "Nome",
    cargo = "Cargo",
    empresa = "",
    anos = "0",
    tecnologia = "Tech",
    cor = "Azul",
  } = params;

  const anosNum = parseInt(anos, 10);
  let nivel = "Júnior";
  let corBadge = "#9CA3AF";

  if (anosNum >= 3 && anosNum <= 5) {
    nivel = "Pleno";
    corBadge = "#3B82F6";
  } else if (anosNum >= 6) {
    nivel = "Sênior";
    corBadge = "#D97706";
  }

  const corFundo = coresMap[cor] || coresMap.Azul;
  const corEscura = coresEscurasMap[cor] || coresEscurasMap.Azul;
  const inicial = nome.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Seu Cartão</Text>

      <View style={[styles.card, { backgroundColor: corEscura }]}>
        <View style={styles.avatar}>
          <Text style={[styles.avatarTexto, { color: corEscura }]}>
            {inicial}
          </Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>
          {cargo}
          {empresa ? ` • ${empresa}` : ""}
        </Text>

        <View style={styles.divisor} />

        <Text style={styles.especialidade}>
          Especialista em{" "}
          <Text style={styles.tecnologiaDestaque}>{tecnologia}</Text>
        </Text>

        <View style={[styles.badge, { backgroundColor: corBadge }]}>
          <Text style={styles.badgeTexto}>{nivel}</Text>
        </View>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotaoEditar}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => router.replace("/sucesso")}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoFinalizar}>Finalizar</Text>
        </TouchableOpacity>
      </View>
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
  
  tituloPagina: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  card: {
    borderRadius: 24,
    padding: 36,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 14,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  avatarTexto: {
    fontSize: 40,
    fontWeight: "bold",
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  cargo: {
    fontSize: 16,
    color: "#E5E7EB",
    marginBottom: 4,
  },

  divisor: {
    width: 40,
    height: 3,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 2,
    marginVertical: 20,
  },

  especialidade: {
    fontSize: 15,
    color: "#D1D5DB",
    marginBottom: 24,
  },

  tecnologiaDestaque: {
    fontWeight: "700",
    color: "#FFFFFF",
  },

  badge: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },

  badgeTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
  },

  botoes: {
    flexDirection: "row",
    marginTop: 32,
    gap: 16,
    width: "100%",
  },

  botaoEditar: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6B7280",
  },

  textoBotaoEditar: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 15,
  },

  botaoFinalizar: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  textoBotaoFinalizar: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
});

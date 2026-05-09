import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

const cores = [
  { nome: "Azul", corHex: "#3B82F6" },
  { nome: "Verde", corHex: "#10B981" },
  { nome: "Roxo", corHex: "#8B5CF6" },
];

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [corSelecionada, setCorSelecionada] = useState("");

  const [erros, setErros] = useState<{ [campo: string]: string }>({});

  const validar = () => {
    const novosErros: { [campo: string]: string } = {};

    if (!nome.trim() || nome.trim().length < 3) {
      novosErros.nome = "Nome obrigatório (mín. 3 caracteres)";
    }
    if (!cargo.trim()) {
      novosErros.cargo = "Cargo é obrigatório";
    }
    if (!anos.trim() || isNaN(Number(anos)) || Number(anos) <= 0) {
      novosErros.anos = "Necessário ser maior que 0";
    }
    if (!tecnologia.trim()) {
      novosErros.tecnologia = "Necessário colocar uma Tecnologia";
    }
    if (!corSelecionada) {
      novosErros.cor = "Selecione uma cor para o cartão";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const gerarCartao = () => {
    if (validar()) {
      router.push({
        pathname: "/preview",
        params: {
          nome: nome.trim(),
          cargo: cargo.trim(),
          empresa: empresa.trim(),
          anos: anos.trim(),
          tecnologia: tecnologia.trim(),
          cor: corSelecionada,
        },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F8F9FA" }}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Cadastro</Text>
        <Text style={styles.subtitle}>Preencha seus dados de Dev</Text>

        <Text style={styles.boxRegister}>Nome completo</Text>
        <TextInput
          style={[styles.input, erros.nome && styles.inputErro]}
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Igor César"
          placeholderTextColor="#9CA3AF"
        />
        {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

        <Text style={styles.boxRegister}>Cargo</Text>

        <TextInput
          style={[styles.input, erros.cargo && styles.inputErro]}
          value={cargo}
          onChangeText={setCargo}
          placeholder="Ex: Desenvolvedor Mobile"
          placeholderTextColor="#9CA3AF"
        />
        {erros.cargo && <Text style={styles.erro}>{erros.cargo}</Text>}

        <Text style={styles.boxRegister}>
          Empresa <Text style={styles.opcional}>(opcional)</Text>
        </Text>

        <TextInput
          style={styles.input}
          value={empresa}
          onChangeText={setEmpresa}
          placeholder="Ex: UNIVAG"
          placeholderTextColor="#9CA3AF"
        />

        <Text style={styles.boxRegister}>Anos de experiência</Text>
        <TextInput
          style={[styles.input, erros.anos && styles.inputErro]}
          value={anos}
          onChangeText={setAnos}
          keyboardType="numeric"
          placeholder="Ex: 3"
          placeholderTextColor="#9CA3AF"
        />
        {erros.anos && <Text style={styles.erro}>{erros.anos}</Text>}

        <Text style={styles.boxRegister}>Tecnologia Favorita</Text>
        <TextInput style={[styles.input, erros.tecnologia && styles.inputErro]} value={tecnologia}
          onChangeText={setTecnologia}
          placeholder="Ex: React Native"
          placeholderTextColor="#9CA3AF"
        />
        {erros.tecnologia && (
          <Text style={styles.erro}>{erros.tecnologia}</Text>
        )}

        <Text style={styles.boxRegister}>Cor do cartão</Text>

        <View style={styles.corContainer}>
          {cores.map((cor) => (
            <TouchableOpacity key={cor.nome}
              style={[ styles.corBotao, corSelecionada === cor.nome && styles.corSelecionada, ]}
              onPress={() => setCorSelecionada(cor.nome)}
              activeOpacity={0.7}
            >
              <View style={[styles.bolinhaCor, { backgroundColor: cor.corHex }]} />
              <Text style={[ styles.corTexto, corSelecionada === cor.nome && styles.corTextoSelecionada, ]}>
                {cor.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {erros.cor && <Text style={styles.erro}>{erros.cor}</Text>}

        <TouchableOpacity style={styles.botaoGerar} onPress={gerarCartao} activeOpacity={0.8}>
          <Text style={styles.botaoTexto}>Gerar Cartão</Text>
        </TouchableOpacity>
      
      </ScrollView>

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    flexGrow: 1,
    alignItems: "center",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 22,
  },

  boxRegister: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
    alignSelf: "flex-start",
    width: "100%",
    maxWidth: 500,
  },

  opcional: {
    fontWeight: "400",
    color: "#9CA3AF",
    fontSize: 13,
  },

  input: {
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 6,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#1F2937",
    width: "100%",
    maxWidth: 500,
  },

  inputErro: {
    borderColor: "#EF4444",
  },

  erro: {
    color: "#EF4444",
    fontSize: 13,
    marginBottom: 18,
    marginLeft: 4,
    alignSelf: "flex-start",
    width: "100%",
    maxWidth: 500,
  },

  corContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 6,
    marginTop: 4,
    width: "100%",
    maxWidth: 500,
  },

  corBotao: {
    flex: 1,
    padding: 14,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  corSelecionada: {
    borderColor: "#6C63FF",
    backgroundColor: "#EDE7FF",
  },

  bolinhaCor: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },

  corTexto: {
    fontWeight: "600",
    color: "#6B7280",
    fontSize: 14,
  },

  corTextoSelecionada: {
    color: "#6C63FF",
  },

  botaoGerar: {
    backgroundColor: "#6C63FF",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 28,
    width: "100%",
    maxWidth: 500,
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
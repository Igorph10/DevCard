import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/contants";
import { Input } from "../components/Input";
import { ButtonGroupColors } from "../components/ButtonGroupColors";
import { useState } from "react";
import { useRouter } from "expo-router";

const CARD_COLORS = [
    {
      id: "c1",
      name: "Azul",
      colorCode: "#4446f0",
    },
    {
      id: "c2",
      name: "Verde",
      colorCode: "#4ca35b",
    },
    {
      id: "c3",
      name: "Roxo",
      colorCode: "#3f1072",
    },
    {
      id: "c4",
      name: "Rose",
      colorCode: "#970957"
    },
]

export type Form = {
  fullName: string,
  role: string,
  company?: string,
  experience: number,
  technology: string,
  cardColor: string,
}

type Error = {
  fullName?: string,
  role?: string,
  company?: string,
  experience?: string,
  technology?: string,
  cardColor?: string,
}

export default function CadastroScreen() {
  const router = useRouter()

  const [form, setForm] = useState<{ data: Form, errors: Error }>({
    data: {
      fullName: "",
      role: "",
      company: "",
      experience: 0,
      technology: "",
      cardColor: "s",
    },
    errors: { }
  })

  function handleSubmit() {
    router.push({
      pathname: "/preview",
      params: form.data
    })
  }

  function handleInputChange(fieldName: keyof Form, value: string | number) {
    if (!value) return
    setForm((currentForm) => {
      return {
        ...currentForm,
        data: {
          ...currentForm.data,
          [fieldName]: value
        }
      }
    })

    handleInputValidation(fieldName)
  }

  function handleSetOrRemoveInputError(fieldName: keyof Form, error: string | undefined) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [fieldName]: error
        }
      }
    })
    
  }
  
  function handleInputValidation(field: keyof Form){
    const { fullName, role, cardColor, technology, experience } = form.data

    switch(field){
      case "fullName":
        // required, min 3 char
        if (fullName.length === 0) {
          handleSetOrRemoveInputError("fullName", "Informe o nome completo")
        }
        if (fullName.length < 3) {
          handleSetOrRemoveInputError("fullName", "Informe pelo menos 3 caracteres")
        }
        if (fullName.length >= 3) {
          handleSetOrRemoveInputError("fullName", undefined)
        }
        break
      case "role":
        // required
        if (role.length === 0) {
          handleSetOrRemoveInputError("role", "Informe seu cargo")
        } else {
          handleSetOrRemoveInputError("role", undefined)
        }
        break
      case "experience":
        // required > 0
        if (experience < 1) {
          handleSetOrRemoveInputError("experience", "Você deve ter pelo menos 1 ano de experiência")
        }
        else {
          handleSetOrRemoveInputError("experience", undefined)
        }
        break
      case "technology":
        // required
        if (technology.length === 0) {
          handleSetOrRemoveInputError("technology", "Informe sua tecnologia favorita")
        }
        else {
          handleSetOrRemoveInputError("technology", undefined)
        }
        break
      case "cardColor":
        // if (cardColor.length === 0) {
        //   handleSetOrRemoveInputError("cardColor", "Selecione pelo menos 1 cor")
        // }
        // else {
        //   handleSetOrRemoveInputError("cardColor", undefined)
        // }
        break
      
    }
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {/* Cabeçalho do App */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
          </View>

          <View style={{ height: 520 }}>
            <View style={{ gap: 12, marginBottom: 8 }}>
              <Input 
                onChangeText={(text) => handleInputChange('fullName', text)}
                label="Nome Completo"
                placeholder="Igor César"
                defaultValue={form.data.fullName}
                onChange={() => {
                  handleInputValidation("fullName")
                }}
                onBlur={() => {
                  handleInputValidation("fullName")
                }}
                errorMessage={form.errors["fullName"]}
              />
              <Input
                onChangeText={(text) => handleInputChange('role', text)}
                label="Cargo"
                placeholder="Desenvolvedor Full Stack"
                defaultValue={form.data.role}
                onChange={() => {
                  handleInputValidation("role")
                }}
                onBlur={() => {
                  handleInputValidation("role")
                }}
                errorMessage={form.errors["role"]}
              />
              <Input
                onChangeText={(text) => handleInputChange('company', text)}
                label="Empresa"
                placeholder="UNIVAG"
                defaultValue={form.data.company}
                onChange={() => {
                  handleInputValidation("company")
                }}
                onBlur={() => {
                  handleInputValidation("company")
                }}
                errorMessage={form.errors["company"]}
              />
              <Input 
                onChangeText={(text) => handleInputChange('experience', parseInt(text))}
                label="Anos de Experiência"
                placeholder="20"
                defaultValue={form.data.experience.toString()}
                onChange={() => {
                  handleInputValidation("experience")
                }}
                onBlur={() => {
                  handleInputValidation("experience")
                }}
                errorMessage={form.errors["experience"]}
              />
              <Input 
                onChangeText={(text) => handleInputChange('technology', text)}
                label="Tecnologia Favorita"
                placeholder="Python"
                defaultValue={form.data.technology}
                onChange={() => {
                  handleInputValidation("technology")
                }}
                onBlur={() => {
                  handleInputValidation("technology")
                }}
                errorMessage={form.errors["technology"]}
              />
            </View>

            <ButtonGroupColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={CARD_COLORS} />
          </View>
          
          {/* Rodapé do App */}
          <View style={styles.footerContainer}>
            <Button 
              onPress={handleSubmit}
              label="Gerar Cartão"
              disabled={Object.entries(form.errors).filter(([key, value]) => !!value).length > 0}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
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
  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});
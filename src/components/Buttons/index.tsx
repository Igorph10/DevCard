import { GestureResponderEvent, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";

type Props = {
  label: string,
  disabled?: boolean,
  variant?: "primary" | "secondary" | "outline"
  onPress?: (event: GestureResponderEvent) => void
}

export function Button({ label, variant = "primary", onPress, disabled = false }: Props) {

    function handleOnPress(event: GestureResponderEvent) {
        if (!onPress) return
        if (disabled) return
        onPress(event)
    }
    return (
        // Botão de Criação de Cartão
        <TouchableOpacity onPress={handleOnPress} style={[
            styles[variant].buttonContainer,
            disabled && {opacity: 0.5}
        ]}>
            <Text style={styles[variant].buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
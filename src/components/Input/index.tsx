import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    label: string,
    errorMessage?: string
}

export function Input({ label, errorMessage, ...textInputProps }: Props) {
    return (
        <View style={styles.formGroup}>
            <Text style={styles.formLabel}>{label}</Text>
            <TextInput style={styles.formInput} {...textInputProps} />
            {!!errorMessage && (<Text style={styles.formError}>{errorMessage}</Text> )}
        </View>
    )
}
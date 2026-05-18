import { Text, View } from "react-native"
import { styles } from "./styles";
import { Form } from "../../app/cadastro";

type Props = {
    data: Form
}

export function DevCard({ data }: Props){
    return (
        // Cartão do Usuário
        <View style={[styles.cardContainer, {backgroundColor: data.cardColor}]} >
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    {data.fullName.length > 0 && <Text style={styles.cardAvatarLetter}>{data.fullName.charAt(0)}</Text>}
                </View>
            </View>
        
            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>{data.fullName}</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>{data.role}</Text>
                    {!!data.company && <Text style={styles.cardSubtitle}>{data.company}</Text>}
                </View>
            </View>
        
            <View style={styles.cardSeparator} />
        
            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubtitle}>Especialista em</Text>
                <Text style={styles.cardRole}>{data.technology}</Text>
            </View>
        
            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Especialista</Text>
            </View>
        
            <Text style={styles.cardSubtitle}>{data.experience} anos de experiência</Text>
        </View>
    );
}



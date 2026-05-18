import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export type GroupItem = {
    id: string,
    name: string,
    colorCode: string,
}

type Props = {
    group: Array<GroupItem>
    onSelect: (colorCode: string) => void
}

export function ButtonGroupColors({ group, onSelect }: Props) {
    const [selected, setSelected] = useState<GroupItem | null>(null)

    function handleSelect(item: GroupItem){
        setSelected(item)
        onSelect(item.colorCode)
    }

    useEffect(() => {
        const firstItem = group.at(0)
        if(firstItem) {
            handleSelect(firstItem)
        }
    }, [group])

    return (
        <View style={styles.buttonGroupContainer}>
            {group.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => {
                    handleSelect(item)
                }} style={[
                    styles.buttonGroupButtonContainer,
                    selected?.id === item.id && { borderColor: item.colorCode }
                ]}>
                    <View style={[styles.buttonGroupButtonColorIndicator, { backgroundColor: item.colorCode }]} />
                    <Text style={[
                        styles.buttonGroupButtonText,
                        selected?.id === item.id && { color: item.colorCode }
                    ]}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
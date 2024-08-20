import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({text, buttonColor, textSize, textColor, onPress, style}){
    return (
        <View style= {style ? style : []}>
        <Pressable onPress={onPress} style={({pressed}) => [pressed && styles.pressed]}>
             <View style={[{backgroundColor:buttonColor}, styles.button]}>
                <Text style={{fontSize:textSize, color:textColor, fontWeight:'bold'}}>{text}</Text>
            </View>
        </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    button:{
        paddingVertical:10,
        paddingHorizontal:40,
        borderRadius:20
    },
    pressed:{
        opacity:0.7
    }
})

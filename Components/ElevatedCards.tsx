import { ScrollView, StyleSheet,Text,View } from "react-native";
import React from "react";

export default function ElevatedCards(){
    return(
        <View>
            <Text style={styles.headingText} >Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>More..</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>...❤</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({

    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10
    
    },
    container:{
        padding: 5,
        flex: 1,
        flexDirection: 'row',
    
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius: 4,
        margin: 5,
    },
    cardElevated:{
        backgroundColor: '#cad5e2',
        elevation: 4,
        
    },

})

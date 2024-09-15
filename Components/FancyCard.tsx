import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText} >Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg'
            }}
            style={styles.cardImage}  />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Birds Pic</Text>
            <Text style={styles.cardLabel}>Birds Family</Text>
            <Text style={styles.cardDescriptions}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText :{
        fontSize: 20,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    card: {
        width:400,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFFFFF',
        marginHorizontal: 12,
        marginVertical: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
    },
    cardImage :{
        height: 350,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },

    cardBody:{
        fontSize: 10,
        paddingHorizontal: 8,
        flexGrow: 1
    },
    cardTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black'
    },
    cardLabel: {
        color: 'black',
        fontSize: 16,
        marginBottom: 2,
    },
    cardDescriptions: {
        color: '#242B2E',
        fontSize: 14,
        marginTop: 5
    },
    cardFooter: {
        fontSize: 12,
        marginVertical: 10,
        color: 'black'
    },


})
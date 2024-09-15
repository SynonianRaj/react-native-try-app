import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
  return (
    <View>
      <Text style ={styles.headingText}>Blog Cards</Text>
      <View style ={[styles.card, styles.cardElevated]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    cardElevated:{},


})
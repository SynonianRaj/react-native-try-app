import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
        "uid": "user001",
        "name": "Alice Johnson",
        "status": "Active",
        "imageurl": "https://gravatar.com/avatar/7c10753746f0980791c42ebd5c47879a?s=200&d=mp&r=x"
    },
    {
        "uid": "user002",
        "name": "Bob Smith",
        "status": "Inactive",
        "imageurl": "https://gravatar.com/avatar/7c10753746f0980791c42ebd5c47879a?s=200&d=mp&r=x"
    },
    {
        "uid": "user003",
        "name": "Charlie Davis",
        "status": "Active",
        "imageurl": "https://gravatar.com/avatar/7c10753746f0980791c42ebd5c47879a?s=200&d=mp&r=x"
    },
    {
        "uid": "user004",
        "name": "Dana Lee",
        "status": "Suspended",
        "imageurl": "https://gravatar.com/avatar/7c10753746f0980791c42ebd5c47879a?s=200&d=mp&r=x"
    },
    {
        "uid": "user005",
        "name": "Eve Martinez",
        "status": "Active",
        "imageurl": "https://gravatar.com/avatar/7c10753746f0980791c42ebd5c47879a?s=200&d=mp&r=x"
    }
]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({ uid,name,status,imageurl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageurl}}
            style={styles.userimage}/>

            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>

            </View>


          </View>
        ) )}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  headingText: {
    fontSize:20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,

  },
  container: {
    paddingHorizontal:15,

  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3,
    padding: 8,

  },
  userimage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,

  },

  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000'

  },
  userStatus: {
    fontSize:12,

  },



})
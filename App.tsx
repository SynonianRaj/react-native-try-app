/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView,ScrollView,View, } from 'react-native';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCards from './Components/ActionCards';
import ContactList from './Components/ContactList';

function App() {
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

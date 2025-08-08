import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { groupedPokemonList } from '../data/pokemeon_list'


const PokemonList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <SectionList
      sections={groupedPokemonList}
      renderItem={({item})=>{
        return (
          <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
          </View>
        )
      }}
      renderSectionHeader={({section})=>{
        return (
          <Text style={styles.headerText}>{section.type}</Text>
        )
      }}
       ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
      />
      </View>
    </SafeAreaView>
  )
}

export default PokemonList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
   card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    color:"black",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    color:"black",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
})
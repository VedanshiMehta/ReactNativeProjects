import React, { JSX, useState } from 'react'
import { StyleSheet, Text, TextInput, View ,FlatList, Pressable} from 'react-native'

import CurrencyButton from './components/CurrencyButton'
import { currencyByRupee } from './constant'
import Snackbar from 'react-native-snackbar'

function showSnackBar(message:string,isError?:boolean)
{
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    textColor: isError != null && isError? "#EA7773": "#55efc4"
  })
}

function App (): JSX.Element {
  const [inputValue,setInputValue]=useState('')
  const [resultValue,setResultValue]= useState('')
  const [targetCurrency,setTargetCurrencyValue] = useState('')
 function covertCurrencyPressed (targetValue: Currency){
  if(!inputValue)
  {
    return showSnackBar("Enter a value to convert",true)
  }
  const inputAmount = parseFloat(inputValue)
  if(!isNaN(inputAmount))
  {
    const convertedValue = inputAmount * targetValue.value
    const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
    setResultValue(result)
    setTargetCurrencyValue(targetValue.name)
  }else{
    return showSnackBar("Not a valid number to convert",true)
  }



 }
  return (
    <View style={styles.container}>
      <View style = {styles.topContainer}>
        <View style = {styles.rupeesContainer}>
          <Text style = {styles.rupee}>₹</Text>
          <TextInput
          maxLength={14}
          value={inputValue}
          clearButtonMode='always' 
          onChangeText={setInputValue}
          keyboardType= 'number-pad'
          placeholder='Enter amount in Rupees'
          returnKeyType='done'
          />
        </View>
        {resultValue && (
          <Text style = {styles.resultTxt}>{resultValue}</Text>
        )}
      </View>
      <View style = {styles.bottomContainer}>
        <FlatList
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item => item.name}
        renderItem={({item})=>(
          <Pressable style ={[styles.button,
            targetCurrency === item.name && styles.selected
          ]}
          onPress={()=> covertCurrencyPressed(item)}>
            <CurrencyButton {...item} />
          </Pressable>
          )}// use for diplaying component

        />
      </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
    padding:20,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
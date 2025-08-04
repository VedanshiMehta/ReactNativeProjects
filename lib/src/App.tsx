import React from 'react'
import BuyCake from './BuyCake/presentation/BuyCake'
import { Provider } from 'react-redux'
import store from '../core/services/redux/store'
import BuyIceCream from './BuyIceCream/presentation/BuyIceCream'
import { ScrollView, StyleSheet, View } from 'react-native'

const App = () => {
  return (
   <Provider store={store} >
    <ScrollView>
    <View style = {styles.container}>
    <BuyCake cake/>
     <BuyCake />
    {/* <BuyIceCream/> */}
    </View>
    </ScrollView>
   </Provider>
  )
}

export default App
const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:'center',
        flex:1,
        alignItems:'stretch'
    },

})
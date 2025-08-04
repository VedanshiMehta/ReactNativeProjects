import React from 'react'
import BuyCake from './BuyCake/presentation/BuyCake'
import { Provider } from 'react-redux'
import store from '../core/services/redux/store'
import BuyIceCream from './BuyIceCream/presentation/BuyIceCream'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import UserContainer from './UserConainer/UserContainer'

const App = () => {
  return (
   <Provider store={store} >
    <SafeAreaView>
    <ScrollView>
    <View style = {styles.container}>
    <BuyCake cake/>
     <BuyCake />
    {/* <BuyIceCream/> */}
    <UserContainer/>
    </View>
    </ScrollView>
    </SafeAreaView>
   </Provider>
  )
}

export default App
const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
    },

})
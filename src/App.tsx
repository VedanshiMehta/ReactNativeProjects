import { View, Text, StyleSheet, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React, { JSX, useState,useEffect} from 'react'
import { addTrack,setupPlayer} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer'



function App():JSX.Element {
  const [isPlayerReady,setIsPlayerReady]=useState(false)

  async function initialize()
  {
    let isSetup = await setupPlayer()
    if(isSetup)
    {
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }
  useEffect(() => {
    initialize()
  }, [])
  
if(!isPlayerReady)
{
  return (<SafeAreaView>
            <ActivityIndicator/>
        </SafeAreaView>
  )
}
  return (
    <View style = {styles.container}>
      <MusicPlayer/>
    </View>
  )
}

export default App

const styles= StyleSheet.create({
  container:{
    flex:1,
  }
});

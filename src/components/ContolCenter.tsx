import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function ContolCenter() {

    const playbackState = usePlaybackState()
    ///Play Next
    const playNext = async()=>{
        await TrackPlayer.skipToNext()
    }
      ///Play Previoius
    const playPrevious = async()=>{
        await TrackPlayer.skipToPrevious()
    }
    ///Toggle Play
    const togglePlayback = async (playback: State | undefined) =>
    {
        const activeTrack = await TrackPlayer.getActiveTrack()
        if(activeTrack !== null)
        {
            if(playback === State.Paused || playback === State.Ready)
            {
                await TrackPlayer.play()
            }else
            {
                await TrackPlayer.pause()
            }
        }

    }
  return (
    <View style = {styles.container}>
      <Pressable onPress={playPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playbackState.state)}>
        <Icon style={styles.icon} name={playbackState.state === State.Playing ? "pause" : "play-arrow"} size={75} />
      </Pressable>
      <Pressable onPress={playNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });
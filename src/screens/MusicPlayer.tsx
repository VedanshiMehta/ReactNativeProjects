import { Dimensions, Image, StyleSheet, Text, View,FlatList} from 'react-native'
import React, { useState } from 'react'
import TrackPlayer,{Event,Track,useTrackPlayerEvents} from 'react-native-track-player'
import { playList } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ContolCenter from '../components/ContolCenter'

const {width}= Dimensions.get('window')

const MusicPlayer = () => {
    const [track,setTrack]= useState<Track|null>()
    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged],async event => {
        switch(event.type){
            case Event.PlaybackActiveTrackChanged:
              if (typeof event.index === 'number') {
                const playingTrack = await TrackPlayer.getTrack(event.index);
                setTrack(playingTrack);
              }
              break;
        }
    })
    const renderArtWork=()=>{
        return (<View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
                {track?.artwork && (<Image
                style={styles.albumArtImg}
                source={{uri: track?.artwork?.toString()}}/>)}
            </View>

        </View>)
    }
  return (
    <View style ={styles.container}>
        <FlatList
        horizontal
        data={playList}
        renderItem= {renderArtWork}
        keyExtractor={song => song.id.toString()}
        />
        <SongInfo track={track}/>
        <SongSlider/>
        <ContolCenter/>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playList } from "./src/constants";

// Setup Player
export async function setupPlayer() {
    let isSetup = false
    try
    {
        await TrackPlayer.getActiveTrack()
         isSetup = true
    }catch(error)
    {
        await TrackPlayer.setupPlayer()
        isSetup = true
    }finally{
        return isSetup;
    }
    
}
// After player is ready to add the tracks
export async function addTrack() {
    await TrackPlayer.add(playList)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

// play back services to play, pause, previous play and next play
export async function playbackService()
{
    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        TrackPlayer.pause
    })
     TrackPlayer.addEventListener(Event.RemotePlay,()=>{
        TrackPlayer.play
    })
    TrackPlayer.addEventListener(Event.RemoteNext,()=>{
        TrackPlayer.skipToNext
    })
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>{
        TrackPlayer.skipToPrevious
    })
}
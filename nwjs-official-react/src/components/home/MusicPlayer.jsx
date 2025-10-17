import { useState, useRef } from "react"

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  {/* isPlaying: Boolean indicating if audio is currently playing
    - true: Music is playing 
    - false: Music paused 

    setIsPlaying: Function to update the state
    - Call setIsPlaying(true) when music starts
    - Call setIsPlaying(false) when music pauses

    Initial value: false
    - Music starts in paused state */}

  const audioRef = useRef(null)
  {/* ref object that'll hold reference to the <audio> DOM element. Before this component renders,
    there will be no audio element yet (null until it mounts). After render, React will set 
    audioRef.current = <audio> element and we can access the audio element.
      
    This is needed because useState can't control media playback directly and we need access to the play and pause methods. */}

  const playback = () => { 
    if (audioRef.current.paused) {
      audioRef.current.play()  
      setIsPlaying(true) /* Update React state to playing state */
    } else {
      audioRef.current.pause()  
      setIsPlaying(false) /* Update React state to paused state */
    }
  }

return (
    <>
      <audio ref={audioRef} loop>
        <source src="/media/asap.mp3" type="audio/mpeg" />
      </audio>

      <button id="musicBtn" onClick={playback}>
        <img src="/images/musicnote.png" alt="music note button" />
      </button>
    </>
  )
}

export default MusicPlayer


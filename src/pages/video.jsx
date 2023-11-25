import React, { useEffect, useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null)
  const [tanlash, setTanlash] = useState(false)


  const startSream = () => {

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      })
      .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => videoRef.current.play()
  
      })
      .catch((err) => {
          alert(err)
      })
  }

  const stopStream = () =>{
    if (videoRef.current)  {
        streamRef?.current?.getTracks().map((el) => el.stop());       
    }

  }
  useEffect(() => {
    stopStream()
    if(tanlash) startSream()
  }, [tanlash]);
  return (
    <>
      <div className="wrapper">
        <video style={{display: tanlash ? "block" : "none"}} autoPlay muted playsInline ref={videoRef}></video>
      </div>
      <div className="controls">
        <button>
            {tanlash ? "off" : "on"}
        </button>
      </div>
    </>
  );
};

export default Video;

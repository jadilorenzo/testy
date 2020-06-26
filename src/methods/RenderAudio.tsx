import React from 'react'

export default (props: { in: boolean }) => {
  return props.in ? (
    <div>
      <audio
        autoPlay={true}
        preload="http://localhost:3000/ui_tap-variant-01.wav"
        src="http://localhost:3000/ui_tap-variant-01.wav"
      ></audio>
    </div>
  ) : null
}

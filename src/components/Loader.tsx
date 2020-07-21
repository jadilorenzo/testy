import React from 'react'
import { Fade, Grid } from '@material-ui/core'
import loader from './loader.gif'

export default () => {
  const [toggled, setToggled] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTimeout(() => setToggled(true), 750)
  }, [])

  return (
    <Fade
      in
      style={{
        zIndex: 10000,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%'
      }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        {toggled && (
          <img
            src={loader}
            alt="loader"
            style={{ minWidth: '15rem', maxWidth: '25%', margin: 'auto' }}
          />
        )}
        <audio
          autoPlay={true}
          preload="http://localhost:3000/hero_simple-celebration-01.wav"
          src="http://localhost:3000/hero_simple-celebration-01.wav"
        ></audio>
      </Grid>
    </Fade>
  )
}

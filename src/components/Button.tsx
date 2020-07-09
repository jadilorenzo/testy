import React from 'react'
import { Button } from '@material-ui/core'

export default (props: any) => {
  const [clicked, setClicked] = React.useState(false)

  React.useEffect(() => {
    const id = setTimeout(() => {
      setClicked(false)
      clearTimeout(id)
    }, 3500)
  }, [clicked])

  return (
    <>
      <Button
        {...props}
        onClick={() => {
          setClicked(true)
          if (props.onClick) props.onClick()
        }}
      >
        {props.children}
      </Button>
      {clicked && (
        <audio
          preload="http://localhost:3000/hero_decorative-celebration-03.caf"
          src="http://localhost:3000/hero_decorative-celebration-03.caf"
          autoPlay
        />
      )}
    </>
  )
}

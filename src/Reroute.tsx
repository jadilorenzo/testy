import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TuiHeader } from './components'
import { Slide } from '@material-ui/core'

export default ({ render }: { render: any }) => {
  const [redirect, setRedirect] = useState('none')
  const [isReady, setIsReady] = useState(false)
  const history = useHistory()

  React.useEffect(() => {
    if (redirect !== 'none') {
      setTimeout(() => {
        setIsReady(true)
      }, 1000)
    }
  }, [redirect])

  if (isReady) {
    history.push(redirect)
    setRedirect('none')
    setIsReady(false)
  }

  return (
    <>
      <TuiHeader setRedirect={setRedirect} />
      <div style={{ height: '5em' }} />
      <Slide direction="up" in={redirect === 'none'} timeout={500}>
        <div>{render(setRedirect)}</div>
      </Slide>
    </>
  )
}

import React, { createContext } from 'react'
interface Options {
  type?: 'multi-answer' | 'multiple-choice' | 'essay'
  autocheck?: true | false
}
const defaultValue: Options = {
  type: 'multiple-choice',
  autocheck: false
}

export const OptionsContext = createContext<any[]>([defaultValue, () => {}])

export const OptionsContextProvider = (props: any) => {
  const [options, setOptions] = React.useState<Options>(defaultValue)

  console.log(options)

  return (
    <OptionsContext.Provider value={[options, setOptions]}>
      {props.children(options)}
    </OptionsContext.Provider>
  )
}

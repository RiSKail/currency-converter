import { useEffect, useRef } from 'react'

const useDidMount = (callback: () => void): void => {
  const didMount = useRef<boolean | null>(null)

  useEffect(() => {
    if (callback && !didMount.current) {
      didMount.current = true
      callback()
    }
  })
}

export default useDidMount

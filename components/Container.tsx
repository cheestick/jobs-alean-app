import { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto sm:max-w-screen-xl'>
      {children}
    </div>
  )
}

export default Container
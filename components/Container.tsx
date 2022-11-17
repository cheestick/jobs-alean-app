import { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto sm:max-w-screen-lg'>
      {children}
    </div>
  )
}

export default Container
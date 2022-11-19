import { FC, ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-[396px] sm:max-w-[1400px]'>
      {children}
    </div>
  )
}

export default Container
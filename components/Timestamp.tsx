import { FC } from 'react'

interface ITimestampProps {
  time: string
}

const Timestamp: FC<ITimestampProps> = ({ time }) => {
  return (
    <p
      className='col-start-2 row-start-1 place-self-end
        text-timestamp font-light sm:font-normal 
        text-sm sm:text-base leading-[1.0625rem] sm:leading-[1.5625rem] 
        tracking-[0.0125rem]'
    >
      { time }
    </p>
  )
}

export default Timestamp 
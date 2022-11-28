import { FC } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

interface ITimestampProps {
  time: string
}

const Timestamp: FC<ITimestampProps> = ({ time }) => {
  return (
    <p
      className='sm:min-w-max sm:w-[145px]
        text-timestamp font-light sm:font-normal 
        text-sm sm:text-base leading-[1.0625rem] sm:leading-[1.5625rem] 
        tracking-[0.0125rem]'
    > 
      Posted {formatDistanceToNowStrict(new Date(time)) } ago
    </p>
  )
}

export default Timestamp 
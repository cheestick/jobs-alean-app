import { FC, useState } from 'react'
import { IJobDetails } from 'types'
import Bookmark from './Bookmark'
import Raiting from './Rating/'
import Timestamp from './Timestamp'

interface IJobBarProps {
  jobDetails: IJobDetails
}

const JobBar: FC<IJobBarProps> = ({ jobDetails }) => {
  const { id, title, address, name, updatedAt, pictures: [avatarURL] } = jobDetails
  const [rating, setRating] = useState<number>(0)

  return (
    <section
      data-id={id}
      className='rounded-lg px-4 pt-[13px] pb-[27px] sm:py-6 
        shadow-mobile sm:shadow-desktop sm:text-md
        bg-job-bar sm:bg-job-bar-white'>
      <section>
        <h2 className='text-lg leading-6 -tracking-[0.035rem]
          sm:text-xl sm:leading-[1.5625rem] sm:-tracking-[0.0391rem]
          sm:font-bold'>
          {title}
        </h2>
        <picture className='flex'>
          <img
            className='w-[66px] sm:w-[85px] aspect-square rounded-full 
              object-cover object-center'
            src={avatarURL}
            alt={`Avatar ${name}`} />
        </picture>
        <p className='text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem]'>
          Department name &#183; {name}
        </p>
        <address className='text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem]'>
          {address}
        </address>
      </section>

      <Raiting rating={rating} setRating={setRating} />
      <Bookmark />
      <Timestamp time={ updatedAt } />
    </section>   
  )
}

export default JobBar
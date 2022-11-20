import { FC } from 'react'
import { IJobDetails } from 'types'

interface IJobBarProps {
  jobDetails: IJobDetails
}

const JobBar: FC<IJobBarProps> = ({ jobDetails }) => {
  const { id, title, address, name, updatedAt, pictures: [avatarURL] } = jobDetails
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

      <p className='flex flex-1 gap-px'>
        <span className='text-center w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] text-black bg-gray-200'>*</span>
        <span className='text-center w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] text-black bg-gray-200'>*</span>
        <span className='text-center w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] text-black bg-gray-200'>*</span>
        <span className='text-center w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] text-black bg-gray-200'>*</span>
        <span className='text-center w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] text-black bg-gray-200'>*</span>
      </p>
      
      <div className='w-8 h-8 bg-gray-500 hidden sm:block'></div>

      <p
        className='text-timestamp font-light sm:font-normal 
        text-sm sm:text-base leading-[1.0625rem] sm:leading-[1.5625rem] 
        tracking-[0.0125rem]'
      >
        {updatedAt }
      </p>
    </section>   
  )
}

export default JobBar
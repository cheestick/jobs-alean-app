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
      className='font-proximaNova text-heading font-bold rounded-lg px-4 pt-[13px] pb-[27px] sm:py-6 shadow-mobile sm:shadow-desktop sm:text-md bg-job-bar sm:bg-job-bar-white'
    >
      <h2>{title}</h2>
      <picture className='flex'>
        <img
          className='w-[66px] aspect-square rounded-full object-cover object-center'
          src={avatarURL}
          alt={`Avatar ${name}`} />
      </picture>
      <p> Department name &#183; { name }</p>
      <address>{ address }</address>
      <p>{ updatedAt }</p>
    </section>
  )
}

export default JobBar
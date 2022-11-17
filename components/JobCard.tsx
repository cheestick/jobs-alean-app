import { FC } from 'react'
import { IJobDetails } from 'types'

interface IJobCardProps {
  jobDetails: IJobDetails
}

const JobCard: FC<IJobCardProps> = ({ jobDetails }) => {
  const { title, address, name, salary } = jobDetails
  return (
    <div  className='rounded-lg px-4 pt-[13px] pb-[27px] sm:py-6 shadow-mobile sm:shadow-desktop sm:text-md'>
      <h2>{ title }</h2>
      <p>{ name }</p>
      <p>{ address }</p>
      <p>{ salary }</p>
    </div>
  )
}

export default JobCard
import { FC } from 'react'
import { captureRejectionSymbol } from 'stream'
import { IJobDetails } from 'types'

interface IJobCardProps {
  jobDetails: IJobDetails
}

const JobCard: FC<IJobCardProps> = ({ jobDetails }) => {
  const { title, address, name, salary } = jobDetails
  return (
    <div  className='mb-4 sm:text-2xl'>
      <h2>{title}</h2>
      <p>{ name }</p>
      <p>{ address }</p>
      <p>{ salary }</p>
    </div>
  )
}

export default JobCard
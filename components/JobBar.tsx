import { FC, useState } from 'react'
import { IJobDetails } from 'types'
import Bookmark from './Bookmark/Bookmark'
import CompanyBriefInfo from './CompanyBriefInfo'
import Raiting from './Rating/'
import Timestamp from './Timestamp'

interface IJobBarProps {
  jobDetails: IJobDetails
}

const JobBar: FC<IJobBarProps> = ({ jobDetails }) => {
  const { id, updatedAt } = jobDetails
  const [rating, setRating] = useState<number>(0)
  const [bookmarked, setBookmarked] = useState<boolean>(false)

  return (
    <section
      data-id={id}
      className='flex flex-col-reverse gap-y-[14px] 
        sm:flex-row sm:flex-1 sm:justify-between
        min-w-[396px] sm:min-w-fit rounded-lg px-4 pt-[13px] pb-[27px] sm:py-6 
        shadow-mobile sm:shadow-desktop sm:text-md
        bg-job-bar sm:bg-job-bar-white '
    >
      <CompanyBriefInfo briefInfo={jobDetails} />
      <div className='flex justify-between ml-[calc(66px+19px)] sm:ml-0'>
        <Raiting rating={rating} setRating={setRating} />
        <div
          className='sm:flex sm:flex-col sm:justify-between'
        >
          <Bookmark icon='flag' checked={bookmarked} setChecked={setBookmarked} />
          <Timestamp time={ updatedAt } />
        </div>
      </div>
    </section>   
  )
}

export default JobBar
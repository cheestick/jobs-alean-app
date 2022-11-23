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
      className='grid grid-cols-[66px_auto] gap-x-[19px] 
      rounded-lg px-4 pt-[13px] pb-[27px] sm:py-6 
        shadow-mobile sm:shadow-desktop sm:text-md
        bg-job-bar sm:bg-job-bar-white'
    >
      <CompanyBriefInfo briefInfo={jobDetails} />
      <Raiting rating={rating} setRating={setRating} />
      <Bookmark icon='flag' checked={bookmarked} setChecked={setBookmarked} />
      <Timestamp time={ updatedAt } />
    </section>   
  )
}

export default JobBar
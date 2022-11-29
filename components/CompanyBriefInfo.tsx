import { FC } from 'react'
import CompanyPicture from './CompanyPicture'
import CompanyAddress from './CompanyAddress'
import { IJobDetails } from 'types'
import Link from 'next/link'


interface ICompanyBriefInfoProps {
  briefInfo: IJobDetails
}

const CompanyBriefInfo: FC<ICompanyBriefInfoProps> = ({ briefInfo }) => {
  const { name, title, address, id, pictures: [imageURL] } = briefInfo
  return (
    <section className='
      flex flex-row-reverse justify-end gap-x-[19px] sm:gap-x-[26px]'
    >
     <div className='flex flex-col sm:gap-y-2'> 
        <Link href={`/jobs/${id}`}>
          <h2 className='sm:min-w-[35ch]
            text-lg leading-6 -tracking-[0.035rem]
            sm:text-xl sm:leading-[1.5625rem] sm:-tracking-[0.0391rem]
            sm:font-bold mb-[5px] sm:mb-0'
          >
            {title}
          </h2>
        </Link>
        <p className='text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem] mb-[7px] sm:mb-0'>
          Department name <span>&#183;</span> {name}
        </p>
        <CompanyAddress address={address} />
      </div>
      <CompanyPicture companyName={name} pictureURL={imageURL} />
    </section>
  )
}

export default CompanyBriefInfo
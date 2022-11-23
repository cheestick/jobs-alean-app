import { FC } from 'react'
import CompanyPicture from './CompanyPicture'
import { IJobDetails } from 'types'


interface ICompanyBriefInfoProps {
  briefInfo: IJobDetails
}

const CompanyBriefInfo: FC<ICompanyBriefInfoProps> = ({ briefInfo }) => {
  const { name, title, address, pictures: [imageURL] } = briefInfo
  return (
      <section className='grid grid-cols-[66x_auto] gap-x-[19px] sm:gap-x-[26px] sm:gap-y-2 place-items-start'>
        <h2 className='col-start-2 text-lg leading-6 -tracking-[0.035rem]
          sm:text-xl sm:leading-[1.5625rem] sm:-tracking-[0.0391rem]
          sm:font-bold mb-[5px] sm:mb-0'>
          {title}
        </h2>
        <p className='col-start-2 text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem] mb-[7px] sm:mb-0'>
          Department name &#183; {name}
        </p>
        <address className='col-start-2 text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem]'>
          {address}
        </address>
        <CompanyPicture companyName={name} pictureURL={imageURL} />
      </section>
  )
}

export default CompanyBriefInfo
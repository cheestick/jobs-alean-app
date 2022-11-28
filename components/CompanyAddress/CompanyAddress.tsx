import { FC } from 'react'
import LocationIcon from './location-mark.svg'

interface ICompanyAddress {
  address: string
}

const CompanyAddress: FC<ICompanyAddress> = ({ address }) => {
  return (
    <address
      className='flex gap-x-2 items-baseline
        text-base leading-[1.5625rem] text-main-secondary tracking-[0.015rem]'
    >
      <LocationIcon className="relative top-[2px]" />
      <span>{address}</span>
    </address>
  )
}

export default CompanyAddress
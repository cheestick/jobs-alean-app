import { FC } from 'react'

interface ICompanyPictureProps {
  pictureURL: string
  companyName: string
}

const CompanyPicture: FC<ICompanyPictureProps> = ({ pictureURL, companyName }) => {
  return (
    <picture className='col-start-1 row-start-1 row-end-3 flex'>
          <img
            className='w-[66px] sm:w-[85px] aspect-square rounded-full 
              object-cover object-center'
            src={pictureURL}
            alt={`The ${companyName} company image`} />
        </picture>
  )
}

export default CompanyPicture
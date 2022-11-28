import { FC } from 'react'

interface ICompanyPictureProps {
  pictureURL: string
  companyName: string
}

const CompanyPicture: FC<ICompanyPictureProps> = ({ pictureURL, companyName }) => {
  return (
          <img
            className='self-start w-[66px] sm:w-[85px] min-w-[66px] sm:min-w-[85px] aspect-square rounded-full 
              object-cover object-center'
            src={pictureURL}
            alt={`The ${companyName} company image`} />
  )
}

export default CompanyPicture
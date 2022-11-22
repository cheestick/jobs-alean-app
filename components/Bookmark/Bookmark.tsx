import { FC } from 'react'
import BookmarkIcon from './bookmark.svg'
import BookmarkStarIcon from './bookmark-star.svg'

type TBookmarkIcon = 'flag' | 'star'

interface IBookmarkProps {
  icon: TBookmarkIcon
  text?: string
}

const Bookmark: FC<IBookmarkProps> = ({ icon, text = '' }) => {
  const iconType = {
    flag: <BookmarkIcon />,
    star: <BookmarkStarIcon />,
  }

  return (
    <div className='hidden sm:flex cursor-pointer'>
      {iconType[icon]}
      {text && <span>{text}</span>}
    </div>
  )
}

export default Bookmark
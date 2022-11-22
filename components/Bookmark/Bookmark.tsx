import { FC } from 'react'
import Text from 'components/Text'
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
    <div className='flex cursor-pointer gap-3 sm:gap-2 items-center '>
      {iconType[icon]}
      {text && <Text text={text} />}
    </div>
  )
}

export default Bookmark
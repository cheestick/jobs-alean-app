import { FC, useLayoutEffect } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import Text from 'components/Text'
import BookmarkIcon from './bookmark.svg'
import BookmarkStarIcon from './bookmark-star.svg'

type TBookmarkIcon = 'flag' | 'star'

interface IBookmarkProps {
  icon: TBookmarkIcon
  text?: string
  checked: boolean
  setChecked?: (checked: boolean) => void
}

const Bookmark: FC<IBookmarkProps> = ({ icon = 'flag', text = '', checked = false, setChecked = () => { }  }) => {
  const checkedState = `${checked ?'stroke-bookmark-marked fill-bookmark-marked': 'stroke-bookmark fill-none'} stroke-2`

  const matches = useMediaQuery('(min-width: 640px)')

  const iconType = {
    flag: <BookmarkIcon className={checkedState} />,
    star: <BookmarkStarIcon className={checkedState}/>,
  }

  if (!matches) {
    return (
      <div
          className={`flex ${icon === 'flag' && 'hidden'} cursor-pointer gap-3 sm:gap-2 items-center mr-auto`}
          onClick={() => setChecked(!checked)}
      >
        {iconType[icon]}
        {text && <Text text={text} />}
      </div>
    )
  }

  return (
    <div
      className='flex cursor-pointer gap-3 sm:gap-2 items-center mr-auto'
      onClick={() => setChecked(!checked)}
    >
      {iconType['flag']}
      {text && <Text text={text} />}
    </div>
  )
}

export default Bookmark
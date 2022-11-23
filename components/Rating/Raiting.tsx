import { FC, useEffect, useState, KeyboardEvent } from 'react'
import StarIcon from './star.svg'

interface IRatingProps {
  rating: number
  setRating?: (rating: number) => void
}

const Raiting: FC<IRatingProps> = ({ rating, setRating }) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => { 
    constructRating(rating)
  }, [rating])
  
   const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((_, idx: number) => {
      return (
        <span
            onClick={() => setNewRating(idx + 1)}
            onMouseEnter = {() => changeDisplay(idx + 1 )}
            onMouseLeave={() => changeDisplay(rating)}>
          <StarIcon
            className={`w-[10px] h-[10px] sm:w-[19px] sm:h-[19px] mr-px
              cursor-pointer 
              ${idx < currentRating ? 'fill-raiting-set' : 'fill-gray-400'}
            `}
          />
        </span>
      )
    })
     
    setRatingArray(updatedArray)
  }

  const changeDisplay = (i: number) => constructRating(i)
  const setNewRating = (i: number) => setRating && setRating(i)

  return (
    <div
      className='col-start-2 row-start-1 my-auto 
        flex flex-1'
    >
      {ratingArray.map((rate, idx) => (
        <span key={idx}>
          {rate}
        </span>))
      }
    </div>
  )
}

export default Raiting
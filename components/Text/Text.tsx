import { FC } from 'react'

interface ITextProps {
  text: string
}

const Text: FC<ITextProps> = ({ text }) => (
  <span
    className='text-main-transparent align-middle sm:text-main text-base sm:text-lg
    leading-[1.4375rem] sm:leading-6 -tracking-[0.03125rem] sm:-tracking-[0.035rem]'>
    {text}
  </span>
)

export default Text
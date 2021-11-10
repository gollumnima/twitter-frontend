import { FlexWrapper } from '@styles/common'
import { Header } from './Header'
import { Left } from './Left'
import { Right } from './Right'

type Props = {
}

export const Wrapper:React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <FlexWrapper>
        <Left />
        {children}
        <Right />
      </FlexWrapper>
    </>
  )
}
import { FlexWrapper } from '@styles/common';
import { SideBar } from './SideBar';
import { Main } from './Main';

type Props = {
}

export const Wrapper:React.FC<Props> = ({ children }) => (
  <>
    <FlexWrapper>
      <SideBar />
      {children}
      <Main />
    </FlexWrapper>
  </>
);

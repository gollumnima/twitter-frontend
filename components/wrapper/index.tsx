import { FlexWithFullWidth } from '@styles/common';
import { SideBar } from './sidebar/index';

type Props = {
};

export const Wrapper: React.FC<Props> = ({ children }) => (
  <FlexWithFullWidth>
    <SideBar />
    {children}
  </FlexWithFullWidth>
);

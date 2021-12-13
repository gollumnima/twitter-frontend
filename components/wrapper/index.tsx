import { FlexWithFullWidth } from '@styles/common';
import { SideBar } from './SideBar';

type Props = {
};

export const Wrapper: React.FC<Props> = ({ children }) => (
  <FlexWithFullWidth>
    <SideBar />
    {children}
  </FlexWithFullWidth>
);

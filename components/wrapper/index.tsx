import { FlexWithFullWidth } from '@styles/common';
import { LeftBanner } from './LeftBanner';
import { SideBar } from './sidebar/index';

type Props = {
};

export const Wrapper: React.FC<Props> = ({ children }) => (
  <FlexWithFullWidth>
    <SideBar />
    {children}
    <LeftBanner />
  </FlexWithFullWidth>
);

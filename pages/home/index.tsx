import { PostList } from '@components/post/PostList';
import { Wrapper } from '@components/wrapper';

type String = {
  size: string,
};

export const Home = () => (
  <Wrapper>
    <PostList />
  </Wrapper>

);

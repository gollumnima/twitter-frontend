import { PostList } from '@components/post/PostList';
import { Wrapper } from '@components/wrapper';

type String = {
  size: string,
};

export const Feed = () => (
  <Wrapper>
    <PostList />
  </Wrapper>
);

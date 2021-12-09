import { ModalContainer } from '@components/modal/ModalContainer';
import styled from 'styled-components';

type PostProps<T, N> = {
  postId: N,
  userId: N,
  profileSrc: T,
  name: T,
  account: T,
  timestamp: N,
  contents: T,
  contentsSrc: T[],
  likes: T[],
};

const Container = styled.div`
  display: flex;
`;

const ImageBox = styled.img`

`;

export default function ImageModal({
  postId, userId, profileSrc, name, account, timestamp, contents, contentsSrc, likes, children,
}: PostProps<string, number>) {
  console.log('hshs');
  return (
    <ModalContainer onClick={() => { }}>
      <Container>
        {/* <ImageBox src={contentsSrc[0].url} /> */}

      </Container>
    </ModalContainer>
  );
}

export default function MyPage({
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

import { ModalContainer } from '@components/modal/ModalContainer';
import { Size } from '@utils/constants';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

export default function ImageModal() {
  // TODO:image modal
  return (
    <ModalContainer onClick={() => { }} size={Size.LARGE}>
      <Container>
        <div />
      </Container>
    </ModalContainer>
  );
}

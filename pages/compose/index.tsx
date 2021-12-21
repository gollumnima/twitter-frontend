import { useRouter } from 'next/router';
import { Compose } from '@components/compose';
import { ModalContainer } from '@components/modal/ModalContainer';
import { Size } from '@utils/constants';

const Page = () => {
  const router = useRouter();

  return (
    <ModalContainer onClose={() => router.push('/')} size={Size.SMALL}>
      <Compose />
    </ModalContainer>
  );
};

export default Page;

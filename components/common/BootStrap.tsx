import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '~/utils/hooksUtil';
import { getSelf } from '~/store/user';

const BootStrap: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handlePageEvent = () => {
      // 1. 로컬스토리지에서 토큰을 받아와서
      // 2. api 에서 토큰으로 자기자신의 회원정보 조회시키고
      // 3. api 응답으로 받은 회원정보를, 리덕스의 user 에 set을 하는것.
      dispatch(getSelf());
    };
    handlePageEvent();

    router.events.on('routeChangeComplete', handlePageEvent);

    return () => {
      router.events.off('routeChangeComplete', handlePageEvent);
    };
  }, []);

  return null;
};

export default BootStrap;

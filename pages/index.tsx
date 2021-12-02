import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home } from '@pages/home';
import { FlexWrapper } from '@styles/common';
import { ActionButton } from '@components/button/ActionButton';

import { SIZE } from '@utils/constants';
import { colors } from '@styles/colors';
import styled from 'styled-components';

const { MEDIUM, LARGE } = SIZE;
const {
  LIGHT_GRAY, WHITE, LIGHT_BLUE, BLACK,
} = colors;

type Props = {
};

const Svg = styled.svg`
  display: block;
  width: 50px;
  height: 50px;
  fill: ${LIGHT_GRAY};
`;

const Span = styled.span`
  display: block;
  font-size: ${(props: String) => (props.size === LARGE ? '64px' : '32px')};
  font-weight: ${(props: String) => (props.size === LARGE ? 700 : 600)};
  padding: ${(props: String) => (props.size === LARGE ? '48px 0 48px 0' : '0 0 24px 0')};

  color: ${WHITE};
`;

export default function App() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: BLACK,
        height: '100vh',
      }}
    >
      {
        false
          ? <Home />

          : (
            <FlexWrapper>
              <img
                src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
                alt="twitter_main"
                style={{
                  width: '50%',
                  height: '100vh',
                }}
              />
              <div style={{ marginLeft: '40px' }}>
                <Svg>
                  <g>
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                  </g>
                </Svg>
                <div>
                  <Span size={LARGE}>지금 일어나고 있는 일</Span>
                  <Span size={MEDIUM}>오늘 트위터에 가입하세요</Span>
                  <Link href="/signup" passHref>
                    <a>
                      <ActionButton
                        size={LARGE}
                        title="회원가입"
                        fontColor={WHITE}
                        onSubmit={() => { }}
                      />
                    </a>
                  </Link>
                </div>
                <span style={{ color: WHITE, display: 'block', margin: '40px 0 24px 0' }}>이미 트위터에 가입하셨나요?</span>
                <ActionButton
                  size={LARGE}
                  title="로그인"
                  fontColor={LIGHT_BLUE}
                  onSubmit={() => { }}
                />
              </div>
            </FlexWrapper>
          )
      }
    </div>
  );
}

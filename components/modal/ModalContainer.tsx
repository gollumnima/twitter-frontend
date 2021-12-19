import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { colors } from '@styles/colors';
import { Size } from '@utils/constants';
import { FlexWrapper } from '@styles/common';
import { Modal } from './index';

const { BLACK, LIGHT_GRAY } = colors;

type Props = {
  onClick: (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  size: Size
};

type StyledProps = {
  size?: Size;
  logo?: boolean;
};

const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrapper = styled.div`
  background-color: ${BLACK};
  position: absolute;
  top: ${(props: StyledProps) => ((props.size === Size.LARGE) ? '10%' : '23%')};
  left: 33%;
  padding: 1em;
  width: 600px;
  height: ${(props: StyledProps) => (props.size === Size.LARGE ? '700px' : '450px')};
  border-radius: 10px;
  
`;

const Svg = styled.svg`
  display: block;
  width: 50px;
  height: 50px;
  fill: ${LIGHT_GRAY};
  padding: ${(props: StyledProps) => (props.logo ? '0 45%' : 0)};
  cursor: ${(props: StyledProps) => (props.logo ? 'none' : 'pointer')};
`;

export const ModalContainer: React.FC<Props> = ({ children, onClick, size }) => {
  const router = useRouter();
  return (
    <Modal>
      <Container>
        <Wrapper size={size}>
          <div>
            <FlexWrapper>
              <Svg onClick={onClick}>
                <g>
                  <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" />
                </g>
              </Svg>
              <Svg logo>
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </g>
              </Svg>
            </FlexWrapper>
            {children}
          </div>
        </Wrapper>
      </Container>
    </Modal>
  );
};

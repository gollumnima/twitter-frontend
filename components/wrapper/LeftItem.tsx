import { FlexWrapper } from '@styles/common';
import styled from 'styled-components';


interface ListItemType {
  id ?: number,
  title: string,
  path: string
}

export const LeftItem = ({ path, title }: ListItemType) => {
  return (
    <FlexWrapper>
      <svg>
        <g>
          <path
            d={path}
          />
        </g>
      </svg>
      <span>{title}</span>
    </FlexWrapper>
  )
}
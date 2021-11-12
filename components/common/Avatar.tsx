import styled from 'styled-components';

type String = {
  src: string,
  size: string
}

const Image = styled.img`
  border-radius: 50%;
`

export const Avatar = ({ src, size }: String) => {
  return (
    <Image 
      src={src}
      alt="profile image"
      style={{
        width: `${size === "small" ? "40px" : "48px"}`, 
        height: `${size === "small" ? "40px" : "48px"}` 
      }}
    />
  )
}
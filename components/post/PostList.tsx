import { Post } from './index'

interface PostsType {
  post: object;
  idx: number;
}

const tempPosts = [
  {
    profileSrc: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
    name: "ABC",
    account: "asdlkjaslkf",
    timestamp: 1234,
    contents: "하하하하하1123",
    contentsSrc: []
  },
  {
    profileSrc: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
    name: "ABCDF",
    account: "asdlkjaslkf",
    timestamp: 1234,
    contents: "하하하하하1123",
    contentsSrc: []
  },
  {
    profileSrc: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
    name: "ABC@@S",
    account: "asdlkjaslkf",
    timestamp: 1234,
    contents: "하하하하하1123",
    contentsSrc: []
  },
  {
    profileSrc: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
    name: "ABCDD",
    account: "asdlkjaslkf",
    timestamp: 1234,
    contents: "하하하하하1123",
    contentsSrc: []
  },
  {
    profileSrc: "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg",
    name: "ABCdf",
    account: "asdlkjaslkf",
    timestamp: 1234,
    contents: "하하하하하1123",
    contentsSrc: []
  },
]

export const PostList = () => {
  console.log('postlist')
  return (
    <>
    {
      tempPosts.map((post, idx) => (
        <Post
            key={idx}
            profileSrc={post.profileSrc}
            name={post.name}
            account={post.account}
            timestamp={post.timestamp}
            contents={post.contents}
            contentsSrc={post.contentsSrc}
          />
      ))}
    </>
  )
}
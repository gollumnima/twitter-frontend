export interface IUserEntity {
  id: number;
  username: string;
  password: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
export interface IFollows {
  follower_id: number,
  followee_id: number
}

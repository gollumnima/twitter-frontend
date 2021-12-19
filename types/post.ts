import * as TUser from './user';
import * as TComment from './comment';

export interface IPostEntity {
  id: number;
  user_id: number;
  content: string;
  status: 'DRAFT' | 'HIDDEN' | 'PUBLISHED' | 'DELETED';
  created_at: string;
  update_at: string;
  deleted_at: string;
}

export interface ILikeEntity {
  id: number;
  post_id: number;
  user_id: number;
  created_at: string;
  deleted_at: string;
}

export interface IImage {
  id: number;
  post_id: number;
  url: string;
  filename: string;
  type: string;
  created_at: string;
  update_at: string;
  deleted_at: string;
}

type LikeInPost = Pick<ILikeEntity, 'id' | 'user_id'> & {
  User: Pick<TUser.IUserEntity, 'id' | 'username' | 'image_url'>
};

export interface GetPostResponse extends IPostEntity {
  User: Pick<TUser.IUserEntity, 'id' | 'username' | 'image_url' | 'name'>;
  Likes: LikeInPost[];
  images: IImage[];
  Comments: TComment.ICommentEntity[];
}

export type PostState = {
  post: GetPostResponse | null;
  postList: GetPostResponse[];
};

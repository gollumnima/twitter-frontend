import * as TUser from './user';

export interface ICommentEntity {
  User: Pick<TUser.IUserEntity, 'id' | 'username' | 'image_url'>;
  id: number;
  content: string;
  post_id: number;
  user_id: number;
  created_at: string;
  deleted_at: string;
}

export type CommentState = {
  comment: ICommentEntity | null;
  commentList: ICommentEntity[];
};

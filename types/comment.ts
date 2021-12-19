export interface ICommentEntity {
  id: number;
  content: string;
  post_id: number;
  user_id: number;
  created_at: string;
  deleted_at: string;
}

export type Content = {
  id: string; // UUID
  subject: string;
  title: string;
  content: string;
  uri: string;
  // likesCount: number;
  // isPublish: boolean; //公開設定
  image: string;
  updatedAt: Date;
};

export type User = {
  id: string; // UUID
  username: string;
  avatar?: string;
};

export type Article = {
  content: Content;
  author: Omit<User, "id">;
};

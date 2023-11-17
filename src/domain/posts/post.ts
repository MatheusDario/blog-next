export type PostID = number;

export type AuthorAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  published_by: number;
  created_at: string;
  updated_at: string;
  published_at: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  created_by: number;
  updated_by: number;
  published_at: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCoverAttributes = {
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};  

export type PostCover = PostCoverFormat & {
  id: PostID;
  data: PostDataCover;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostAttributesData = {
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  created_at: string;
  updated_at: string;
  published_at: string;
  cover: PostCover;
};

export type PostDataCover = {
  id: PostID;
  attributes: PostCoverAttributes;
}

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

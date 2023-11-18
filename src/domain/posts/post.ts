export type PostID = number;

export type AuthorAttributesData = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  createdAt: number;
  updatedAt: number;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
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
  name: string;
  alternativeText: string;
  caption: string;
  url: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
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
  categorie: PostCategory;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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

export interface Tag {
  id: string;
  value: string;
}

export interface TagsSelectProps {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}

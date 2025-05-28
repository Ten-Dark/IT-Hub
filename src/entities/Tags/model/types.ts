export type Tag = string;

export interface TagsSelectProps {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}

import Pill from '@atoms/Pill';
import { TagsLike } from 'interfaces/snippets';

export interface TagsProps {
  tags: TagsLike;
}

const Tags = ({tags}: TagsProps) => (
  <div className="my-4">
    {
      tags.length > 0 && tags.map((tag: string) => (
        <Pill key={tag}>{tag}</Pill>
      ))
    }
  </div>
);

export default Tags;

import Pill from '@atoms/Pill';
import { TagsLike } from 'interfaces/snippets';

export interface TagsProps {
  tags: TagsLike;
}

const Tags = ({tags}: TagsProps) => (
  <div className="mt-4 mb-6">
    {
      tags.length > 0 && tags.map((tag: string) => (
        <Pill key={tag}>{tag}</Pill>
      ))
    }
  </div>
);

export default Tags;

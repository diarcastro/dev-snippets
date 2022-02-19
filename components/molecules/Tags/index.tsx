import Pill from '@atoms/Pill';

export interface TagsProps {
  tags: Array<string>;
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

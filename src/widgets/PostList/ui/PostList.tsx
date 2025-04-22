import { useAppSelector } from '@/shared/lib/hooks/redux.ts';

export const PostList = () => {
  const selector = useAppSelector((state) => state.post);
  return (
    <>
      {selector.post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </>
  );
};

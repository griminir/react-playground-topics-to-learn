import { useState } from 'react';
import usePosts from '../hooks/usePosts';
import React from 'react';

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error: postError,
    isLoading: postLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (postError) return <p>{postError.message}</p>;

  if (postLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className='list-group'>
        {posts?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className='list-group-item'>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className='btn btn-primary'
      >
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </>
  );
};

export default PostList;

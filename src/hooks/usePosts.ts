import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Postquery {
  pageSize: number;
}

// userId: number | undefined as param for other gray text
const usePosts = (query: Postquery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(
          'https://jsonplaceholder.typicode.com/posts', // + (userId ? userId : '') potential solution to the issue
          {
            params: {
              _start: pageParam,
              _limit: query.pageSize,
            },
          }
        )
        .then((res) => res.data),
    staleTime: 300_000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 0,
  });

export default usePosts;

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../react-query/constants';
import todoService, { Todo } from '../react-query/services/todoService';

interface addTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  // first todo what we get from the backend, error, second todo what we send to the backend
  return useMutation<Todo, Error, Todo, addTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      console.log('Saved Todo:', savedTodo);
      //invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });
      //or approch 2: update the data in the cache
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
      //   newTodo,
      //   ...(todos || []),
      // ]);
      // ref.current!.value = '';

      // working with onmutate success
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;

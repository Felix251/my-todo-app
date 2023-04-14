import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Todo } from './type';
import { rootApi } from '..';

export const todoApiSlice = rootApi.injectEndpoints({
    
    endpoints: (build) => ({
        getTodos: build.query<Todo[], void>({
            query: () => '/todos',
            providesTags: [{ type: "todos", id: "LIST" }],
        }),
        addTodo: build.mutation<Todo, Todo>({
            query: (todo: Todo) => ({
                url: "/todos",
                method: 'POST',
                body: todo
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "todos", id: "LIST" }],
        })
    })
});

export const { useGetTodosQuery, useAddTodoMutation} = todoApiSlice;
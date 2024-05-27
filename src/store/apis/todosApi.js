import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoById: builder.query({
            query: (todoId) => '/todos/' + todoId
        }),
    })

});

//useGetTodosQuery es un custom hook que se crea automáticamente a partir de getTodos
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
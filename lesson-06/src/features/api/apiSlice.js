import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
	endpoints: (builder) => ({
		// GET TODOS
		getTodos: builder.query({
			query: () => "/todos",
		}),
		// ADD TODO
		addTodo: builder.mutation({
			query: (todo) => ({
				url: "/todos",
				method: "POST",
				body: todo,
			}),
		}),
		// UPDATE TODO
		updateTodo: builder.mutation({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: "PATCH",
				body: todo,
			}),
		}),
		// DELETE TODO
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `/todos/${id}`,
				method: "DELETE",
				body: id,
			}),
		}),
	}),
});

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = apiSlice;

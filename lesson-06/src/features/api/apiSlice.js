import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
	tagTypes: ["Todos"],
	endpoints: (builder) => ({
		// GET TODOS
		getTodos: builder.query({
			query: () => "/todos",
			providesTags: ["Todos"],
		}),
		// ADD TODO
		addTodo: builder.mutation({
			query: (todo) => ({
				url: "/todos",
				method: "POST",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
		}),
		// UPDATE TODO
		updateTodo: builder.mutation({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: "PATCH",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
		}),
		// DELETE TODO
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `/todos/${id}`,
				method: "DELETE",
				body: id,
			}),
			invalidatesTags: ["Todos"],
		}),
	}),
});

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = apiSlice;

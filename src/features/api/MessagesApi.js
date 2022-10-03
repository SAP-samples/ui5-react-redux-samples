import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

/* This is the createAPI function, that is quite similar to the createSlice
function used in Redux Toolkit to create state.

To learn more about the various options, you can visit the Redux documentation
here: https://redux-toolkit.js.org/rtk-query/api/createApi*/
export const MessagesApi = createApi({
  /* This field creates a unique key that will be used when mounting the API to
  the store. The default is `api`. */
  reducerPath: 'messagesApi',

  /* This is the parameter that sets the base URL for all calls in this api slice.

  You could remove the local host part of the URL and have the function grab the
  rest of the path from where the request is being made but it is recommended to
  have an absolute path.

  This path should also be the most common path between all calls attached to
  this api object.For example, if you wanted to call two paths, `/api/books`,
  and `/api/albums`, you would want your baseUrl to include`/api`.

  To learn more about the fetchBaseQuery function, go here:
  https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery */
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),

  /* In order to use tags and invalidate our cache when we post an update to the
  backend, we need to have a global tagType array. Example and more info here:
  https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#automatic-refreshing-with-cache-invalidation */
  tagTypes: ['Messages'],

  /* These are the endpoints for the api calls. There are two basic types, `query`
  (GET requests), and `mutation` (send updates to the server with requests like
  POST, PUT, DELETE, and more). They can be really simple with just a URL or be
  extended to provide all kinds of options. Go here to learn more. */
  endpoints: (build) => ({
    getMessages: build.query({
      /* This will be appended onto the end of the `baseURL` in the `baseQuery`
      parameter of the API. If a value is sent into this, that can be used to
      modify the path in some way. Because we are just grabbing all the messages,
      we will just return a simple string here. */
      query: () => '/messages',

      /* Adding this tag allows us to invalidate the cache, the stored data,
      when we make an update to the server. It can be named anything and multiple
      different endpoints can use the same tag, or have multiple tags. */
      providesTags: ['Messages'],
    }),
    setMessageStarred: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/messages/${id}`,
        method: 'PUT',
        ...body,
      }),

      /* Adding this optional parameter allows us to automatically any data in the
      cache with the 'Messages' tag. This array can have multiple tags, which can
      be used to signal to rerun any endpoints with those tags to fetch new data
      from the server. */
      invalidatesTags: ['Messages'],
    }),
  }),
});

/* Just like with the actions in slices, we also need to export our endpoint
functions from the created object. Unlike `createSlice`, our functions are all
prepended with `use`, and appended with either `Query`, or `Mutation`, depending
on the type of endpoint. Both examples are shown below. */
export const { useGetMessagesQuery, useSetMessageStarredMutation } =
  MessagesApi;

import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './AppSlice';
import { MessagesApi } from './features/api/MessagesApi';
import MessagesReducer from './features/messages/MessagesSlice';
import ProfileReducer from './features/profile/ProfileSlice';

export default configureStore({
  reducer: {
    app: AppReducer,
    profile: ProfileReducer,
    messages: MessagesReducer,

    // the api needs to be added as a reducer and can be done using a path already provided by the api object
    [MessagesApi.reducerPath]: MessagesApi.reducer,
  },

  /**
   * There are also many useful features that can be used if we add the api
   * middleware, such as caching, invalidation, polling, and more.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MessagesApi.middleware),
});

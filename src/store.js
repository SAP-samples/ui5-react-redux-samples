import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './AppSlice';
import MessagesReducer from './features/messages/MessagesSlice';
import ProfileReducer from './features/profile/ProfileSlice';

export default configureStore({
  reducer: {
    app: AppReducer,
    profile: ProfileReducer,
    messages: MessagesReducer,
  },
});

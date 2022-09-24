import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';
import MessagesSlice from './features/messages/MessagesSlice';
import ProfileReducer from './features/profile/ProfileSlice';

export default configureStore({
  reducer: {
    app: AppSlice,
    profile: ProfileReducer,
    messages: MessagesSlice,
  },
});

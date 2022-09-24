import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  notifications: [],
};

// SLICE (Reducers are here)
export const MessagesSlice = createSlice({
  name: 'messages',

  /* In ProfileSlice.js, I showed how the initial state could be added within
  the slice. Here you can see how the initial state is a separate object. This
  is useful when initial states are very large. */
  initialState,

  reducers: {
    setMessages: (state, action) => {
      const messages = action.payload;

      // set messages state
      state.messages = messages;

      messages.forEach((message) => {
        /* We want to grab only the new messages to add to the notifications
        array so we are trying to find any messages with an id that doesn't
        already exist in notifications. */
        if (
          !state.notifications.find(
            (notification) => notification.id === message.id
          )
        ) {
          /* If the id doesn't exist in notifications, add to our notifications
          array and set the read parameter to false. */
          state.notifications.push({ ...message, read: false });
        }
      });
    },
    setNotificationsToRead: (state) => {
      state.notifications.forEach((notification) => {
        notification.read = true;
      });
    },
  },
});

// ACTIONS
export const { setMessages, setNotificationsToRead } = MessagesSlice.actions;

// SELECTORS
export const selectMessages = (state) => {
  return state.messages.messages;
};

export const selectNotifications = (state) => {
  return state.messages.notifications;
};

export const selectUnreadNotificationsCount = (state) => {
  // Look at all notifications and count only the ones that are unread
  return state.messages.notifications.filter(
    (message) => message.read === false
  ).length;
};

export default MessagesSlice.reducer;

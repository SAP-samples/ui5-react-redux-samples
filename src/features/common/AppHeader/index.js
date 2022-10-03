import {
  Label,
  List,
  ListGrowingMode,
  NotificationListItem,
  Popover,
  PopoverPlacementType,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { useEffect, useRef } from 'react';
import { NavBar } from '../../../common/components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNotifications,
  selectUnreadNotificationsCount,
  setNotifications,
  setNotificationsToRead,
} from '../../messages/MessagesSlice';
import { useGetMessagesQuery } from '../../api/MessagesApi';

export const AppHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);

  // Redux state
  const notifications = useSelector(selectNotifications);
  const unreadNotificationsCount = useSelector(selectUnreadNotificationsCount);

  // RTK Query data
  /* The query endpoint takes in two parameters, the data send to the function
  set up in the `createApi` and an object of options. Seen here is a query that
  doesn't need any kind of data, so sending in undefined allows us to access
  the optional object to set up the polling so our endpoint will be queried at
  a set interval. The returned value is an object with `data`, our data returned
  from the call, and several other values that can be useful for coding a robust
  and stable frontend such as `isFetching` and `isError`. One of the best parts
  of using RTK Query is that this call can be written in several different
  components and if one component (like this one does every few seconds) queries
  the server, all components that request that data (such as Messages) will get
  up to date data unless handled with other options such as `currentData`.

  Check out the queries documentation to learn more:
  https://redux-toolkit.js.org/rtk-query/usage/queries */
  const {
    data: messages = [],
    isFetching,
    isError,
  } = useGetMessagesQuery(undefined, { pollingInterval: 15000 });

  useEffect(() => {
    /* If we want to store the data in the state, we need to make sure that there is data, that the data isn't being fetched, and that there isn't an error before dispatching the action to the state. */
    if (messages && !isFetching && !isError) {
      dispatch(setNotifications(messages));
    }
  }, [dispatch, isError, isFetching, messages]);

  const toggleNotifications = (e) => {
    if (notificationsRef.current.isOpen()) {
      notificationsRef.current.close();
    } else {
      notificationsRef.current.showAt(e.detail.targetRef);
    }
  };

  const handleReadNotifications = () => {
    dispatch(setNotificationsToRead());
  };

  return (
    <>
      <NavBar
        notificationsCount={unreadNotificationsCount}
        toggleNotifications={toggleNotifications}
      />
      <Popover
        ref={notificationsRef}
        placementType={PopoverPlacementType.Bottom}
        onAfterClose={handleReadNotifications}>
        <List growing={ListGrowingMode.Scroll} className={classes.list}>
          {notifications.map((message) => (
            <NotificationListItem
              key={message.id}
              footnotes={
                <>
                  <Label>{message.name}</Label>
                  <Label>{message.timeReceived}</Label>
                </>
              }
              titleText={message.subject}
              read={message.read}>
              {message.message}
            </NotificationListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

const useStyles = createUseStyles({
  list: {
    width: '30rem',
    maxHeight: '22rem',
  },
});

import {
  Label,
  List,
  ListGrowingMode,
  NotificationListItem,
  Popover,
  PopoverPlacementType,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { useRef } from 'react';
import { NavBar } from '../../../common/components/NavBar';

export const AppHeader = (props) => {
  const classes = useStyles();
  // TODO: Move to Redux
  const { notifications, handleReadNotifications } = props;

  const notificationsRef = useRef(null);

  // TODO: Move to Redux
  const unreadNotificationsCount = notifications.filter(
    (message) => message.read === false
  ).length;

  const toggleNotifications = (e) => {
    if (notificationsRef.current.isOpen()) {
      notificationsRef.current.close();
    } else {
      notificationsRef.current.showAt(e.detail.targetRef);
    }
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

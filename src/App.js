import {
  FlexBox,
  FlexBoxJustifyContent,
  ThemeProvider,
} from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import './App.css';
import { AppHeader } from './features/common/AppHeader';
import { Messages } from './features/messages/Messages';
import { ProfileDetails } from './features/profile/ProfileDetails';
import { ProfileHeader } from './features/profile/ProfileHeader';
import { ProfileSidebar } from './features/profile/ProfileSidebar';

function App() {
  const classes = useStyles();

  // TODO: Move to Redux
  const [mainContent, setMainContent] = useState('Personal Information');
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // TODO: Move to RTK Query
    async function getMessages() {
      const response = await fetch('http://localhost:4000/messages');
      const messages = await response.json();

      const newNotifs = getNewNotifications(messages);

      setMessages(messages);
      setNotifications(newNotifs);
    }
    getMessages();
  }, [mainContent]);

  // TODO: Move to Redux
  const getNewNotifications = (newMessages) => {
    const finalNotifications = [...notifications];

    newMessages.forEach((message) => {
      /**
       * We want to grab only the new messages to add to the notifications
       * array so we are trying to find any messages with an index that
       * doesn't already exist in notifications.
       */
      //
      if (
        !finalNotifications.find(
          (notification) => notification.id === message.id
        )
      ) {
        /**
         * If the index doesn't exist in notifications, add to our
         * notifications array and set the read parameter to false.
         */
        finalNotifications.push({ ...message, read: false });
      }
    });

    // return all new notifications
    return finalNotifications;
  };

  // TODO: Move to Redux
  const handleReadNotifications = () => {
    const readNotifications = notifications.map((message) => ({
      ...message,
      read: true,
    }));
    setNotifications(readNotifications);
  };

  const getMainContent = () => {
    switch (mainContent) {
      case 'Messages':
        return <Messages messages={messages} />;
      case 'Personal Information':
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <ThemeProvider>
      <div>
        <AppHeader
          notifications={notifications}
          handleReadNotifications={handleReadNotifications}
        />
        <ProfileHeader />
        <FlexBox className={classes.container}>
          <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            className={classes.sidebar}>
            <ProfileSidebar content={mainContent} setContent={setMainContent} />
          </FlexBox>
          <FlexBox className={classes.details}>{getMainContent()}</FlexBox>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
}

const useStyles = createUseStyles({
  container: {
    height: 'calc(100vh - 10rem)', // to compensate headers and bottom margin
  },
  sidebar: {
    flex: '1',
    margin: {
      left: '2rem',
      right: '1rem',
    },
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    boxShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042),
    0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07)`,
  },
  details: {
    flex: '3',
    marginRight: '1rem',
  },
});

export default App;

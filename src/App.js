import {
  FlexBox,
  FlexBoxJustifyContent,
  ThemeProvider,
} from '@ui5/webcomponents-react';
import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectMainContent } from './AppSlice';
import { AppHeader } from './features/common/AppHeader';
import { Messages } from './features/messages/Messages';
import { setMessages } from './features/messages/MessagesSlice';
import { ProfileDetails } from './features/profile/ProfileDetails';
import { ProfileHeader } from './features/profile/ProfileHeader';
import { ProfileSidebar } from './features/profile/ProfileSidebar';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Redux state
  const mainContent = useSelector(selectMainContent);

  useEffect(() => {
    // TODO: Move to RTK Query
    async function getMessages() {
      const response = await fetch('http://localhost:4000/messages');
      const messages = await response.json();

      dispatch(setMessages(messages));
    }
    getMessages();
  }, [dispatch, mainContent]);

  const getMainContent = () => {
    switch (mainContent) {
      case 'Messages':
        return <Messages />;
      case 'Personal Information':
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <ThemeProvider>
      <div>
        <AppHeader />
        <ProfileHeader />
        <FlexBox className={classes.container}>
          <FlexBox
            justifyContent={FlexBoxJustifyContent.Center}
            className={classes.sidebar}>
            <ProfileSidebar />
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

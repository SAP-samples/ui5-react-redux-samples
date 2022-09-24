import '@ui5/webcomponents-icons/dist/action-settings';
import '@ui5/webcomponents-icons/dist/employee';
import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/post';
import {
  Avatar,
  AvatarColorScheme,
  AvatarShape,
  AvatarSize,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  List,
  ListSeparators,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { SidebarItem } from './SidebarItem';

export const ProfileSidebar = (props) => {
  const classes = useStyles();
  const { content, setContent } = props;

  return (
    <FlexBox
      direction={FlexBoxDirection.Column}
      alignItems={FlexBoxAlignItems.Center}
      className={classes.content}>
      <Avatar
        colorScheme={AvatarColorScheme.Accent6}
        shape={AvatarShape.Circle}
        size={AvatarSize.XL}
        className={classes.avatar}>
        <img alt="Profile" src="/demo-image-profile.png" />
      </Avatar>
      <Title level={TitleLevel.H3} className={classes.title}>
        <strong>Amanda Smith</strong>
      </Title>
      <List separators={ListSeparators.None} className={classes.list}>
        <SidebarItem
          icon="home"
          text="Dashboard"
          selected={content}
          setSelected={setContent}
          disabled
        />
        <SidebarItem
          icon="employee"
          text="Personal Information"
          selected={content}
          setSelected={setContent}
        />
        <SidebarItem
          icon="post"
          text="Messages"
          selected={content}
          setSelected={setContent}
        />
        <SidebarItem
          icon="action-settings"
          text="Settings"
          selected={content}
          setSelected={setContent}
          disabled
        />
      </List>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  content: {
    width: '100%',
  },
  avatar: {
    margin: '3rem 0 2rem',
  },
  title: {
    marginBottom: '5rem',
  },
  list: {
    display: 'flex',
  },
});

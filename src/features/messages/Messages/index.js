import {
  CustomListItem,
  FlexBox,
  FlexBoxDirection,
  List,
  TitleLevel,
  Title,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { MessageListItem } from './MessageListItem';
import { MessagesHeader } from './MessagesHeader';

export const Messages = (props) => {
  const classes = useStyles();
  // TODO: Move to Redux
  const { messages } = props;

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.content}>
      <MessagesHeader className={classes.shadowedBox} />
      <Title level={TitleLevel.H4} className={classes.daySeparator}>
        Today ({messages.length})
      </Title>
      <FlexBox
        fitContainer={true}
        direction={FlexBoxDirection.Column}
        className={classes.shadowedBox}>
        <List className={classes.list}>
          {messages.map((message) => (
            <CustomListItem
              type="Inactive"
              key={message.id}
              className={classes.listItem}>
              <MessageListItem message={message} />
            </CustomListItem>
          ))}
        </List>
      </FlexBox>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  content: {
    flex: '1',
  },
  listItem: {
    height: '120px',
  },
  daySeparator: {
    padding: '1rem 1.5rem',
  },
  shadowedBox: {
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    boxShadow: `0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028),
    0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042),
    0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07)`,
  },
});

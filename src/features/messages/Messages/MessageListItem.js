import '@ui5/webcomponents-icons/dist/favorite';
import '@ui5/webcomponents-icons/dist/unfavorite';
import {
  Avatar,
  AvatarColorScheme,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Icon,
  Text,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';

export const MessageListItem = (props) => {
  const classes = useStyles();
  const { message } = props;

  // TODO: Move to RTK Query
  const handleToggleStarred = async (message) => {
    const { id, body } = message;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    const response = await fetch(
      `http://localhost:4000/messages/${id}`,
      requestOptions
    );
    console.log(response);
  };

  // Wanted to have some fun by changing the color of the avatar based on the name of the person
  const getAvatarColor = () => {
    /* Since there are 10 available colors, getting the mod of the length of the
    name, and adding 1 since the colors start at 1, not zero, we can get a stable
    but varied color based on the name of the person. */
    const nameNumber = (message.name.length % 10) + 1;

    return AvatarColorScheme[`Accent${nameNumber}`];
  };

  return (
    <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.item}>
      <Avatar
        icon="employee"
        colorScheme={getAvatarColor()}
        className={classes.avatar}
      />
      <FlexBox
        alignItems={FlexBoxAlignItems.Baseline}
        direction={FlexBoxDirection.Column}
        fitContainer={true}>
        <FlexBox
          alignItems={FlexBoxAlignItems.Baseline}
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
          fitContainer={true}
          className={classes.padding}>
          <Title>{message.name}</Title>
          <Text>{message.timeReceived}</Text>
        </FlexBox>
        <Title level={TitleLevel.H5} className={classes.padding}>
          {message.subject}
        </Title>
        <FlexBox
          alignItems={FlexBoxAlignItems.Baseline}
          fitContainer={true}
          justifyContent={FlexBoxJustifyContent.SpaceBetween}>
          <Text wrapping={false} className={classes.messageText}>
            {message.message}
          </Text>
          <Icon
            name={message.starred ? 'favorite' : 'unfavorite'}
            interactive
            onClick={() =>
              handleToggleStarred({
                id: message.id,
                body: { ...message, starred: !message.starred },
              })
            }
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  item: {
    width: '100%',
    padding: '0 1.5rem',
  },
  avatar: {
    marginRight: '1rem',
  },
  padding: {
    paddingBottom: '.5rem',
  },
  messageText: {
    width: '30vw',
  },
});

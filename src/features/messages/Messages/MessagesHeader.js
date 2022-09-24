import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Icon,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

export const MessagesHeader = (props) => {
  const classes = useStyles();
  const { className } = props;

  return (
    <FlexBox
      alignItems={FlexBoxAlignItems.Center}
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
      className={classNames(classes.container, className)}>
      <Title level={TitleLevel.H1}>Inbox</Title>
      <Icon name="edit" className={classes.icon} />
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  container: {
    padding: '1rem 1.5rem',
  },
  icon: {
    color: ThemingParameters.sapButton_IconColor,
  },
});

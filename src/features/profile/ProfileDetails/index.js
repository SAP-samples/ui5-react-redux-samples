import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { ContactDetails } from './ContactDetails';
import { PersonalInformation } from './PersonalInformation';

export const ProfileDetails = () => {
  const classes = useStyles();
  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.content}>
      <PersonalInformation />
      <ContactDetails />
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  content: {
    flex: '1',
    padding: '2rem',
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

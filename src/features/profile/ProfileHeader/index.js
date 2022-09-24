import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { formatPhoneNumber } from '../../utils/formatDetails';
import { useSelector } from 'react-redux';

export const ProfileHeader = () => {
  const classes = useStyles();

  // Example of selectors used with a selector created in the component itself.
  const workNumber = useSelector(
    (state) => state.profile.contactDetails.workNumber
  );

  return (
    <FlexBox
      className={classes.header}
      alignItems={FlexBoxAlignItems.Center}
      justifyContent={FlexBoxJustifyContent.SpaceBetween}>
      <span className={classes.profileText}>My Profile</span>
      <span className={classes.numberText}>
        Work Phone: {formatPhoneNumber(workNumber)}
      </span>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  header: {
    height: '5rem',
    backgroundColor: 'white',
    padding: {
      left: '4rem',
      right: '2rem',
    },
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3), inset 0px -1px 0px #D9D9D9',
    marginBottom: '1rem',
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  numberText: {
    fontSize: '14px',
  },
});

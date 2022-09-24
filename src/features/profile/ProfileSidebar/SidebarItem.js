import { FlexBox, FlexBoxAlignItems, Icon } from '@ui5/webcomponents-react';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainContent, setMainContent } from '../../../AppSlice';

export const SidebarItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { icon, text, disabled } = props;

  // Redux state
  const selected = useSelector(selectMainContent);

  const setSelected = () => {
    dispatch(setMainContent(text));
  }

  return (
    <FlexBox
      alignItems={FlexBoxAlignItems.Center}
      className={classNames(classes.listItemContainer, {
        [classes.listItemSelected]: !disabled && selected === text,
      })}
      onClick={() => (!disabled ? setSelected(text) : '')}>
      <Icon name={icon} className={classes.listItemIcon} />
      <div className={classes.listItemText}>{text}</div>
    </FlexBox>
  );
};

const useStyles = createUseStyles({
  listItemContainer: {
    padding: '1rem',
    cursor: 'pointer',
    height: '2rem',
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_SelectionBackground,
    },
  },
  listItemSelected: {
    backgroundColor: ThemingParameters.sapList_SelectionBackgroundColor,
  },
  listItemIcon: {
    margin: {
      left: '3rem',
      right: '2rem',
    },
    height: '2rem',
    width: '2rem',
    color: ThemingParameters.sapBrandColor,
  },
  listItemText: {
    width: '100%',
    paddingBottom: '0.5rem',
  },
});

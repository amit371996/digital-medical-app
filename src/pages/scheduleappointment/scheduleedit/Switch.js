import { Switch } from "@mui/material";
import {Typography} from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useStyles } from "./Style";

export const EditSwitch = ({ checked, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.switchRoot}>
      {checked && (
        <Typography
          variant="subtitle2"
          className={clsx(classes.label, classes.left)}
        >Active
        </Typography>
      )}
      <Switch
        checked={checked}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        {...props}
      />
      {!checked && (
        <Typography
          variant="subtitle2"
          className={clsx(classes.label, classes.right)}
        >
          Inactive
        </Typography>
      )}
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired
};

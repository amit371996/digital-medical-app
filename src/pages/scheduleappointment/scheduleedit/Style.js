import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 114,
    height: 40,
    padding: 0
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(30px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: "none"
      }
    }
  },
  thumb: {
    width: 32,
    height: 32
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },

  // Don't remove this empty class.
  checked: {},

  switchRoot: {
    display: "flex !important",
    position: "relative !important",
    alignItems: "center !important",
    cursor: "pointer !important",
    width: 0
  },
  label: {
    fontSize: 12,
    position: "absolute !important",
    zIndex: 1,
    color: theme.palette.common.white,
    userSelect: "none !important",
    pointerEvents: "none !important"
  },
  left: {
    left: 6
  },
  right: {
    left: 45
  }
}));

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddClientForm from "./AddClientForm";

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 650,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid transparent",
    borderRadius: "8px",
    boxShadow: theme.shadows[3],

    top: "3rem",
    right: `24rem`,
  },
}));

export default function SimpleModal({ handleClose, open }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <AddClientForm />
      </div>
    </Modal>
  );
}

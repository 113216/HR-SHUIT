import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import DeleteSuccess from "./DeleteSuccess";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 150,
    bgcolor: "background.paper",
    borderRadius: 4,
    p: 4,
    border:"none",
    boxShodow: "none",
  };

export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true)
handleClose()
}
  
  const handleClose1 = () => setOpen1(false);
  return (
    <div>
         <span className="delete"  onClick={handleOpen}>
            
          </span>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
          <IconButton
            aria-label="Close"
            style={{
              position: "absolute",
              top: 15,
              left: 650,
              background: "none",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            style={{
              marginBottom: "20px",
              marginLeft: "120px",
              color: "#707070",
            }}
          >
            Are You Sure Want To Remove This Candidate ? 
          </Typography>

          <Button
            className="cancel-button"
            style={{
              borderRadius: "10px",
              backgroundColor: "#383E56",
              width: "100px",
              marginLeft: "180px",
              marginTop: "40px",
              background: "#EDF0F2",
              color: "#383E56",
            }}
            variant="contained"
            disableElevation
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            className="update-button"
            style={{
              borderRadius: "10px",
              backgroundColor: "#383E56",
              width: "100px",
              marginLeft: "340px",
              marginTop: "-65px",
            }}
            variant="contained"
            disableElevation
           onClick={handleOpen1}
          >
            Yes
          </Button>
       
        </div>
      </Box>
      </Modal>
     {open1 &&  <DeleteSuccess setOpen1={setOpen1} open1={open1} handleOpen1={handleOpen1} handleClose1={handleClose1}/>}
    </div>
  );
}
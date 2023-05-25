import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 60,
    bgcolor: "background.paper",
    borderRadius: 4,
    p: 4,
    border:"none",
    boxShodow: "none",
  };

export default function SuccessEdit({open1,handleOpen1,handleClose1}) {




  return (
    <div>
      
      <Modal
        open={open1}
        onClose={handleClose1}
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
              onClick={handleClose1}
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
                <img 
        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
        alt="Image"
        style={{ marginRight: "10px",width:"60px",marginBottom:"-23px" }}
      />
              successfully Updated Laptop Details 
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
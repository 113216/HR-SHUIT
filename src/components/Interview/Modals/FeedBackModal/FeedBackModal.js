import * as React from "react";
import Modal from "@mui/material/Modal";
import "react-datepicker/dist/react-datepicker.css";
import "../FeedBackModal/FeedBackModal.css";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 550,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
  border: "none",
  boxShadow: "none",
};

export default function FeedBackModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography
        onClick={handleOpen}
        style={{ cursor: "pointer", fontWeight: 500 }}
      >
        view
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="feedback-title"
            style={{
              marginLeft: 220,
              fontSize: 25,
              fontWeight: 600,
              color: "#9d9d9d",
            }}
          >
            INTERVIEWER FEEDBACK
          </Typography>
          <div style={{ marginTop: 40, display: "flex", marginLeft: 30 }}>
            <div>
              <Typography
                style={{ color: "#9d9d9d", fontWeight: 500, marginLeft: 30 }}
              >
                Name
              </Typography>
              <Typography
                style={{ color: "#707070", marginLeft: 30, fontWeight: 400 }}
              >
                Manoj S
              </Typography>
            </div>
            <div className="frrdback-border"></div>
            <div className="fdb-status">
              <Typography
                style={{ color: "#9d9d9d", fontWeight: 500, marginLeft: 30 }}
              >
                Interview Status
              </Typography>

              <Typography
                style={{ color: "#707070", marginLeft: 30, fontWeight: 400 }}
              >
                Technical Round
              </Typography>
            </div>
            <div className="frrdback-border"></div>
            <div>
              <Typography
                style={{ color: "#9d9d9d", fontWeight: 500, marginLeft: 30 }}
              >
                Applied Role
              </Typography>
              <Typography
                style={{ color: "#707070", marginLeft: 30, fontWeight: 400 }}
              >
                UX UI Designer
              </Typography>
            </div>
            <div className="frrdback-border"></div>
            <div>
              <Typography
                style={{ color: "#9d9d9d", fontWeight: 500, marginLeft: 30 }}
              >
                Interviewd By
              </Typography>
              <Typography
                style={{ color: "#707070", marginLeft: 30, fontWeight: 400 }}
              >
                Gokul
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: 40, marginLeft: 60, color: "#707070" }}>
            <Typography>FeedBack</Typography>
            <TextField multiline rows={3} style={{ width: 580 }}></TextField>
          </div>
          <div style={{ marginLeft: 60, marginTop: 20, color: "#707070" }}>
            <Typography>Note</Typography>
            <TextField multiline rows={1} style={{ width: 580 }} className="custom-textfield"></TextField>
          </div>
          <RadioGroup row>
            <FormControlLabel
              value="option1"
              control={<Radio style={{ color: "green" }} />}
              label="Selected"
              style={{ marginTop: 30, marginLeft: 170 }}
            />
            <FormControlLabel
              value="option2"
              control={<Radio style={{ color: "red" }} />}
              label="Not Selected"
              style={{ marginTop: 30, marginLeft: 85 }}
            />
          </RadioGroup>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 120,width:100,background:"white",color:"#383e56" }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="secondary"  style={{ marginRight: 200,width:100,background:"#383e56" }}>
              Done
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

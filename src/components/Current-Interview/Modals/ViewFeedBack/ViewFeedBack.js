import * as React from "react";
import Modal from "@mui/material/Modal";
import "react-datepicker/dist/react-datepicker.css";
import "../ViewFeedBack/ViewFeedBack.css";
import { Box, Typography, Button } from "@mui/material";

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

export default function ViewFeedBack() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getStatusColor = (status) => {
    if (status === "Selected") {
      return "#4caf50"; // Green color for selected status
    } else if (status === "Rejected") {
      return "#f44336"; // Red color for rejected status
    } else {
      return "#383e56"; // Default color
    }
  };

  const interviewStatus = "Selected"; // Replace with your dynamic status value
  const CandidateName ="Manoj"; // Replace with your dynamic Name value
  const InterviewRound="technical Round"; // Replace with your dynamic Round value
  const Role = "UX UI Designer";// Replace with your dynamic Role value
  const InterviewdBy ="Gokul";// Replace with your dynamic interviewer value
  const feedback =" Candidate Communication and Confidental leval was Good. and the Technical side also he is strong.";
  const note ="Move to Next Round"


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
                style={{ color: "#383e56", marginLeft: 30, fontWeight: 500 }}
              >
                {CandidateName}
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
                style={{ color: "#383e56", marginLeft: 30, fontWeight: 500 }}
              >
                {InterviewRound}
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
                style={{ color: "#383e56", marginLeft: 30, fontWeight: 500 }}
              >
                {Role}
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
                style={{ color: "#383e56", marginLeft: 30, fontWeight: 500 }}
              >
                {InterviewdBy}
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: 60, marginLeft: 60, color: "#707070" }}>
            <Typography>FeedBack</Typography>
            <Typography style={{ marginTop: 10, fontWeight: 500 }}>
             {feedback}
            </Typography>
          </div>
          <div
            style={{
              marginLeft: 60,
              marginTop: 100,
              color: "#707070",
              display: "flex",
            }}
          >
            <Typography>Note</Typography>
            <Typography
              style={{ marginTop: 30, fontWeight: 500, marginLeft: -35 }}
            >
              {note}
            </Typography>
            <div style={{ marginLeft: 250 }}>
              <Typography>Status</Typography>
              <Typography style={{ fontWeight: 500,color: getStatusColor(interviewStatus), }}>{interviewStatus}</Typography>
            </div>
          </div>

          <div
            style={{
              marginTop: 60,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                marginRight: 100,
                width: 100,
                background: "white",
                color: "#383e56",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: 130, width: 200, background: "#383e56" }}
            >
              Move to Next Round
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

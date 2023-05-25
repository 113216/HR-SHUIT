import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import swal from 'sweetalert2';
import "../Add-Applicants/AddApplicants.css";

import "react-datepicker/dist/react-datepicker.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPaperclip } from "@mdi/js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
  border: "none",
  boxShodow: "none",
};

const InterViewer = [
  { value: "development", label: "Gokul Kumar" },
  { value: "data", label: "Karthick" },
  { value: "overall", label: "Ram Devaraj" },
];

const InterVieweStatusData = [
  { value: "profile", label: "Gokul Kumar" },
  { value: "first", label: "Karthick" },
  { value: "second", label: "Ram Devaraj" },
  { value: "Final", label: "Ram Devaraj" },
];

export default function AddApplicants() {
  const [selectedInterViewer, setSelectedInterviewer] = React.useState("");
  const [InterVieweStatus, setInterviewStatus] = React.useState("");

  const [selectedStatus, setSelectedStatus] = React.useState("active");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    handleClose();
    swal.fire({
      title: 'Candidate Added Successfully',
      text: '',
      icon: 'success',
      showConfirmButton: false,
    });
  };

  const handleClose1 = () => setOpen1(false);
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleInterviewerChange = (event) => {
    setSelectedInterviewer(event.target.value);
  };

  const handleInterviewStatusChange = (event) => {
    setInterviewStatus(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const fileInputRef = React.useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Perform any necessary actions with the selected file
    console.log("Selected file:", selectedFile);
  };

  return (
    <div>
      <span onClick={handleOpen}>
        <ArrowForwardOutlinedIcon
          style={{ marginTop: 86, cursor: "pointer", color: "#383e56",marginLeft:-60 }}
        />
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="Close"
            style={{
              position: "absolute",
              top: 10,
              marginLeft:600,
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
              marginLeft: "200px",
              color: "#707070",
            }}
          >
            APPLYING FOR NEW CANDIDATE
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginLeft: "30px",
              marginTop: "50px",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D" }}
                >
                  Name
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field"
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    backgroundColor: "#f1f5f8",
                  }}
                  size="small"
                />

                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Current Salary
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "260px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                  />
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Preffered Location
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "260px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                  />
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Interview Status
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "275px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                    select
                    value={InterVieweStatusData}
                    onChange={handleInterviewStatusChange}
                  >
                    {InterVieweStatusData.map((Data) => (
                      <MenuItem key={Data.value} value={Data.value}>
                        {Data.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div
                  style={{ marginTop: 20, display: "flex", color: "#9d9d9d" }}
                >
                  <Icon
                    path={mdiPaperclip}
                    size={1}
                    style={{ cursor: "pointer" }}
                    onClick={handleIconClick}
                  />
                  <Typography style={{ color: "#9d9d9d" }}>
                    Attach Resume Here
                  </Typography>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D" }}
                >
                  Job Role
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field"
                  style={{
                    marginBottom: "20px",
                    width: "275px",
                    backgroundColor: "#f1f5f8",
                  }}
                  size="small"
                />
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Expectation Salary
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "275px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                  />
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Education Qualification
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "275px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                  />
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D" }}
                  >
                    Assign Interviewer
                  </Typography>
                  <TextField
                    label=""
                    fullWidth
                    className="text-field"
                    style={{
                      marginBottom: "20px",
                      width: "275px",
                      backgroundColor: "#f1f5f8",
                    }}
                    size="small"
                    select
                    value={InterViewer}
                    onChange={handleInterviewerChange}
                  >
                    {InterViewer.map((InterViewer) => (
                      <MenuItem
                        key={InterViewer.values}
                        value={InterViewer.values}
                      >
                        {InterViewer.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <Typography style={{ color: "#9D9D9D" }}>From</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="custom-timepicker" />
                  </LocalizationProvider>
                </div>
                <div style={{ display: "flex", marginLeft: 140 }}>
                  <Typography
                    style={{
                      color: "#9D9D9D",
                      marginTop: -60,
                      marginRight: -17,
                      marginLeft: 2,
                    }}
                  >
                    To
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="custom-timepicker-to" />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Button
              style={{
                width: "150px",
                marginLeft: "350px",
                borderRadius: "10px",
                backgroundColor: "#383e56",
                color: "white",
              }}
              variant="contained"
              disableElevation
              onClick={handleOpen1}
            >
              Apply
            </Button>
          </div>
          <div style={{ display: "flex", marginLeft: 90 }}>
            <Button
              style={{
                width: "150px",
                marginLeft: "50px",
                borderRadius: "10px",
                backgroundColor: "#383E56",
                background: "#EDF0F2",
                color: "#383E56",
                marginTop: "-38px",
              }}
              variant="contained"
              disableElevation
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
      {/* {open1 &&  <SuccessAddWFH setOpen1={setOpen1} open1={open1} handleOpen1={handleOpen1} handleClose1={handleClose1}/>} */}
    </div>
  );
}

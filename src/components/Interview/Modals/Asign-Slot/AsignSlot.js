import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "@mdi/react";
import { mdiPaperclip } from "@mdi/js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 500,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
  border: "none",
  boxShadow: "none",
};

const ApplyButton = ({ handleOpen }) => {
  return (
    <Button
      onClick={handleOpen}
      style={{
        marginTop: 86,
        cursor: "pointer",
        color: "#383e56",
        marginLeft: -60,
      }}
    >
      <ArrowForwardOutlinedIcon />
    </Button>
  );
};

export default function AsignSlot() {
  const [name, setName] = React.useState("Manoj");
  const [department, setDepartment] = React.useState("Design");
  const [location, setLocation] = React.useState("Coimbatore");
  const [email, setEmail] = React.useState("manoj@thecloudside.com");
  const[education,setEducation]=React.useState("B.Sc(Information Technology)");
  const [availableTimeSlot, setAvailableTimeSlot] = React.useState(
    "10:30 AM - 11:30 AM"
  );

  const [selectedStatus, setSelectedStatus] = React.useState("active");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    handleClose();
  };

  const handleClose1 = () => setOpen1(false);
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
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
      <Typography onClick={handleOpen} style={{cursor:"pointer", fontWeight: 500}} >view</Typography>

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
              left: 300,
              background: "none",
            }}
            // onClick={handleClose}
          >
            <CloseIcon style={{marginLeft:350}}/>
          </IconButton>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h3"
            style={{
              marginBottom: "20px",
              marginLeft: "170px",
              color: "#707070",
            }}
          >
            ASSIGNEE AVAILABLE SLOT
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
                <Typography
                  style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                >
                  {name}
                </Typography>

                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D", marginTop: 30 }}
                  >
                    Location
                  </Typography>
                  <Typography
                    style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                  >
                    {location}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D", marginTop: 30 }}
                  >
                    Candidate Available Time Slot
                  </Typography>

                  <Typography
                    style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                  >
                    {availableTimeSlot}
                  </Typography>
                </div>

                <div>
                  <Typography style={{ marginTop: 30, color: "#9D9D9D" }}>
                    Assign Availabe Time Slot
                  </Typography>
                </div>
                <div style={{ marginTop: 5 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="custom-timepicker" />
                  </LocalizationProvider>
                </div>

                <div style={{ display: "flex", marginLeft: 140 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="custom-timepicker-to" />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 40,
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D" }}
                >
                  Department
                </Typography>

                <Typography
                  style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                >
                  {department}
                </Typography>

                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D", marginTop: 30 }}
                  >
                    Email
                  </Typography>

                  <Typography
                    style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                  >
                    {email}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D", marginTop: 30 }}
                  >
                    Education Qualification
                  </Typography>

                  <Typography
                    style={{ fontWeight: 500, margin: 2, color: "#707070" }}
                  >
                    {education}
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#9D9D9D", marginTop: 30 }}
                  >
                    Resume
                  </Typography>
                </div>
                <div
                  style={{ marginTop: 5, display: "flex", color: "#9d9d9d" }}
                >
                  <Icon
                    path={mdiPaperclip}
                    size={1}
                    style={{ cursor: "pointer", marginLeft: -5 }}
                    onClick={handleIconClick}
                  />
                  <Typography style={{ color: "#707070" }}>
                    Manoj Document.
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
              // onClick={handleOpen1}
            >
              OK
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
              // onClick={handleOpen1}
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

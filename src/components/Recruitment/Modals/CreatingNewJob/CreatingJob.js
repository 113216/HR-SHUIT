import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Input,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import {
  FormatBold,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from "@mui/icons-material";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./CreatingJob.css";

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

const jobTitles = [
  { value: "jobtitle1", label: "Software Engineer" },
  { value: "jobtitle2", label: "Data Engineer" },
  { value: "jobtitle3", label: "Cloud Engineer" },
];
const Salary = [
    { value: "salry1", label: "1.5 - 2.5 LPA" },
    { value: "salary2", label: "2.5 - 4 LPA" },
    { value: "salary3", label: "3 - 5 LPA" },
  ];
  const Location = [
    { value: "location1", label: "Coimbatore" },
    { value: "location2", label: "Bangalore" },
    { value: "location3", label: "Coimbatore" },
  ];
export default function CreatingJobModal() {
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [selectedJobTitle, setSelectedJobTitle] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("active");
  const [selectedSalaryTitle, setSelectedSalaryTitle] = React.useState("");
  const [selectedLocationTitle, setSelectedLocationTitle] = React.useState("");


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("left");

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    handleClose();
  };

  const handleClose1 = () => setOpen1(false);
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setSelectedJobTitle(event.target.value);
  };
  const handleSalaryTitleChange = (event) => {
    setSelectedSalaryTitle(event.target.value);
  };
  const handleLocationTitleChange = (event) => {
    setSelectedLocationTitle(event.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleAlignLeftClick = () => {
    setTextAlign("left");
  };

  const handleAlignCenterClick = () => {
    setTextAlign("center");
  };

  const handleAlignRightClick = () => {
    setTextAlign("right");
  };

  return (
    <div>
      <button className="create-new-job-button" style={{cursor:"pointer"}} onClick={handleOpen}>
        + Create New Job
      </button>

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
              top: 2,
              marginLeft: 600,
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
              marginLeft: "180px",
              color: "#707070",
            }}
          >
            CREATEING NEW JOB OPENINGS
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D" }}
                    >
                      Job Title
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "240px",
                        backgroundColor: "#f1f5f8",
                      }}
                      size="small"
                      select
                      value={selectedLocationTitle}
                      onChange={handleLocationTitleChange}
                    >
                      {jobTitles.map((jobTitle) => (
                        <MenuItem key={jobTitle.value} value={jobTitle.value}>
                          {jobTitle.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ color: "#9D9D9D", marginLeft: "90px" }}
                      >
                        Salary Range
                      </Typography>
                      <TextField
                        label=""
                        fullWidth
                        className="text-field"
                        style={{
                          marginBottom: "20px",
                          width: "240px",
                          backgroundColor: "#f1f5f8",
                          marginLeft: "90px",
                        }}
                        size="small"
                        select
                        value={selectedSalaryTitle}
                        onChange={handleSalaryTitleChange}
                      >
                        {Salary.map((Salary) => (
                          <MenuItem key={Salary.value} value={Salary.value}>
                            {Salary.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D" }}
                    >
                      Location
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "240px",
                        backgroundColor: "#f1f5f8",
                      }}
                      size="small"
                      select
                      value={selectedJobTitle}
                      onChange={handleJobTitleChange}
                    >
                      {Location.map((Location) => (
                        <MenuItem key={Location.value} value={Location.value}>
                          {Location.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D", marginLeft: "90px" }}
                    >
                      Experience
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "240px",
                        backgroundColor: "#f1f5f8",
                        marginLeft: "90px",
                      }}
                      size="small"
                    ></TextField>
                  </div>
                </div>
                <div>
                  <Typography style={{ color: "#9D9D9D" }}>
                    Job Description
                  </Typography>
                  <TextField
                    style={{ width: "575px", height: "100px",  backgroundColor: "#f1f5f8",boxSizing:"border-box" }}
                    multiline
                    rows={3}
                  />
                </div>
              </div>
              <div>
                <Typography style={{ marginTop: 20, color: "#9D9D9D" }}>
                  Job Specification
                </Typography>
                <TextField
                  style={{ width: "575px",  backgroundColor: "#f1f5f8", }}
                  multiline
                  rows={1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{ marginTop: 25 }}>
                        <IconButton size="small" onClick={handleBoldClick}>
                          <FormatBold
                            style={{
                              width: "18px",
                              fontWeight: isBold ? "bold" : "normal",
                            }}
                          />
                        </IconButton>
                        <IconButton size="small" onClick={handleUnderlineClick}>
                          <FormatUnderlined
                            style={{
                              width: "18px",
                              textDecoration: isUnderline
                                ? "underline"
                                : "none",
                            }}
                          />
                        </IconButton>
                        <IconButton size="small" onClick={handleAlignLeftClick}>
                          <FormatAlignLeft
                            style={{
                              width: "18px",
                              color: textAlign === "left" ? "blue" : "black",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={handleAlignCenterClick}
                        >
                          <FormatAlignCenter
                            style={{
                              width: "18px",
                              color: textAlign === "center" ? "blue" : "black",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={handleAlignRightClick}
                        >
                          <FormatAlignRight
                            style={{
                              width: "18px",
                              color: textAlign === "right" ? "blue" : "black",
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: {
                        borderBottom: "1px solid #9d9d9d",
                        borderLeft: "none",
                        borderRight: "none",
                        textAlign: textAlign,
                        fontWeight: isBold ? "bold" : "normal",
                        textDecoration: isUnderline ? "underline" : "none",
                      },
                    },
                    classes: {
                      root: "custom-textfield-root",
                      input: "custom-textfield-input",
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputComponent={Input}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <label
              htmlFor="myInput"
              style={{ marginLeft: 30, color: "#9d9d9d" }}
            >
              No Of Openings
            </label>
            <input
              type="text"
              id="myInput"
              name="name"
              style={{
                marginLeft: 15,
                width: 30,
                height: 13,
                marginTop: 3,
                borderLeft: "1px solid #9d9d9d",
                borderTop: "1px solid #9d9d9d",
                borderBottom: "1px solid #9d9d9d",
                borderRight: "1px solid #9d9d9d",
                borderRadius: 5,
                backgroundColor: "#f1f5f8",
              }}
            />
          </div>
          <div style={{ marginTop: "29px", display: "flex" }}>
            <Button
              style={{
                width: "120px",
                marginLeft: "135px",
                borderRadius: "10px",
                backgroundColor: "#d9d9d9",
                color: "#383e56",
              }}
              variant="contained"
              disableElevation
              onClick={handleOpen1}
            >
              Cancel
            </Button>
            <div>
              <Button
                style={{
                  width: "120px",
                  marginLeft: "120px",
                  borderRadius: "10px",
                  backgroundColor: "#383E56",
                }}
                variant="contained"
                disableElevation
                onClick={handleOpen1}
              >
                Create
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

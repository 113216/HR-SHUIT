import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditSuccess from "./EditSuccess";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4,
  border: "none",
  boxShodow: "none",
};
const departments = [
    { value: "department1", label: "Department 1" },
    { value: "department2", label: "Department 2" },
    { value: "department3", label: "Department 3" },
  ];
  
  const jobTitles = [
    { value: "jobtitle1", label: "Job Title 1" },
    { value: "jobtitle2", label: "Job Title 2" },
    { value: "jobtitle3", label: "Job Title 3" },
  ];

export default function EditWFH() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true)
handleClose()
}
const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [selectedJobTitle, setSelectedJobTitle] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("active");
  
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
  const handleCalendarClick = () => {
    // Handle calendar icon click here
    console.log("Calendar icon clicked");
  };
  return (
    <div>
         <span className="edit"  onClick={handleOpen}>
            
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
              marginLeft: "200px",
              color: "#707070",
            }}
          >
            MODIFY WFH EMPLOYEE
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
                  Employee Id
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
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D" }}
                    >
                      Department
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "130px",
                        backgroundColor: "#f1f5f8",
                      }}
                      size="small"
                      select
                      value={selectedDepartment}
                      onChange={handleDepartmentChange}
                    >
                      {departments.map((department) => (
                        <MenuItem
                          key={department.value}
                          value={department.value}
                        >
                          {department.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
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
                        width: "123px",
                        backgroundColor: "#f1f5f8",
                      }}
                      size="small"
                      select
                      value={selectedJobTitle}
                      onChange={handleJobTitleChange}
                    >
                      {jobTitles.map((jobTitle) => (
                        <MenuItem key={jobTitle.value} value={jobTitle.value}>
                          {jobTitle.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
                <RadioGroup
                  aria-label="status"
                  name="status"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  style={{ marginTop: "10px" }}
                >
                  <FormControlLabel
                    value="active"
                    control={<Radio />}
                    label="Active"
                    style={{ marginLeft: "150px" }}
                  />
                </RadioGroup>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D" }}
                >
                  Employee Name
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
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D" }}
                    >
                      From
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "125px",
                        backgroundColor: "#f1f5f8",
                        // paddingRight: "30px", // Add right padding for the icon
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={handleCalendarClick}>
                            <CalendarMonthIcon
                              style={{ marginLeft: "60px", background: "none" }}
                            />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ color: "#9D9D9D" }}
                    >
                      To
                    </Typography>
                    <TextField
                      label=""
                      fullWidth
                      className="text-field"
                      style={{
                        marginBottom: "20px",
                        width: "125px",
                        backgroundColor: "#f1f5f8",
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <IconButton onClick={handleCalendarClick}>
                            <CalendarMonthIcon
                              style={{ marginLeft: "60px", background: "none" }}
                            />
                          </IconButton>
                        ),
                      }}
                    />
                  </div>
                </div>
                <RadioGroup
                  aria-label="status"
                  name="status"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  style={{ marginTop: "10px" }}
                >
                  <FormControlLabel
                    value="inactive"
                    control={<Radio />}
                    label="Leave"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Button
              style={{
                width: "280px",
                marginLeft: "180px",
                borderRadius: "10px",
                backgroundColor: "#383E56",
              }}
              variant="contained"
              disableElevation
              onClick={handleOpen1}
            >
              UPDATE
            </Button>
          </div>
        </Box>
      </Modal>
     {open1 &&  <EditSuccess setOpen1={setOpen1} open1={open1} handleOpen1={handleOpen1} handleClose1={handleClose1}/>}
    </div>
  );
}
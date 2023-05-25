import React from "react";
import "../Notification-HR/HrNotification.css";
import { TextField,Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Card, CardContent, Typography } from "@mui/material";
import Sidebar from "../../side-bar/Sidebar";
import Topbar from "../../Top-Bar/Topbar";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import InterviewStatus from "../Modals/ViewFeedBack/Edit/InterviewStatus";

const cardData = [
  {
    id: 1,
    department: "Design",
    position: "UI&UX Designer",
    interviewrounds: "First Round",
    interviewTime: "10:30 AM - 11:30 AM",
    assignee: "Gokul Kumar",
    status: "View Feedback",
  },
  {
    id: 2,
    department: "Design",
    position: "UI&UX Designer",
    interviewrounds: "First Round",
    interviewTime: "10:30 AM - 11:30 AM",
    assignee: "Gokul Kumar",
    status: "Scheduled",
  },
  {
    id: 3,
    department: "Design",
    position: "UI&UX Designer",
    interviewrounds: "First Round",
    interviewTime: "10:30 AM - 11:30 AM",
    assignee: "Gokul Kumar",
    status: "Remove",
  },
  {
    id: 3,
    department: "Design",
    position: "UI&UX Designer",
    interviewrounds: "First Round",
    interviewTime: "10:30 AM - 11:30 AM",
    assignee: "Gokul Kumar",
    status: "Send Offer",
    
  },
  
];

export default function HrNotification() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleStatusClick = (status) => {
    switch (status) {
      case "view feedback":
        // Handle view feedback click
        console.log("View Feedback clicked");
        break;
      case "send offer":
        // Handle send offer click
        console.log("Send Offer clicked");
        break;
      case "remove":
        // Handle remove click
        console.log("Remove clicked");
        break;
      case "scheduled":
        // Handle scheduled click
        console.log("Scheduled clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="nofification-interview">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="topbar">
        <Topbar />
      </div>
      <div className="heading-notification-hr">
        <h3>INTERVIEW NOTIFICATION</h3>
        <div>
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  style: {
                    height: "30px", // Adjust the desired height
                    paddingTop: "4px", // Adjust the desired top padding
                    paddingBottom: "4px", // Adjust the desired bottom padding
                    width: "140px",
                    caretColor: "transparent", // Hide the cursor
                    marginTop: "20px",
                    marginLeft: "60px",
                    background: "#f1f5f8",
                  },
                  readOnly: true,
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="border-notification-hr"></div>
      <div className="date-hr">
        <h4>May 22, 2023 Monday</h4>
      </div>
      {cardData.map((data) => (
        <Card
          style={{
            width: 1000,
            height: 100,
            marginLeft: 480,
            border: "1px solid #d9d9d9",
            boxShadow: "none",
            marginTop:"20px",
            position:"relative",
            borderRadius:15
          }}
        >
          <CardContent style={{marginTop:10,marginLeft:20}}>
            <div style={{ display: "flex" }}>
              <div>
                <Typography style={{ color: "#9d9d9d" }}>
                  {data.department}
                </Typography>
                <Typography
                  style={{
                    color: "#383E56",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {data.position}
                </Typography>
              </div>
              <div
                style={{
                  borderRight: "1px #9d9d9d",
                  paddingRight: 20,
                  marginLeft: 60,
                  height: "100%",
                }}
              >
                <Typography style={{ color: "#9d9d9d" }}>
                  InterviewRound
                </Typography>
                <Typography
                  style={{ color: "#29cc39", marginTop: 5, fontWeight: 500 }}
                >
                  {data.interviewrounds}
                </Typography>
              </div>
              <div style={{ marginLeft: 60 }}>
                <Typography style={{ color: "#9d9d9d" }}>
                  Interview Scheduled @
                </Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  {data.interviewTime}
                </Typography>
              </div>
              <div style={{ marginLeft: 60 }}>
                <Typography style={{ color: "#9d9d9d" }}>Assignee</Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  {data.assignee}
                </Typography>
              </div>
              <div style={{ marginLeft: 60 }}>
                <Typography
                  style={{
                    color: "#9d9d9d",
                    textTransform: "uppercase",
                    fontSize: 14,
                  }}
                >
                  Status
                </Typography>
                <Typography
                  style={{
                    color: getStatusColor(data.status),
                    marginTop: 5,
                    fontWeight: 500,
                   
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                  onClick={() => handleStatusClick(data.status)}
                >
                  {data.status}
                </Typography>
              </div>
             <InterviewStatus/>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "Scheduled":
      return "#9d9d9d";
    case "Remove":
      return "#e4672d";
    case "View Feedback":
    case "Send Offer":
      return "#948dea";
    default:
      return "green";
  }
}

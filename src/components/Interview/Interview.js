import React from "react";
import Sidebar from "../side-bar/Sidebar";
import Topbar from "../Top-Bar/Topbar";
import "../Interview/Interview.css";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Card, CardContent, Typography } from "@mui/material";

export default function Interview() {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="nofification-interview">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="topbar">
        <Topbar />
      </div>
      <div className="heading-notification">
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
      <div className="border-notification"></div>

      <div className="date">
        <h4>May 22,2023 Monday</h4>
      </div>
      <div>
        <Card
          style={{
            width: 920,
            height: 80,
            marginLeft: 480,
            border: "1px solid #d9d9d9",
            boxShadow:"none"
          }}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <div>
                <Typography style={{ color: "#9d9d9d" }}>Design</Typography>
                <Typography
                  style={{
                    color: "#383E56",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  UI&UX Designer
                </Typography>
              </div>
              <div style={{ borderRight:"1px #9d9d9d", paddingRight: 20, marginLeft: 80,height:"100%"}}>
                <Typography style={{ color: "#9d9d9d" }}>Status</Typography>
                <Typography
                  style={{ color: "green", marginTop: 5, fontWeight: 500 }}
                >
                  First Round
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>
                  Interview Scheduled @
                </Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  10:30 AM - 11:30 AM
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>Assignee</Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  Gukul Kumar
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography
                  style={{ color: "green", marginTop: 12, fontWeight: 500 }}
                >
                  Upcoming
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          style={{
            width: 920,
            height: 80,
            marginLeft: 480,
            border: "1px solid #d9d9d9",
            boxShadow:"none",
            marginTop:30
          }}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <div>
                <Typography style={{ color: "#9d9d9d" }}>Design</Typography>
                <Typography
                  style={{
                    color: "#383E56",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  UI&UX Designer
                </Typography>
              </div>
              <div style={{ borderRight:"1px #9d9d9d", paddingRight: 20, marginLeft: 80,height:"100%"}}>
                <Typography style={{ color: "#9d9d9d" }}>Status</Typography>
                <Typography
                  style={{ color: "green", marginTop: 5, fontWeight: 500 }}
                >
                  First Round
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>
                  Interview Scheduled @
                </Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  10:30 AM - 11:30 AM
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>Assignee</Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  Gukul Kumar
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography
                  style={{ color: "green", marginTop: 12, fontWeight: 500 }}
                >
                  Upcoming
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="date">
        <h4>May 19,2023 Friday</h4>
      </div>
      <div>
        <Card
          style={{
            width: 920,
            height: 80,
            marginLeft: 480,
            border: "1px solid #d9d9d9",
            boxShadow:"none"
          }}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <div>
                <Typography style={{ color: "#9d9d9d" }}>Design</Typography>
                <Typography
                  style={{
                    color: "#383E56",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  UI&UX Designer
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>Status</Typography>
                <Typography
                  style={{ color: "green", marginTop: 5, fontWeight: 500 }}
                >
                  First Round
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d",marginTop:17 }}>
                  Interview Completed
                </Typography>
              </div>
              <div style={{ marginLeft: 100 }}>
                <Typography style={{ color: "#9d9d9d" }}>Assignee</Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  Gukul Kumar
                </Typography>
              </div>
              <div style={{ marginLeft: 100 }}>
                <Typography
                  style={{ color: "green", marginTop: 12, fontWeight: 500 }}
                >
                  Selected
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          style={{
            width: 920,
            height: 80,
            marginLeft: 480,
            border: "1px solid #d9d9d9",
            marginTop:30,
            boxShadow:"none"
            
          }}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <div>
                <Typography style={{ color: "#9d9d9d" }}>Design</Typography>
                <Typography
                  style={{
                    color: "#383E56",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  UI&UX Designer
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d" }}>Status</Typography>
                <Typography
                  style={{ color: "green", marginTop: 5, fontWeight: 500 }}
                >
                  First Round
                </Typography>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Typography style={{ color: "#9d9d9d",marginTop:17 }}>
                  Interview Completed
                </Typography>
              </div>
              <div style={{ marginLeft: 100 }}>
                <Typography style={{ color: "#9d9d9d" }}>Assignee</Typography>
                <Typography
                  style={{ color: "#383E56", marginTop: 5, fontWeight: 500 }}
                >
                  Gukul Kumar
                </Typography>
              </div>
              <div style={{ marginLeft: 100 }}>
                <Typography
                  style={{ color: "red", marginTop: 12, fontWeight: 500 }}
                >
                  Rejected
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}

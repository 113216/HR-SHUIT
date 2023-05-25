import React, { useState } from "react";
import "../HomePage/Recruitment.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import { mdiMapMarkerRadiusOutline } from "@mdi/js";
import Icon from "@mdi/react";
import AddApplicants from "../Modals/Add-Applicants/AddApplicants";
import DataTable from "../../testing/TestTable";
import CreatingJobModal from "../Modals/CreatingNewJob/CreatingJob";
import ApplicantsDataTable from "../ApplicatsDataTable/ApplicantsDataTable";
import Sidebar from "../../side-bar/Sidebar";
import Topbar from "../../Top-Bar/Topbar";

const yourArray = [
  {
    count: 10,
    label: "Openings",
    backgroundColor: "white",
    hoverColor: "rgba(45, 85, 228, 0.2)",
    numberColor: "#2D55E4",
    labrlColor: "#9D9D9D",
    boxShadowColor: "rgba(45,85,228, 100)",
  },
  {
    count: 263,
    label: "Applicants",
    backgroundColor: "white",
    hoverColor: "rgba(228, 103, 45, 0.2)",
    numberColor: "#e4672d",
    labrlColor: "#9D9D9D",
    boxShadowColor: "rgba(228,103,45,100)",
    
  },
  {
    count: 15,
    label: "Interviews",
    backgroundColor: "white",
    hoverColor: "rgba(41, 58, 128, 0.2)",
    numberColor: "#293A80",
    labrlColor: "#9D9D9D",
    boxShadowColor: "rgba(41, 58, 128, 100)",
  },
  
  {
    count: 12,
    label: "Offers",
    backgroundColor: "white",
    hoverColor: "rgba(136, 248, 167, 0.2)",
    numberColor: "#88F8A7",
    labrlColor: "#9D9D9D",
    boxShadowColor: "rgba(136, 248, 167, 100)",
  },
  {
    count: 10,
    label: "Decline",
    backgroundColor: "white",
    hoverColor: "rgba(253, 154, 123, 0.2)",
    numberColor: "#FD9A7B",
    labrlColor: "#9D9D9D",
    boxShadowColor: "rgba(253, 154, 123, 100)",
  },
  // Add more elements as needed
];

const jobArray = [
  {
    title: "SOFTWARE DEVELOPER",
    department: "Front End Developer",
    location: "Coimbatore",
    applicants: 52,
    experience: "1 yr Exp",
  },
  {
    title: "ACCOUNT EXECUTIVE",
    department: "Cloud Sales",
    location: "Coimbatore",
    applicants: 45,
    experience: "1 yr Exp",
  },
  {
    title: "DESIGNER",
    department: "UI/UX Designer",
    location: "Coimbatore",
    applicants: 115,
    experience: "1 yr Exp",
  },
  {
    title: "SOFTWARE DEVELOPER",
    department: "Back End Developer",
    location: "Coimbatore",
    applicants: 15,
    experience: "1 yr Exp",
  },
  {
    title: "CLOUD ENGINEER",
    department: "Intern",
    location: "Coimbatore",
    applicants: 85,
    experience: "1 yr Exp",
  },
  {
    title: "SOFTWARE DEVELOPER",
    department: "Front End Developer",
    location: "Coimbatore",
    applicants: 95,
    experience: "1 yr Exp",
  },
  // Add more job objects as needed
];

export default function Recruitment() {
  const [showAddNewModal, setShowAddNewModal] = useState(null);
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState("");
  const [showDataTable, setShowDataTable] = useState(false); // State variable for DataTable visibility

  const handleCardClick = (index) => {
    setClickedCardIndex(index);
    if (index === 1) {
      setShowDataTable(true); 
    } else {
      setShowDataTable(false); 
    }
    console.log(index)
  };

  const handleCreateButtonClick = (e) => {
    e.stopPropagation();
    setShowAddNewModal(!showAddNewModal); // Set showModal state to true to show the modal
  };



  return (
    <div>
      <Sidebar />
    <div className="wfh-mainContainer" >
      
      <div className="wfh-page">
        <Topbar/>
        <div>
          <div className="wfh-infoBar">
            <span className="wfh-pageName">Recruitment</span>
          </div>

          <div className="wfh-toolbar">
            <span class="wfh-toolbarLeft">
              <input
                type="text"
                placeholder="search"
                className="wfh-search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <select name="department" className="wfh-dropdown">
                <option value="volvo">Job Role</option>
              </select>
            </span>
            <CreatingJobModal  onClick={handleCreateButtonClick}/>
          </div>
        </div>

        <div
          style={{
            background: "rgba(217, 217, 217, 0.25)",
            height: "700px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap", marginLeft: 20 }}
          >
              {yourArray.map((element, index) => {
            return <div
            className="card"
            key={index}
            style={{
              flexBasis: "200px",
              margin: "15px 15px",
              marginLeft: 33,
              marginRight: -1,
              backgroundColor:
                index === clickedCardIndex
                  ? element.hoverColor
                  : element.backgroundColor,
              boxShadow: `0px 4px 0px 0px ${element.boxShadowColor}`,
              borderRadius: "10px",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            
          >
              <Card
                style={{
                  backgroundColor: "transparent",
                  height: "60px",
                  borderRadius: "10px",
                  display: "flex",
                }}
                onClick={() => handleCardClick(index)}
              >
                <CardContent
                  style={{ flex: "1", display: "flex", alignItems: "center" }}
                >
                  <Typography
                    style={{
                      marginLeft: "0px",
                      fontSize: 22,
                      fontWeight: 700,
                      color: element.numberColor, // Set number color
                    }}
                  >
                    {element.count}
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: "20px",
                      fontSize: 16,
                      fontWeight: 300,
                      color: element.labrlColor, // Update label color
                    }}
                  >
                    {element.label}
                  </Typography>
                </CardContent>
                <CardActions>{/* Card actions */}</CardActions>
              </Card>
            </div>
            
              })}
          </div>
          <div
        className="Job-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
       {
        !showDataTable &&   
        jobArray.map((job, index) => (
          <Card
            className="job-card"
            style={{ borderRadius: 15, marginRight: 25 }}
            key={index}
          >
            <CardContent style={{ marginLeft: 18, marginTop: -5 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Typography
                  className="card-title"
                  style={{ fontWeight: 600, color: "#383E56" }}
                >
                  {job.title}
                </Typography>
                <CreateOutlinedIcon
                  style={{
                    color: "#E4672D",
                    width: 18,
                    cursor: "pointer",
                    marginRight: 90,
                    
                  }}
                />
              </div>
              <Typography
                className="department-title"
                style={{ fontWeight: 500, color: "#666B83", fontSize: 15 }}
              >
                {job.department}
              </Typography>
              <div style={{ marginTop: 30 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "14px",
                    marginBottom: -20,
                    marginRight: 28,
                    color: "#9d9d9d",
                    fontSize:12
                  }}
                >
                  <SchoolOutlinedIcon
                    style={{ marginRight: 10, color: "#383E56",width:20,marginTop:-5 }}
                  />
                  {job.experience}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "30px",
                    color: "#9d9d9d",
                    fontSize:12,
                    marginRight:6
                  }}
                >
                  <Icon
                    path={mdiMapMarkerRadiusOutline}
                    size={0.90}
                    style={{
                      marginRight: 10,
                      marginTop: -4,
                      color: "#383E56",
                      
                    }}
                  />
                  {job.location}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: -60,
                  color: "#29CC39",
                  
                }}
              >
                <Typography
                  style={{ fontSize: 30, fontWeight: 700, marginTop: 5 }}
                >
                  {job.applicants}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontSize: 12,
                    marginBottom: 30,
                    marginTop:-3,
                    color: "#9d9d9d",
                  }}
                >
                  Appplicants
                </Typography>
              </div>

              <div className="border-req"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: -79,
                  marginRight: 80,
                }}
              >
                <Typography
                  style={{
                    marginRight: 70,
                    color: "#383e56",
                    fontSize: 14,
                    marginTop: 86,
                    fontWeight: 700,
                  }}
                >
                 Add Candidate
                </Typography>
                <span>
                  <AddApplicants />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      
       
       
        </div>
        {showDataTable && <ApplicantsDataTable />} {/* Display DataTable when showDataTable is true */}
        </div>
        {/* <ViewWFHDeatial viewModal={viewModal} setViewModal={setViewModal} /> */}
        
      </div>
    </div>
    </div>
  );
}

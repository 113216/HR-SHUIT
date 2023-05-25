import React, { useState } from "react";

import "../WFH-Management/WorkFromHomeTable.css";
import ViewWFHDeatial from "./Modal-WFH/ViewWFH/ViewWFHDeatial";
import AddWFH from "./Modal-WFH/AddNewWFH/AddWFH";
import DeleteWFH from "./Modal-WFH/DeleteWFH/DeleteWFH";
import EditWFH from "./Modal-WFH/EditWFH/EditWFH";
import TablePagination from "@mui/material/TablePagination";
import { IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Sidebar from "../side-bar/Sidebar";
import Topbar from "../Top-Bar/Topbar";

export function WorkFromHomeTable() {
  const [viewModal, setViewModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterJobTitle, setFilterJobTitle] = useState("");

  const columns = [
    "EMPLOYEE NAME",
    "EMPLOYEE ID",
    "DEPARTMENT",
    "JOBTITLE",
    "STATUS",
    "ACTIONS",
  ];
  const data = [
    {
      employeeName: "Dwarakesh",
      employeeid: "69",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Revanth",
      employeeid: "70",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Manoj",
      employeeid: "71",
      department: "Designer",
      jobtitle: "UI&UX",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Revathi",
      employeeid: "72",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
    {
      employeeName: "Gokul",
      employeeid: "73",
      department: "Development",
      jobtitle: "Frontend Developer",
      status: "active",
      profile:
        "https://img.freepik.com/free-vector/it-takes-two-tango-idiom_1308-17930.jpg?w=2000",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleFilterChange = () => {
    setPage(0);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewButtonClick = () => {
    setViewModal(!viewModal); // Set showModal state to true to show the modal
  };
  const filteredData = data.filter(
    (row) =>
      (row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.employeeid.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.department.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.jobtitle.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.status.toLowerCase().includes(searchValue.toLowerCase())) &&
      (filterDepartment === "" || row.department === filterDepartment) &&
      (filterJobTitle === "" || row.jobtitle === filterJobTitle)
  );
  

  return (
    <div>
      <Sidebar />
    <div className="wfh-mainContainer" style={{ marginLeft: 250 }}>
      <div className="wfh-page">
        <Topbar />
        <div className="wfh-infoBar">
          <span className="wfh-pageName">WORK FROM HOME MANAGEMENT</span>
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
            <select
              name="department"
              className="wfh-dropdown"
              value={filterDepartment}
              onChange={(e) => {
                setFilterDepartment(e.target.value);
                setPage(0);
              }}
            >
              <option value="">All Departments</option>
              <option value="Development">Development</option>
              <option value="Designer">Designer</option>
              {/* Add more options as needed */}
            </select>

            <select
              name="jobtitle"
              className="wfh-dropdown"
              value={filterJobTitle}
              onChange={(e) => {
                setFilterJobTitle(e.target.value);
                setPage(0);
              }}
            >
              <option value="">All Job Titles</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="UI&UX">UI&UX</option>
              {/* Add more options as needed */}
            </select>
          </span>
          <AddWFH />
        </div>

        <table className="wfh-table" style={{ borderRadius: "50px",overflow:"scroll",height:"50px" }}>
          <tr>
            {columns.map((column) => {
              return <th>{column}</th>;
            })}
          </tr>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <tr key={row.employeeid} className="wfh-tablerow">
                  <td
                    className="cell"
                    style={{ textAlign: "left", paddingLeft: "25px" }}
                  >
                    <img
                      src={row.profile}
                      alt="Profile"
                      className="wfh-tabel-profile"
                    />
                    <span
                      className="employee-name"
                      onClick={handleViewButtonClick}
                    >
                      {row.employeeName}
                    </span>
                  </td>
                  <td className="wfh-cell">{row.employeeid}</td>
                  <td className="wfh-cell">{row.department}</td>
                  <td className="wfh-cell">{row.jobtitle}</td>
                  <td className="wfh-cell">{row.status}</td>
                  <td className="wfh-actions">
                    <div>
                      <EditWFH />
                      <DeleteWFH />
                    </div>
                  </td>
                </tr>
              );
            })}
        </table>

        {/* Pagination  */}
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]} // Customize as per your needs
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0); // Reset page to the first page when rows per page changes
          }}
          style={{ marginRight: 500, marginTop: -20 }}
          labelDisplayedRows={({ from, to, count }) => (
            <Typography variant="body2">
              Page {Math.ceil(from / rowsPerPage)} of{" "}
              {Math.ceil(count / rowsPerPage)}
            </Typography>
          )}
        />
        {/* Modal For Edit Delete View */}

        <ViewWFHDeatial viewModal={viewModal} setViewModal={setViewModal} />
      </div>
    </div>
    </div>
  );
}

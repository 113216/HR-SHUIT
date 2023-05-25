import React, { useState } from "react";

import "./LaptopManagement.css";

import ViewModalLaptop from "./Modal Laptopmanagement/ViewModal/ViewModalLaptop";

import CreateModalLaptop1 from "./Modal Laptopmanagement/CreateModal/CreateModalLaptop1";
import DeleteModal from "./Modal Laptopmanagement/DeleteModal/DeleteModal";
import EditModal from "./Modal Laptopmanagement/EditModal/EditModal";
import Sidebar from "../side-bar/Sidebar";
import Topbar from "../Top-Bar/Topbar";
import TablePagination from "@mui/material/TablePagination";
import { Typography } from "@mui/material";

export function LaptopManagement() {
  const [showModal, setShowModal] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedJobRole, setSelectedJobRole] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const columns = [
    "EMPLOYEE NAME",
    "LAPTOP NAME",
    "LAPTOP MODEL NO",
    "LAPTOP STATUS",
    "ACTIONS",
  ];
  const data = [
    {
      employeeName: "Dwarakesh",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Revanth",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Manoj",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Revathi",
      role: "engineer",
      laptopName: "Dell",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
    {
      employeeName: "Gokul",
      role: "engineer",
      laptopName: "Lenovo",
      model: "PF3Z7GB0",
      status: "active",
    },
  ];

  const handleViewButtonClick = () => {
    setViewModal(!viewModal); // Set showModal state to true to show the modal
  };

  const handleJobRoleChange = (e) => {
    setSelectedJobRole(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };
  // const handlDeleteButtonClick = () => {
  //   setDeleteModal(true); // Set showModal state to true to show the modal
  // };

  const filteredData = data.filter(
    (row) =>
      row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.laptopName.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.model.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.status.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterData = (data) => {
    return data.filter(
      (row) =>
        (selectedJobRole === "" || row.role === selectedJobRole) &&
        (selectedBrand === "" || row.laptopName === selectedBrand)
    );
  };

  return (
    <div>
      <Sidebar />
    <div className="mainContainer" style={{marginLeft:250}}>
      
      <div className="page">
        <Topbar />
        <div className="infoBar">
          <span className="pageName">Laptop Management</span>
        </div>

        <div className="toolbar">
          <span class="toolbarLeft">
            <input
              type="text"
              placeholder="search"
              className="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <select
              name="jobRole"
              id="jobRole"
              className="dropdown"
              value={selectedJobRole}
              onChange={handleJobRoleChange}
            >
              <option value="">JobRole</option>
              <option value="engineer">Engineer</option>
              <option value="manager">Manager</option>
              {/* Add more options for job roles */}
            </select>
            <select
              name="brand"
              id="brand"
              className="dropdown"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="">Brand</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Dell">Dell</option>
            </select>
          </span>
          <CreateModalLaptop1 />
        </div>

        <table class="rounded-table">
          <tr className="checkbox">
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            {columns.map((column) => {
              return <th>{column}</th>;
            })}
          </tr>
          {filterData(filteredData)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" className="checkbox" />
                  </td>
                  <td>
                    <p className="name-cell" onClick={handleViewButtonClick}>
                      {row.employeeName}
                    </p>
                    <p className="role">{row.role}</p>
                  </td>
                  <td className="cell">{row.laptopName}</td>
                  <td className="cell">{row.model}</td>
                  <td className="cell">{row.status}</td>
                  <td className="actions">
                    <div>
                      <span>
                        {" "}
                        <EditModal />
                      </span>
                      <span>
                        {" "}
                        <DeleteModal />
                      </span>
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

        <ViewModalLaptop viewModal={viewModal} setViewModal={setViewModal} />
      </div>
    </div>
    </div>
  );
}

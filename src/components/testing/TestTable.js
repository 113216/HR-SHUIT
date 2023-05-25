// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import "../testing/Test.css";

// const columns = [
//   {
//     field: "name",
//     headerName: "CANDIDATE NAME",
//     width: 220,
//     sortable: false,
//     renderCell: (params) => (
//       <div className="custom-cell-name custom-margin-center">
//          <img src={params.row.image} alt={params.row.name} className="candidate-image" />
//         <span className="cell-value-name">{params.value}</span>
//       </div>
//     ),
//   },
//   {
//     field: "jobrole",
//     headerName: "JOB ROLE",
//     width: 230,
//     sortable: false,
//     renderCell: (params) => (
//       <div className="custom-cell custom-margin-right">
//         <span className="cell-value-jobrole">{params.value}</span>
//       </div>
//     ),
//   },
//   {
//     field: "location",
//     headerName: "PREFERRED LOCATION",
//     width: 330,
//     sortable: false,
//     renderCell: (params) => (
//       <div className="custom-cell-location custom-margin-right">
//         <span className="cell-value-location">{params.value}</span>
//       </div>
//     ),
//   },
//   {
//     field: "experience",
//     headerName: "EXPERIENCE",
//     width: 170,
//     sortable: false,
//     renderCell: (params) => (
//       <div className="custom-cell custom-margin-right">
//         <span className="cell-value-age-experince">{params.value}</span>
//       </div>
//     ),
//   },
//   {
//     field: "education",
//     headerName: "EDUCATION QUALIFICATION",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 280,
//     renderCell: (params) => (
//       <div className="custom-cell custom-margin-right">
//         <span className="cell-value-education">{params.value}</span>
//       </div>
//     ),
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     name: "Dwarakesh",
//     jobrole: "Front End Developer",
//     location: "Coimbatore",
//     experience: "1 years",
//     education: "Bachelor of Science",
//     image:"https://e0.pxfuel.com/wallpapers/325/301/desktop-wallpaper-beard-cartoon.jpg"
//   },
//   {
//     id: 2,
//     name: "Revanth",
//     jobrole: "Front End Developer",
//     location: "Coimbatore",
//     experience: "3 years",
//     education: "Bachelor of Engineering",
//     image:"https://as1.ftcdn.net/v2/jpg/02/18/96/20/1000_F_218962089_yhRnVKTr3q4Dzvi0Pe2nbXxmB5CYW2GK.jpg"
//   },
//   {
//     id: 3,
//     name: "Revathi",
//     jobrole: "Back End Developer",
//     location: "Coimbatore",
//     experience: "2 years",
//     education: "Bachelor of Science",
//     image:"https://i.pinimg.com/736x/84/5f/57/845f57c5f50322ee947f80ee8eab2631.jpg"
//   },
//   {
//     id: 4,
//     name: "Manoj",
//     jobrole: "UI&UX",
//     location: "Paris",
//     experience: "7 years",
//     education: "Bachelor of Science",
//     image:"https://as1.ftcdn.net/v2/jpg/02/18/96/20/1000_F_218962089_yhRnVKTr3q4Dzvi0Pe2nbXxmB5CYW2GK.jpg"
//   },
//   {
//     id: 5,
//     name: "Praveen",
//     jobrole: "Data Engineer",
//     location: "Coimbatore",
//     experience: "4 years",
//     education: "Bachelor of Engineering",
//     image:"https://www.shutterstock.com/image-vector/young-man-head-avatar-character-260nw-741858571.jpg"
//   },
//   {
//     id: 6,
//     name: "Surya Moorthy",
//     jobrole: "Data Engineer",
//     location: "Coimbatore",
//     experience: "6 years",
//     education: "Bachelor of Engineering",
//     image:"https://cdn3.vectorstock.com/i/1000x1000/40/52/man-face-cartoon-vector-15374052.jpg"
//   },
//   {
//     id: 7,
//     name: "Venkatesh",
//     jobrole: "Data Engineer",
//     location: "Coimbatore",
//     experience: "5 years",
//     education: "Bachelor of Engineering",
//     image:"https://cdn3.vectorstock.com/i/1000x1000/90/17/indian-man-face-avatar-cartoon-vector-25919017.jpg"
//   },

// ];

// const columnStyles = {
//   headerAlign: "center",
//   headerClassName: "custom-header-cell",
// };

// export default function DataTable() {
//   return (
//     <div style={{ height: 474, width: "81%",marginLeft:"-20",borderRadius:"10px", border: "1px solid #ccc",
//     position: "relative",
//     overflow: "hidden",marginTop:"20px" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns.map((col) => ({ ...col, ...columnStyles }))}
//         pageSize={5}
//       />
//     </div>
//   );
// }

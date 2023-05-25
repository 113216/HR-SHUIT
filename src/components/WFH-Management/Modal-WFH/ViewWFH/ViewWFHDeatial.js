import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

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

export default function ViewWFHDeatial({viewModal,setViewModal}) {
  // const [open, setOpen] = React.useState(true);
  const handleClose = () => setViewModal(false);

  return (
    <div>
      <Modal
        open={viewModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="Close"
            style={{
              position: "absolute",
              top: 5,
              left:650,
              background: "none",
              marginTop:"20px"
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
            LAPTOP INFORMATION
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "30px" }}>
      <div style={{ flex: 1,marginLeft:"40px" }}>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            Employee Id.
          </Typography>
          <div style={{ marginBottom: "20px", width: "260px", padding: "8px", marginRight: "40px" }}>
            <div>70</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            Department
          </Typography>
          <div style={{ marginBottom: "20px", width: "260px", padding: "8px" }}>
            <div>Developer</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            Status
          </Typography>
          <div style={{ marginBottom: "20px", width: "260px", padding: "8px" }}>
            <span>Active</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1,marginLeft:"-120px" }}>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            Employee Name
          </Typography>
          <div style={{ marginBottom: "20px", width: "260px", padding: "8px" }}>
            <span>Dwarakesh S</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            From
          </Typography>
          <div style={{ marginBottom: "20px", width: "260px", padding: "8px" }}>
            <span>08/05/2023</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1,marginLeft:"-70px",marginTop:"40px"  }}>
        <div>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px" }}>
            Job Title
          </Typography>
          <div style={{ marginBottom: "10px", marginTop: "10px" }}>
            <div style={{ marginLeft: "8px" }}>UX & UI</div>
          </div>
        </div>
        <div>
          <Typography variant="body2" gutterBottom style={{ color: "#9D9D9D", marginLeft: "8px",marginTop:"30px" }}>
            To
          </Typography>
          <div style={{ marginBottom: "10px", marginTop: "10px" }}>
            <div style={{ marginLeft: "8px" }}>15/05/2023</div>
          </div>
        </div>
      </div>
    </div>
        </Box>
      </Modal>
    </div>
  );
}

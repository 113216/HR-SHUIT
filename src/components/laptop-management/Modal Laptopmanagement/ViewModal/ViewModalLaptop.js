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
  border:"none",
  boxShodow: "none",
};

export default function ViewModalLaptop({viewModal,setViewModal}) {
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
              top: 10,
              left: 300,
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
            LAPTOP INFORMATION
          </Typography>

          <div style={{ display: "flex", gap: "20px", marginLeft: "30px" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column",marginTop:'40px' }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D",marginLeft:"8px" }}
                >
                  Laptop Model No.
                </Typography>
                <div
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    padding: "8px",
                    marginRight: "40px",
                    display:"flex"
                    
                  }}
                >
                  <div style={{marginRight:"30px"}}>PF3Z7GB0</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D",marginLeft:"8px" }}
                >
                  Employee Name
                </Typography>
                <div
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    padding: "8px",
                  }}
                >
                  <div>Dwarakesh S</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D",marginLeft:"8px" }}
                >
                  Service Date
                </Typography>
                <div
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    padding: "8px",
                  }}
                >
                  <span>10/05/2023</span>
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column",marginTop:'40px' }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D" ,marginLeft:"8px"}}
                >
                  Brand Name
                </Typography>
                <div
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    padding: "8px",
                  }}
                >
                  <span>Lenovo</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D",marginLeft:"8px" }}
                >
                  Handover Date
                </Typography>
                <div
                  style={{
                    marginBottom: "20px",
                    width: "260px",
                    padding: "8px",
                  }}
                >
                  <span>10/05/2023</span>
                </div>
              </div>
              <div>
              <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "#9D9D9D",marginLeft:"8px" }}
                >
                  Accessories
                </Typography>
                <div style={{ display: "flex", marginBottom: "10px",marginTop:"10px" }}>
                  <div style={{ marginRight: "20px",marginLeft:"8px" }}>Keyboard</div>
                  <div>Charger</div>
                </div>
                <div style={{ marginBottom: "10px",marginLeft:"8px" }}>Mouse</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

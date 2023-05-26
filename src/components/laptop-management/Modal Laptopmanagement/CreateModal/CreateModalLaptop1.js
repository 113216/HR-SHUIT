import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SuccessModalLaptop1 from './SuccessModalLaptop1';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import swal from 'sweetalert2';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 400,
    bgcolor: "background.paper",
    borderRadius:5,
    p: 4,
    border:"none",
    boxShodow:"none"
  };
  

export default function CreateModalLaptop1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true)
handleClose()
swal.fire({
  title: 'Successfully Added Laptop Details',
  text: '',
  icon: 'success',
  showConfirmButton: false,
});
}
  
  const handleClose1 = () => setOpen1(false);
  return (
    <div>
         <button style={{background:"#E98455",border:"none",height:30,width:130,borderRadius:10,color:"white",cursor:"pointer"}} onClick={handleOpen}>
            + Create
          </button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
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
            style={{ marginBottom: "20px", marginLeft: "200px",color:"#707070" }}
          >
            ADDING NEW LAPTOP
          </Typography>

          <div style={{ display: "flex", gap: "20px", marginLeft: "30px", }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" gutterBottom style={{color:"#9D9D9D"}}>
                  Serial No.
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field"
                  style={{marginBottom:"20px",width:"260px",backgroundColor:'#f1f5f8'}}
                  size="small"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" gutterBottom style={{color:"#9D9D9D"}}>
                  Employee Name
                </Typography>
                <TextField
                className="text-field"
                style={{marginBottom:"20px",width:"260px",backgroundColor:'#f1f5f8'}}
                  label=""
                  fullWidth
                  size="small"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" gutterBottom style={{color:"#9D9D9D"}}>
                  Service Date
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field cal"
                  style={{marginBottom:"20px",width:"260px",backgroundColor:'#f1f5f8'}}
                  size="small"
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" gutterBottom style={{color:"#9D9D9D"}}>
                  Brand Name
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field"
                  style={{marginBottom:"20px",width:"260px",backgroundColor:'#f1f5f8'}}
                  size="small"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" gutterBottom style={{color:"#9D9D9D"}}>
                  Handover Date
                </Typography>
                <TextField
                  label=""
                  fullWidth
                  className="text-field cal"
                  style={{marginBottom:"20px",width:"260px",backgroundColor:'#f1f5f8'}}
                  size="small"
                />
              </div>
              <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}}/>} label="Keyboard" style={{color:"#9D9D9D"}} />
              <FormControlLabel control={<Checkbox style={{color:"#d9d9d9"}} />} label="Charger" style={{color:"#9D9D9D"}} />
              <FormControlLabel control={<Checkbox  style={{color:"#d9d9d9"}}/>} label="Mouse" style={{color:"#9D9D9D"}}/>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Button style={{width:"280px",marginLeft:"180px",borderRadius:'10px',backgroundColor:'#383E56'}}
              variant="contained"
              disableElevation
              onClick={handleOpen1}
            >
              Done
            </Button>
          </div>
        </Box>
      </Modal>
     {/* {open1 &&  <SuccessModalLaptop1 setOpen1={setOpen1} open1={open1} handleOpen1={handleOpen1} handleClose1={handleClose1}/>} */}
    </div>
  );
}
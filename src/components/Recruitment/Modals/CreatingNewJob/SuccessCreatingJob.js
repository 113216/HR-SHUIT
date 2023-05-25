import React from 'react';
import swal from 'sweetalert2';
import Button from "@mui/material/Button";

function SuccessCreatingJob() {
  const handleClick = () => {
    swal.fire({
      title: 'New Job Created Successfully',
      text: '',
      icon: 'success',
      showConfirmButton: false,
    });
  };

  return (
    <div>
      <Button
              style={{
                width: "150px",
                marginLeft: "350px",
                borderRadius: "10px",
                backgroundColor: "#383e56",
                color: "white",
              }}
              variant="contained"
              disableElevation
              onClick={handleClick}
            >
              Apply
            </Button>
    </div>
  );
}

export default SuccessCreatingJob;

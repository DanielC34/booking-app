import "./navbar.css"
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Bookify</span>
        <Box className="navItems" sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "#f72585",
                color: "white",
              },
            }}
          >
            Signup
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "#c1121f",
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Navbar
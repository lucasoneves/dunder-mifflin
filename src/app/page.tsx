import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import Box from "@/components/Box";

export default function Home() {
  return (
      <>
      <h2>Dashboard</h2>
      <Box>
        <span>79</span>
        <h3>Total Sales</h3>
      </Box>
      <Box>
        <span>5</span>
        <h3>In progress</h3>
      </Box>
      <Box>
        <span>74</span>
        <h3>Finished</h3>
      </Box>
      <Box>
        <span>3</span>
        <h3>New clients</h3>
      </Box>
      <Box>
        <h3>Top Sales</h3>
        
      </Box>
      </>
      
  );
}

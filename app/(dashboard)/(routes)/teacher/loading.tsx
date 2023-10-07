import { Backdrop, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div>
      <Backdrop sx={{ color: "#080707", zIndex: 1 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

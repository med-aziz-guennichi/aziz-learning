import { Backdrop, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 backdrop-blur-md backdrop-filter bg-opacity-50"></div>
      <Backdrop sx={{ color: "#080707", zIndex: 1 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

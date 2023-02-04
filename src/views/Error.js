import { Alert, AlertTitle } from "@mui/material";

export function ErrorView() {
  return (
    <div className="center-view">
      <Alert severity="error" variant="filled">
        <AlertTitle style={{ fontFamily: "Roboto Mono" }}>
          Error occured while predicting the sentiment
        </AlertTitle>
        Try to:
        <ul>
          <li style={{ fontFamily: "Roboto Mono" }}>Reinstall extension.</li>
        </ul>
        <br />
        Still getting an error? Contact mansi.dwivedi@spit.ac
      </Alert>
    </div>
  );
}

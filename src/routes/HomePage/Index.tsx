import { Button, Stack, TextField } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Stack direction={"row"} gap={2}>
        <Button variant="contained" color="primary">
          contained
        </Button>
        <Button variant="outlined" color="error">
          outlined
        </Button>
        <Button color="success" variant="text">
          text
        </Button>
      </Stack>
      <Stack direction={"row"} gap={2}>
        <TextField
          label="Default title 1"
          error={true}
          helperText={"this is error"}
          variant="filled"
          size="small"
        />
        <TextField label="Default title 2" variant="outlined" size="small" />
        <TextField label="Default title 3" variant="standard" size="small" />
      </Stack>
    </div>
  );
};

export default HomePage;

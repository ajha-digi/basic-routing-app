import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
function Registration() {
    return (
        <Box>
            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-User Name"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                            >
                            </IconButton>
                        </InputAdornment>
                    }
                    label="User Name"
                />
            </FormControl>

            <Button variant="contained" color="success">
                Submit the form
            </Button>
            <Button variant="outlined" color="error">
        Error
      </Button>
        </Box>
    )
}

export default Registration
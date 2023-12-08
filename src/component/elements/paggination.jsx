import Pagination from '@mui/material/Pagination';


export const ElPaggination = () => {
    return <Pagination size="large" sx={{
        '& .MuiButtonBase-root': {
            bgcolor: "#ECECEC",
            color: "#BCBCBC"
        },
        '& .Mui-selected, & .MuiPaginationItem-previousNext': {
            bgcolor: "#E5383B !important",
            color: "white"
        }
    }} color="standard" count={5} variant="outlined" shape="rounded" />
}
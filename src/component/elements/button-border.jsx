import { Button } from "@mui/material"

export const ButtonBorder = ({ children, iconRight, style, variant = "contained", iconLeft, ...props }) => {
    return <Button
        color="error"
        variant={variant}
        className="shadow-md shadow-red-300"
        endIcon={iconRight}
        size="large" 
        startIcon={iconLeft}
        sx={{
            borderBottom: "3px solid #A63C3C",
            borderRadius: 3,
            minWidth: "",
            minHeight: "55px",
            fontWeight: "bold",
            ...style,
        }} {...props}>{children}</Button>
}
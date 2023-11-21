import { Header } from "../elements/header"
import { Footer } from "./footer"

export const Layout = ({ children }) => {
    return <div className="w-full">
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
}
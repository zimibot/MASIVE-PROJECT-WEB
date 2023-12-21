import "./style.css"

const NotFound = () => {
    return <div className="page_content flex justify-center w-full h-full">
        <h1>An error as occured.</h1>
        <h1> <span className="ascii">{`(╯°□°）╯︵ ┻━┻`}</span></h1>
        <a href="/">Go back</a>
    </div>
}

export default NotFound
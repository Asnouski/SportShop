import err404 from "../images/404.png";

const ErrorNotFound = () => {
    const view = `
    <div class="container">
        <h1>Welcome to Erorr page!</h1>
        <img src="${err404}" alt="not found">
    </div> 
    `
    return view;
}

export default ErrorNotFound;
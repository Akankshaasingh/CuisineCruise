import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPs!!!!</h1>
            <h1>Something went wrong 🫡 </h1>
        </div>
    )
   
}
export default Error;
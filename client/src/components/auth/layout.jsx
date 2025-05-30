  import {Outlet} from 'react-router-dom'
  function AuthLayot(){
    return(
        <div>
            <h1>Welcome to e-commerce</h1>
            <div>
                <Outlet/>

            </div>
        </div>
    )
  }
  export default AuthLayot
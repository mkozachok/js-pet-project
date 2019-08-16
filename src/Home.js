import React from 'react';
import {withRouter} from 'react-router-dom';


const HomePage = ({history}) => {
    const handleClick = (path) => 
        history.push(path)
    
    return (
        <div class="text-center">
           <h1>Home</h1>
           <button type="button" class="btn btn-primary btn-lg" onClick={()=> handleClick('/login')}>Login</button>
        </div>)
}

class Home extends React.Component {


    render() {
       return (
            <div class="text-center">
                <h1>Home</h1>
                <button type="button" class="btn btn-primary btn-lg" onClick={()=> this.handleClick('/login')}>Login</button>
            </div>
       );
    }
};

export default withRouter(HomePage);


-------------------
App.js
import {HomePage, LoginPage,...} from './pages'

/components/
../index.js
/pages/
    HomePage/HomePage.js
.../index.ts
    import {HomePage as Component}  from './HomePage'
    export const HomePage = withRouter(Component);
 ../index.js
    export {HomePage} from './HomePage'



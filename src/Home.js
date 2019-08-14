import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
    handleClick(path) {
        this.props.history.push(path);
    }

    render() {
       return (
            <div class="text-center">
                <h1>Home</h1>
                <button type="button" class="btn btn-primary btn-lg" onClick={()=> this.handleClick('/login')}>Login</button>
            </div>
       );
    }
};

export default withRouter(Home);

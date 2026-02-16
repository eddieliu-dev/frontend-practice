import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Route path="/" element={<Home />} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
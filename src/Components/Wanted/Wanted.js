import React from 'react';
import './Wanted.css'
const Wanted = () => {
    return (
        <div>
            <div className="wanted_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Wanted build something?</h3>
                            <p>we are always Ready to  welcome you!</p>
                        </div>
                        <div className="col-md-2 offset-6">
                            <button className="btn btn-danger mt-3 ml-5"> Get a  Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wanted;
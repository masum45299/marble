import React from 'react';
import comma from './comma.png'

const Section2 = () => {
    return (
        <div className='container-full' style={{backgroundColor:"#efefef"}}>
            <div className='container text-center py-5'>
                <img src={comma} alt=""></img>
                <div className='row'>
                <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <p style={{color:"#a1a1a1",marginTop:"35px",}}>Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus erat porttitor. </p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
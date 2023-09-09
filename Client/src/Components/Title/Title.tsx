import React from 'react';
import Style from './Title.module.css'


const Title: React.FC = () => {
    return (
       <div>
        <h1 className={Style.title}>Match Report</h1>
       </div> 
    )
};

export default Title;
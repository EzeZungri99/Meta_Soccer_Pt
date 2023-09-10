import React from 'react';
import Style from './Title.module.css'


const Title: React.FC = () => {
    return (
       <div>
        <h3 className={Style.title}>Match Report</h3>
       </div> 
    )
};

export default Title;
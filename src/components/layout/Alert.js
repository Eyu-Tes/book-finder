import React from 'react'

const Alert = ({alert}) => 
    alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className="fa fa-info-circle mr-1 rounded-0"></i>
            {alert.msg}
        </div>
    )

export default Alert 

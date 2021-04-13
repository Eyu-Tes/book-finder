import React from 'react'

const Alert = ({alert}) => 
    alert !== null && (
        <div className={`alert alert-${alert.type} rounded-0`}>
            <i className="fa fa-info-circle mr-2 rounded-0"></i>
            {alert.msg}
        </div>
    )

export default Alert 

import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => (
    <Fragment>
        <img src={spinner} alt="spinner" style={spinnerStyle}/>
    </Fragment>
)

const spinnerStyle = {
    display: 'block', 
    width: '100px', 
    margin: 'auto'
}

export default Spinner

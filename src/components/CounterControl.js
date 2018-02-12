import React, { Component } from 'react';

const counterControl = (props) => (
    <button onClick={props.onIncrementCounter}>{props.title}</button>
)

export default counterControl

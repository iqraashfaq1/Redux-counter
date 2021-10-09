
import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

var CounterValue = (props) => {

return (
<div>
   
    <h2>{props.counter}</h2>
    <Button/>
</div>
)
}
var mapState = (store) => {
 return{
     counter: store.counter
 }
}
export default connect(mapState)(CounterValue) ; //mapState means component main state ly ao store se,Actions state main changing k lye 

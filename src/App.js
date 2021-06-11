import React from "react";
import PropTypes from 'prop-types';

const App = () => {
  const progiles = [
    {name:"Taro",age:10},
    {name:"Taro",age:10},
    {name:"Hanako",age:5}
  ]
  return (
    <>
    {
      progiles.map((progiles,index) => {
        return <User name = {progiles.name} age = {progiles.age} key = {index}/>
      })
    }

    
    </>
  );
}
const User = (props) =>{
  return <div>Hi Im {props.name},{props.age}</div>
}
User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}
export default App;

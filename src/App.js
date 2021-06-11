import React from "react";

const App = () => {
  const progiles = [
    {name:"Taro",age:10},
    {name:"Hanako"}
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

//デフォルトの値を設定できる
User.defaultProps = {
  age:1
}
export default App;

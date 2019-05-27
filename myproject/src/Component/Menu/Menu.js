import React from 'react';
import './Menu.css'
const Menu = (props) => {
    const { items  , deleteItem} = props;

return (
 props. items.map((item,index ) => {

        return (
       
<div className="container" >


<div >
<button className="button" onClick={() => deleteItem(index)}>
          { item.itemDesc}   <br/>
    {item.itemPrice}<br/>
    <  img className="img"  height="50px" width="100px" size="50%" src= {item.itemImage}/>

  </button></div>
   
   </div>
   
   );}))
   
 
         }      
export default Menu;



   
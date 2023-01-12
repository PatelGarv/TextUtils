import React from "react";

export default function Alert(props) {


    const capitalize = (word) =>{
        let temptext =  word.toLowerCase();
        return (temptext.charAt(0).toUpperCase() + temptext.slice(1));
    }


  return (
  
      (props.alert) && (<div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)} : </strong>
        {props.alert.msg}
      </div>)

  );
}

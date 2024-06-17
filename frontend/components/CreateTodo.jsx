import { useState } from "react";

export function CreateTodo(){
  
  const[title,settitle] = useState("");
  const[description,setdescription] = useState("");

  return(
    <div>
      <input type = "text" placeholder = "title" onChange={function(e){
        const value = e.target.value;
        settitle(value);
      }}></input><br /><br />
      <input type = "text" placeholder = "description" onChange={function(e){
        const value = e.target.value;
        setdescription(value);
      }}></input><br /><br />
      <button onClick={async function(){
        const res = await fetch("http://localhost:3000/todos",{
          method : "POST",
          body : JSON.stringify({
            title : title,
            description : description
          }),
          headers : {
            "content-type" : "application/json"
          }
        });
        const data = await res.json();
        alert("todo added");

      }}>Add Todo</button>
    </div>
  );
}
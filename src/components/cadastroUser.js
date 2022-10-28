import { useEffect } from "react";
import { useState } from "react";

function cadastroUser (){
    fetch("http://localhost:3001/users", method ="POST")
    .then((res) => res.json())
    .then((data) => {
        data.map(() => {
           document.write(
            `{name}`,`{email}`,`{apartament}`,`{password}`,`{photo}`
           )
        }) 
    })
}

export default cadastroUser;
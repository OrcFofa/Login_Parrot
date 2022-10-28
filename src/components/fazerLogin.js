import { useEffect } from "react";
import { useState } from "react";

function fazerLogin (){
    fetch("http://localhost:3001/login", method ="POST")
    .then((res) => res.json())
    .then((data) => {
        data.map(() => {
           document.write(
            `{email}`,`{password}`
           )
        }) 
    })
}

export default fazerLogin;
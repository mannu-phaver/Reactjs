import React from "react";

function MemberCard({id,name,role}){
    console.log(name,role)
    return(
        <>
        <h6>Id:{id}</h6>
        <h6>Name:{name}</h6>
        <h6>Role:{role}</h6>
        </>
    )
}

export default MemberCard
import React from 'react'

function SongInformation({name, id}){

    return(
        <>
        <li>{name}, ID: {id}</li>
        </>
    )
}

export default SongInformation
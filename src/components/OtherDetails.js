import React from "react";

function OtherDetails({hog}) {
    return (
        <>
        <h3>{hog.specialty}</h3>
        <h4>{hog.weight}</h4>
        <p>{hog.greased}</p>
        <p>{hog["highest medal achieved"]}</p>
        </>
    )
}

export default OtherDetails;
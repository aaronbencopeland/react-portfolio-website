import React from 'react'

function Resume() {
    return (
        // https://stackoverflow.com/questions/45596329/display-pdf-in-reactjs
        // height should be 600 not 100%

        <>
            <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="600">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </>
    )
}

export default Resume
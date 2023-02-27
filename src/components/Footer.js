import React from 'react'
import { Card } from 'react-bootstrap'

function Footer() {
    return (
        // https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_card_contextual&stacked=h
        <div>

            <br />
            <Card.Footer class="card bg-dark text-white" className="text-muted">
            { /** Note that adding the fixed-bottom class will fix the header to the bottom of the page.  Unfortunately, this is an imperfect solution that causes other problems. */}
                <br />
                <center>&copy; 2023 Aaron Ben Copeland All Rights Reserved</center>
                <br />
            </Card.Footer>

        </div>
    )
}

export default Footer
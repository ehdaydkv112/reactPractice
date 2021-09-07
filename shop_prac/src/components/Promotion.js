import {  Jumbotron, Button  } from 'react-bootstrap';

const Promotion = (props) => {

    return (
        <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
        This site offer a biggest sale product in the Korea.
        We hope you to enjoy here
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
    )

};

export default Promotion;
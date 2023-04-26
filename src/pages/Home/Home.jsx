import { Container } from "components/Container/Container";
import { Title } from "./Home.styled";
import { Button } from "components/Button/Button";
import { Link } from "react-router-dom";
import { Bar } from "components/ButtonBar/ButtonBar.styled";

 export const Home = () =>{
    return(<>
    <Container>
        <Bar><Title>Welcome to the main page of the Tweets app!</Title>
    <Bar><Link to='users'><Button>go to Hetman's tweets</Button></Link></Bar></Bar>
    
    

    
    </Container>
    </>)
}


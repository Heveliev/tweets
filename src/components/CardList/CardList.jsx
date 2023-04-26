
import { Item, List } from "./CardList.styled";
import { CardItem } from "components/CardItem/CardItem";
export const CardList = ({tweets}) =>{
    return (<>
    <List>
        {tweets.map(tweet =>(<Item key={tweet.id}><CardItem  tweet={tweet}
        /></Item>))}
    </List>
    </>)
}
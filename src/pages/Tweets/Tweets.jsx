import { Button } from "components/Button/Button";
import { ButtonBar } from "components/ButtonBar/ButtonBar";
import { Bar } from "components/ButtonBar/ButtonBar.styled";
import { CardList } from "components/CardList/CardList";
import { Container} from "components/Container/Container";
import { Div } from "components/Div/Div.styled";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoading, getVisibleTweets } from "redux/tweets/tweets-selectors";

import { fetchAllTweets } from "redux/tweets/tweets-thunk";




 const Tweets = ()=>{
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading)
    const tweets = useSelector(getVisibleTweets)
    const tweetsInPage = 3;

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState([]);

    useEffect(()=>{
      try {
        const savedTweets = JSON.parse(localStorage.getItem('persist:tweets'));
      const savedTweetsObj = JSON.parse(savedTweets['items']);
      if (!savedTweetsObj.length) {
        dispatch(fetchAllTweets());
      }
      } catch (error) {
        alert(`Sorry, pls reload website error:${error}`)
      }
      
  },[dispatch])

    useEffect(() => {
        setTotalPages(Math.ceil(tweets.length / tweetsInPage));
    
        setData([...tweets.slice(0, tweetsInPage * page)]);
      }, [tweets, page]);
    
      const selectTweets= page => {
        const startIndex = (page - 1) * tweetsInPage;
        return tweets.slice(startIndex, startIndex + tweetsInPage);
      };

      const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        setData(prevData => [...prevData, ...selectTweets(nextPage)]);
      };

      const handleFilter= () => {
        setPage(1);
      };

    return(<Container >

        <Div>
          <Link to="/"><Button >Back</Button></Link></Div>
        {isLoading ? <Loader/> : (<><Div><ButtonBar onClick={handleFilter}/></Div>
        <CardList tweets={data}/>
        {page < totalPages && tweets.length > 0 && (
            <Div><Bar><Button onClick={handleLoadMore}>Load More</Button></Bar></Div>)}</>)}
        

        
        

    </Container >)

}

export default Tweets



import { useDispatch } from "react-redux";
import { CardBox,CardImgBox,CardTextBox,CardBtn } from "./CardItem.styled"
import { toggleIsFollowed } from "redux/tweets/tweets-slice";
export const CardItem = ({tweet}) => {
  const dispatch = useDispatch()
  const {avatar,tweets,followers,id, isFollowed} = tweet;
  const handleIsFollowed = () => dispatch(toggleIsFollowed(id));
    return (<>
    <CardBox>
      <CardImgBox>
        <img 
        width='62px' height='62px' 
        src={avatar} alt="hetman avatar" />
      </CardImgBox>
      <CardTextBox>
        <p>{tweets} Tweets</p>
        <p>{followers.toLocaleString("en-US")} Followers</p>
      </CardTextBox>
      <CardBtn
        type="button"
        className={isFollowed && 'isFollowed'}
        onClick={handleIsFollowed}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </CardBtn>
    </CardBox></>)
}
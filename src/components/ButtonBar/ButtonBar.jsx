import { Button } from "components/Button/Button";
import { Bar } from "./ButtonBar.styled"
import { getFilter } from "redux/filter/filter-selector";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter} from 'redux/filter/filter-slice';
const buttons = [
    { title: 'all', type: 'all' },
    { title: 'follow', type: 'follow' },
    { title: 'followings', type: 'followings' },
  ];
  export const ButtonBar = ({ onClick }) => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const handleFilterChange = (filter) => {
      dispatch(setStatusFilter(filter));
      onClick();
    };
    return (
      <Bar>
        {buttons.map((item) => (
          <Button
            onClick={() => handleFilterChange(item.type)}
            selected={filter === item.type}
            key={item.title}
          >
            {item.title}
          </Button>
        ))}
      </Bar>
    );
  };
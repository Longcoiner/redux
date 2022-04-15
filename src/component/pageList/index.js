import { useState } from "react";
import {
  Filter,
  Research,
  Button,
} from "./styled";

import {addTodo} from '../../store/reducers/todoSlice'
import {useDispatch} from 'react-redux'

function PageList({
  
  $width = "100%",
  aligin,
  ...rest
}) {
  const [input,setInput]=useState('')
  const dispatch =useDispatch()
  const handleChange = (e) => {
    setInput(e.target.value);

  };

  const handleClick = () => {
    dispatch(addTodo(input))
  };

  return (
    <Filter>
      <Research
        placeholder="Research"
        onChange={(e) => handleChange(e)}
        $width="70%"
      ></Research>

      <Button $width="10%" onClick={handleClick}>
        Add
      </Button>
    </Filter>
  );
}
export default PageList;
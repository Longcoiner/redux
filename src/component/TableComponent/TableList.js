import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTodo,
  todoSelector,
  changeDay,
} from "../../store/reducers/todoSlice";
import {
  Table,
  Tr,
  Th,
  Td,
  Select,
  Daysection,
  Theday,
} from "../pageList/styled";

const today = new Date();
const date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
const TableList = ({}) => {
  const dispatch = useDispatch();
  const [day, setDay] = useState("");
  const [dataday, setDataDay] = useState([]);

  const data = useSelector(todoSelector);
  
//   const handleData = (day)=>{
//       switch (day){
//           case 'today':
//           const today = data.filter(d=>{
//               return d.day === 'today'
//           })

//           setDataDay(today)
//           break;
//       }
//   }

  const handleData = (day) => {
    switch (day) {
      case "lastday":
        const lastDay = data.filter((d) => {
          return d.day === "lastday";
        });
        setDataDay(lastDay);
        break;
      case "today":
        const today = data.filter((d) => {
          return d.day === "today";
        });
        setDataDay(today);
        break;
      case "tomorrow":
        const tomorrow = data.filter((d) => {
          return d.day === "tomorrow";
        });
        setDataDay(tomorrow);
        break;
      default:
    }
  };
  console.log(dataday);

  useEffect(() => {
    setDataDay(data);
    // dispatch(changeDay());
    handleData(day);

  }, [day]);

//   useEffect(() => {
//     handleData(day);
//   }, [day]);

  const handleChange = (e, id) => {
    dispatch(changeTodo({ value: e.target.value, id }));
  };

  const handleClick = (e) => {
    setDay(e.target.name);
  };

  return (
    <Table>
      <Daysection>
        <Theday onClick={handleClick} name="lastday">
          Lastday
        </Theday>
        <Theday onClick={handleClick} name="today">
          Today
        </Theday>
        <Theday onClick={handleClick} name="tomorrow">
          Tommorow
        </Theday>
      </Daysection>

      <Tr>
        <Th>Title</Th>
        <Th>Status</Th>
      </Tr>
      {dataday.map((value, key) => {
        return (
          <Tr key={value.id}>
            <Td>{value.title}</Td>
            <Td>
              <Select
                key={value.id}
                value={value.status}
                aria-label="Default select example"
                onChange={(e) => handleChange(e, value.id)}
              >
                <option value="done">Done</option>
                <option value="notStart">Not Start</option>
                <option value="inprogress">inprogress</option>
              </Select>
            </Td>
          </Tr>
        );
      })}
    </Table>
  );
};

export default TableList;

import { useState } from "react";
import minus from "./icons/minus.svg"
import plus from "./icons/plus.svg"


const TreeView = ({ data }:any) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ul>
        
      <li onClick={() => setIsActive(!isActive)}><img src={data?.items && (isActive ? minus : plus)} />{data?.text}</li>
      {isActive &&
        data?.items?.map((item:any,index:any) => {
          return <TreeView data={item} key={index} />;
        })}
    </ul>
  );
};
export default TreeView;

import React,{useState}  from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavFilter,MappingData } from "../Imports/Index";

const ContextPanel = ({ finder,Mapping }) =>{
    const [data,setData] = useState([])

    NavFilter(Mapping, finder, setData);
    
    return (
        <>
        {data.map(({ id, Subject, Mark,Teacher }) => (
            <MappingData id={id} subject={Subject} mark={Mark} teacher={Teacher}  key ={id} />
        ))}
        </>
    )
}

export default ContextPanel;



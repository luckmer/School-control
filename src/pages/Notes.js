import React from 'react'
import { useSelector } from "react-redux";
import styled from "styled-components";


const Div = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

function Notes(){
    
    const state = useSelector(state => state.CreateNewTaskSlice.filteredData);
    const Mapping = state.map(({ data }) => data.data.Mark);

    const FilterMark = (array, number) =>{
        let a = array.filter((a) => a.toString() === number.toString()).length;
        return a;
    }

    const mark1 = FilterMark(Mapping,1);
    const mark2 = FilterMark(Mapping,2);
    const mark3 = FilterMark(Mapping,3);
    const mark4 = FilterMark(Mapping,4);
    const mark5 = FilterMark(Mapping,5);
    const mark6 = FilterMark(Mapping,6);
    
    return (
        <Div>
            <h3>mark 1 - { mark1 }</h3>
            <h3>mark 2 - { mark2 }</h3>
            <h3>mark 3 - { mark3 }</h3>
            <h3>mark 4 - { mark4 }</h3>
            <h3>mark 5 - { mark5 }</h3>
            <h3>mark 6 - { mark6 }</h3>
        </Div>
    )
}

export default Notes

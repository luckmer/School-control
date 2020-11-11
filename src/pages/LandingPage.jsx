import React, { useState } from "react";
import {PaginatingControl,Paginating,Context} from "../Imports/Index";
import { Container, Cards, Finder } from "../styles/LandingStyle";
import { useSelector } from "react-redux";

const LandingPage = () =>{
    
    const state = useSelector(state => state.CreateNewTaskSlice.Data);
    const Mapping = state.map(({ data }) => data.data);
    const test = Mapping.map(({ Mark }) => Mark).toString();
    const filteredData = [...new Set(test)];
    
    const [LimitControl] = useState(2);
    
    const [finder, setFinder] = useState({
        _filterMark: "",get filterMark()
        {
            return this._filterMark;
        },
        set filterMark(value)
        {
            this._filterMark = value;
        },
            filterSubject: ""
    });
    
    const { filterMark, filterSubject } = finder;

    const {paginate, page,ContextView
    } = PaginatingControl({
        LimitControl, Mapping
    });
    


    const handleChange = (e) => {
        setFinder({ ...finder, [e.target.name]: e.target.value });
    };


    return (
        <Container>
            <Finder page={page}>
                <label htmlFor={filterSubject}>
                    <input
                        type="text"
                        name="filterSubject"
                        value={filterSubject}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor={filterMark}>
                    <select
                        onChange={handleChange}
                        name="filterMark"
                        value={filterMark}
                    >
                        <option value="">Select Mark</option>
                        {filteredData.map((item, i) => (
                            <option key={i}>{item}</option>
                        ))}
                    </select>
                </label>
            </Finder>
            <Cards>
                <Context Mapping ={ContextView} finder ={finder}   />
            </Cards>
            <Paginating
                paginate={paginate}
                LimitControl={LimitControl}
                totalPosts={state.length}
            />
        </Container>
    );
}

export default LandingPage;


// const [finder, setFinder] = useState({
//     filterMark: "", filterSubject: ""
// });
// const {
//     filterMark, filterSubject
// } = finder;

// const {paginate, page,ContextView
// } = PaginatingControl({
//     LimitControl, Mapping
// });
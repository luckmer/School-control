import React, { useState } from "react";
import {
    PaginatingControl,
    Paginating,
    NavFilter,
    Context,
} from "../Imports/Index";
import { Container, Cards, Finder } from "../styles/LandingStyle";
import { useSelector } from "react-redux";
function LandingPage()
{
    const state = useSelector(state => state.CreateNewTaskSlice.filteredData);
    const [LimitControl] = useState(8);
    const [finder, setFinder] = useState({ filterMark: "", filterSubject: "" });

    const { filterMark, filterSubject } = finder;
    const {  paginate, page,ContextView } = PaginatingControl({
        LimitControl,
        state,
    });
    const test = state.map(({ Mark }) => Mark).toString();

    const filteredData = [...new Set(test)];

    const handleChange = (e) => {
        setFinder({ ...finder, [e.target.name]: e.target.value });
    };

    NavFilter(finder);
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
                {ContextView.map(
                    ({ id, Subject, Teacher, Mark, Description }) => (
                        <Context
                            id={id}
                            subject={Subject}
                            teacher={Teacher}
                            mark={Mark}
                            description={Description}
                            key={id}
                        />
                    )
                )}
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

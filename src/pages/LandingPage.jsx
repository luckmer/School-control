import React, { useState } from "react";
import {
    PaginatingControl,
    Paginating,
    NavFilter,
    DeleteEdit,
    Context,
} from "../Imports/Index";
import { Container, Cards, Finder } from "../styles/LandingStyle";

function LandingPage() {
    const [LimitControl] = useState(8);
    const [finder, setFinder] = useState({ filterMark: "", filterSubject: "" });
    const { Delete, Edit, find } = DeleteEdit();

    const { filterMark, filterSubject } = finder;
    const { ContextView, paginate, page } = PaginatingControl({
        LimitControl,
        find,
    });
    const test = find.map(({ Mark }) => Mark);
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
                            delete={Delete}
                            Edit={Edit}
                        />
                    )
                )}
            </Cards>
            <Paginating
                paginate={paginate}
                LimitControl={LimitControl}
                totalPosts={find.length}
            />
        </Container>
    );
}

export default LandingPage;

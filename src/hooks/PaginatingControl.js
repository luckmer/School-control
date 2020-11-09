import { useState } from "react";

const PaginatingControl = ({ LimitControl, Mapping }) =>{
    
    const [page, setPage] = useState(1);

    const Length = page * LimitControl;
    const Post = Length - LimitControl;
    const ContextView = Mapping.slice(Post, Length);
    const paginate = (i) => setPage(i);
    return { ContextView, paginate, page };
};

export default PaginatingControl;
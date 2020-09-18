import { useState } from "react";

export default function PaginatingControl({ LimitControl, find }) {
    const [page, setPage] = useState(1);

    const Length = page * LimitControl;
    const Post = Length - LimitControl;
    const ContextView = find.slice(Post, Length);
    const paginate = (i) => setPage(i);
    return { ContextView, paginate, page };
}

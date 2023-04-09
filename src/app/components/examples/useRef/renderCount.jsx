import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [state, setState] = useState(false);
    const toggleState = () => {
        setState(!state);
    };

    // useEffect(() => setRenderCount((prevState) => prevState + 1));
    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Toggle state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;

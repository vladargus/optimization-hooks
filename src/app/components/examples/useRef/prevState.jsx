import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [state, setState] = useState("false");
    const toggleState = () => {
        setState((prevState) => (prevState === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevState.current = state;
    }, [state]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Previous State: {prevState.current}</p>
            <p>Current State: {state}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Toggle state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

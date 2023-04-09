import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current); // <input type="email" class="form-control" id="email">
        console.log(inputRef.current.clientWidth); // 1260
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />

            <label htmlFor="" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary mt-3" onClick={handleClick}>
                Focus input
            </button>
            <button
                className="btn btn-secondary mt-3 ms-3"
                onClick={handleClickWidth}
            >
                Change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

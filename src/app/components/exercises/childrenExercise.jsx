import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const NumberingComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { num: index + 1 });
    });
};
NumberingComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <NumberingComponent>
                <Component />
                <Component />
                <Component />
            </NumberingComponent>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>Компонент списка {num}</div>;
};
Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;

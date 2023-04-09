import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const classes = "btn btn-" + (isAuth ? "secondary" : "primary");

    return (
        <>
            {isAuth ? (
                <button className={classes} onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className={classes} onClick={onLogin}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;

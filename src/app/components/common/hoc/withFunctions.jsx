import React, { useEffect, useState } from "react";
import CardWrapper from "../Card";

const withFunctions = (SimpleComponent) => (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!localStorage.getItem("auth"));
    }, []);

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth((prevState) => !prevState);
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth((prevState) => !prevState);
    };

    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;

import React from "react";

const Error: React.FC<{
    error?: any,
    setError?: (val: string) => void
}> = ({error, setError}) => {

    console.log('error', error, setError);
    return <div>
        <p>Component Error, {error}</p>
        <button onClick={() => {
            setError && setError(new Date().valueOf().toString());
        }}>
            error.
        </button>
    </div>;
};

export default Error;
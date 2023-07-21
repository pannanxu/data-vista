import React from "react";


const Example: React.FC<{
    error?: any,
    setError?: (val: string) => void
}> = ({error, setError}) => {


    return <div>

        <p>error：{error}</p>

        <button onClick={() => {
            setError && setError(new Date().valueOf().toString())
        }}>client
        </button>
    </div>
}

export default Example
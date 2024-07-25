import { type } from "os";
import React from "react";

type MyComponentProps = {
    name: string | null;
    age: number;
};

type PrintData  = MyComponentProps & {
    print: () => void;
};

const ChildTypeComponent: React.FC<PrintData> = ({ name, age, print }) => {
    return (
        <>
            <div>
                Got the name {name} Got the age {age}
            </div>
            <button onClick={() => print()}>Print</button>
        </>
    );
};
export default ChildTypeComponent;

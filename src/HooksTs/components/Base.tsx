import {FC, useState, useEffect, useCallback, useMemo, MouseEvent} from "react";
import {DummyData} from "./DummyData"

const Base: FC = () => {

    const [dummy, setDummy] = useState<number[]>([])

    useEffect(() => {
        setDummy(DummyData);
        console.log("data fetched");
    }, []);

    //by default it will render only once or creates the referece only once.
    //use function in setter to avoid creation of new addOne when state of dummy changes.
    //learnt new syntax
    //useCallback returns the function.
    const addOne = useCallback((name: string) => (e: MouseEvent<HTMLButtonElement>) => {
        console.log("name passed: ", name)
        setDummy(prevDummy => [...prevDummy, prevDummy.length + 1])
    }, []);

    //to avoid creation of reference of sum everytime use useMemo.
    //useMemo returns the value of the logio
    const sum = useMemo(() => dummy.reduce((a, v) => a + v, 0), [dummy]);

    return (
        <div>{JSON.stringify(dummy)}
            <p>{sum}</p>
            <button onClick={addOne("React")}>Add One To the Dummy</button>
        </div>
    );
}

export default Base;
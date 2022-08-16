import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ChipInput} from "./ChipInput";
import {MainInput} from "./MainInput";

type ChipsInputPropsType = {
    chips: string
    setChips: Dispatch<SetStateAction<string>>
}
export type ErrorType = {
    text: string
    indices: Array<number>
}

export const ChipsInput = ({chips, setChips}: ChipsInputPropsType) => {
    const [chipsArr, setChipsArr] = useState(chips.split(',').filter(chip => chip === ','))
    const [error, setError] = useState<ErrorType>({text: '', indices: []})

    useEffect(() => {
        setChips(chipsArr.filter(chip => chip.length).join(', '))
    }, [chipsArr])

    return (
        <>
            <div className='tags-input'>
                <ChipInput chipsArr={chipsArr}
                           setChipsArr={setChipsArr}
                           error={error}
                           setError={setError}/>
                <MainInput chipsArr={chipsArr}
                           setChipsArr={setChipsArr}
                           setError={setError}/>
            </div>
            <div className='error-text'>{error.text}</div>
        </>
    );
};
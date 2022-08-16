import React, {Dispatch, SetStateAction} from 'react';
import {chipEditHandler} from "../helpers/chipEditHandler";
import {chipOnBlurHandler} from "../helpers/chipOnBlurHandler";
import {ErrorType} from "./ChipsInput";

type ChipInputPropsType = {
    chipsArr: Array<string>
    setChipsArr: Dispatch<SetStateAction<Array<string>>>
    error: ErrorType
    setError: Dispatch<SetStateAction<ErrorType>>
}

export const ChipInput = ({chipsArr, setChipsArr, error, setError}: ChipInputPropsType) => {

    const chipEdit = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        chipEditHandler(e, index, chipsArr, setChipsArr)
    }

    const removeChip = (index: number) => {
        const updatedChips = chipsArr.filter((chip, chipIndex) => chipIndex !== index)
        setChipsArr(updatedChips)
    }

    const chipOnBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
        chipOnBlurHandler(e, index, chipsArr, error, setChipsArr, setError)
    }

    return (
        <ul className='tags'>
            {chipsArr
                .filter(chip => chip.length)
                .map((chip, i) =>
                    <li key={i} className={`${error.indices.includes(i) ? 'tag error' : 'tag'}`}>
                        <input
                            className='chip-input'
                            value={chip}
                            onChange={(e) => chipEdit(e, i)}
                            onBlur={(e) => chipOnBlur(e, i)}
                        />
                        <span className='tag-close-icon'
                              onClick={() => removeChip(i)}>x</span>
                    </li>)
            }
        </ul>
    );
};

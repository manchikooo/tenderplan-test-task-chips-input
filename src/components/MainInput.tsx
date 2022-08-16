import React, {Dispatch, SetStateAction} from 'react';
import {onKeyUpHandler} from "../helpers/onKeyUpHandler";
import {ErrorType} from "./ChipsInput";
import {addChipHandler} from "../helpers/addChipHandler";

type MainInputPropsType = {
    chipsArr: Array<string>
    setChipsArr: Dispatch<SetStateAction<Array<string>>>
    setError: Dispatch<SetStateAction<ErrorType>>
}

export const MainInput = ({chipsArr, setChipsArr, setError}: MainInputPropsType) => {

    const addChip = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
        addChipHandler(e, setError, setChipsArr, chipsArr)
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        onKeyUpHandler(e, index, setChipsArr, chipsArr, addChip)
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== '') {
            addChip(e)
        }
    }

    return (
        <>
            <input
                type='text'
                placeholder='Введите ключевые слова'
                onKeyUp={(e) => onKeyUp(e, chipsArr.indexOf(chipsArr[chipsArr.length - 1]))}
                onBlur={onBlurHandler}
            />
        </>
    );
};

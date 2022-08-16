import React, {Dispatch, SetStateAction} from "react";
import {quotesCount} from "./quotesCountHandler";

export const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>,
                               index: number,
                               setChipsArr: Dispatch<SetStateAction<Array<string>>>,
                               chipsArr: Array<string>,
                               addChip: (e: React.KeyboardEvent<HTMLInputElement>) => void) => {
    const inputValue = e.currentTarget.value
    const count = quotesCount(inputValue)
    if (inputValue === '' && e.key === 'Backspace') {
        setChipsArr(chipsArr.filter((chip, i) => i !== index))
    }
    if (inputValue[inputValue.length - 1] === ',' && inputValue !== ',' && count % 2 === 0) {
        addChip(e)
    }
}
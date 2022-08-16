import React, {Dispatch, SetStateAction} from "react";
import {quotesCount} from "./quotesCountHandler";
import {ErrorType} from "../components/ChipsInput";

export const addChipHandler = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>,
                               setError: Dispatch<SetStateAction<ErrorType>>,
                               setChipsArr: Dispatch<SetStateAction<Array<string>>>,
                               chipsArr: Array<string>) => {
    const inputValue = e.currentTarget.value
    const count = quotesCount(inputValue)
    if (count % 2 !== 0) {
        setError({
            text: 'Закройте кавычки с двух сторон',
            indices: [chipsArr.indexOf(chipsArr[chipsArr.length - 1])]
        })
    } else {
        if (e.type === 'keyup') {
            setChipsArr([...chipsArr, inputValue.slice(0, -1)])
        } else if (e.type === 'blur') {
            setChipsArr([...chipsArr, inputValue])
        }
        e.currentTarget.value = ''
        setError({text: '', indices: []})
    }
}
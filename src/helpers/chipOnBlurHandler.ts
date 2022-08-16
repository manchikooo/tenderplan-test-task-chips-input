import React, {Dispatch, SetStateAction} from "react";
import {ErrorType} from "../components/ChipsInput";
import {splitChip} from "./splitChip";

export const chipOnBlurHandler = (e: React.FocusEvent<HTMLInputElement>,
                                  index: number,
                                  chipsArr: Array<string>,
                                  error: ErrorType,
                                  setChipsArr: Dispatch<SetStateAction<Array<string>>>,
                                  setError: Dispatch<SetStateAction<ErrorType>>,
) => {
    const isQuotesClosed = (e.target.value.match(/"/g) || []).length % 2 === 0
    if (isQuotesClosed) {
        const chipsClone = chipsArr.slice()
        chipsClone.splice(index, 1, ...splitChip(e.target.value))
        setChipsArr(() => chipsClone)
        setError({text: '', indices: error.indices.filter(i => i !== index)})
    } else {
        setError({text: 'Закройте кавычки с двух сторон', indices: [...error.indices, index]})
    }
}
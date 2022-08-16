import React, {Dispatch, SetStateAction} from "react";

export const chipEditHandler = (e: React.ChangeEvent<HTMLInputElement>,
                         index: number,
                         chipsArr: Array<string>,
                         setChipsArr: Dispatch<SetStateAction<Array<string>>>) => {
    const editedChips = chipsArr.map((chip, chipIndex) => {
        return chipIndex === index ? e.target.value : chip;
    }).filter(chip => chip !== '')
    setChipsArr(editedChips)
}

import useValidation from '@/components/hooks/useValidation'
import { createContext, useCallback, useContext, useState } from 'react'
import React from 'react'

const ValidationContext = createContext()

export const ValidationProvider = ({ children }) => {
    const quantityRegex = /^([1-9]|10?)$/
    // const ageValidation = handleValidation(ageRegex);
    const [quantityValue, setQuantityValue, isQuantityInvalid] = useValidation(quantityRegex);

    // validate location
    const locationRegex = /^[a-zA-Z0-9\s,.'":;¡!?¿-]{4,35}$/
    const [originValue, setOriginValue, isOriginInvalid] = useValidation(locationRegex);
    const [destinationValue, setDestinationValue, isDestinationInvalid] = useValidation(locationRegex);
    return (
        <ValidationContext.Provider value={{
            useValidation,
            quantityValue, setQuantityValue, isQuantityInvalid,
            originValue, setOriginValue, isOriginInvalid,
            destinationValue, setDestinationValue, isDestinationInvalid
        }}>
            {children}
        </ValidationContext.Provider>
    )
}


export const useValidationContext = () => {
    return useContext(ValidationContext)
}
export const isValidDate = isoString => 
     !isNaN(Date.parse(isoString))
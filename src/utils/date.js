import moment from 'moment';

moment.locale('de');

export const isValidDate = isoString => 
     !isNaN(Date.parse(isoString))

export const getRelativeDate = (isoString, dateToCompare = undefined) => {
    const momentDate = moment(isoString);
    const momentCompare = moment(dateToCompare);

    if(momentCompare.diff(momentDate, 'days') > 7) 
        return momentDate.format('DD.MM.YYYY HH:mm') + ' Uhr'

    return momentDate.from(momentCompare)
}
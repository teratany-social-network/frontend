
export const convertDate = (date: string): string => {
    const originalDate = new Date(date);
    const day = String(originalDate.getDate()).padStart(2, '0');

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = monthNames[originalDate.getMonth()];
    const year = originalDate.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate
}



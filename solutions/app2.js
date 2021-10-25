const HU = {
    date(date) {
        return Intl.DateTimeFormat('hu-HU').format(date)
    },
    curreny(number) {
        return Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(number)
    },
    list(arr) {
        const str = arr.join(', ');
        const lastIndex = str.lastIndexOf(', ');
        return str.slice(0, lastIndex) + ' és ' + str.slice(lastIndex + 2);
    }
};

export default HU;

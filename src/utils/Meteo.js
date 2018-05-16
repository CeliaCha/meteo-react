export default class Meteo {
    static getFiveDays (datas, dayNumber) {
        return (datas[dayNumber*8].weather[0].icon)
    }
}


export function construct(resultObj) {
    const result = {
        _id: undefined,
        _competitionLocation: undefined,
        _competitionName: undefined,
        _competitionPlacement: undefined,
        _date: undefined,
        _discipline: undefined,
        _memberId: undefined,
        _resultType: undefined,
        _time: undefined,

        setProperties() {
            this._id = resultObj.id;
            this._competitionLocation = resultObj.competitionLocation;
            this._competitionName = resultObj.competitionName;
            this._competitionPlacement = resultObj.competitionPlacement;
            this._date = resultObj.date;
            this._discipline = resultObj.discipline;
            this._memberId = resultObj.memberId;
            this._resultType = resultObj.resultType;
            this._time = resultObj.time;
        },

        timeToMilliseconds() {
            const time = resultObj.time;
            const [minutes, seconds] = time.split(":").map(parseFloat);
            const milliseconds = (minutes * 60 + seconds) * 1000;
            return milliseconds;
        },

        showTimeAsString() {
            const milliseconds = this._time;
            const minutes = Math.floor(milliseconds / 60000);
            const seconds = ((milliseconds % 60000) / 1000).toFixed(2);
            return `${minutes}:${seconds.padStart(5, "0")}`;
        },

        isTraining() {
            return (this._resultType = "training" ? true : false);
        },
    };
    result.setProperties();
    result.timeToMilliseconds();

    return result;
}

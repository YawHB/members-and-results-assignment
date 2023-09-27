import { findMemberById } from "./script.js";

export function construct(resultObj) {
    const resultObject = {
        _id: resultObj.id,
        _competitionLocation: resultObj.competitionLocation,
        _competitionName: resultObj.competitionName,
        _competitionPlacement: resultObj.competitionPlacement,
        _date: resultObj.date,
        _discipline: resultObj.discipline,
        _memberId: resultObj.memberId,
        _resultType: resultObj.resultType,
        _time: resultObj.time,

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

        isCompetition() {
            return (this._resultType = "competition" ? true : false);
        },
    };

    const memberFound = findMemberById(resultObject._memberId);
    // console.log(memberFound);


    Object.defineProperties(resultObject, {
        _id: {
            writable: false,
        },
        _member: {
            value: memberFound,
        },
        setProperties: {
            enumerable: false,
        },
        timeToMilliseconds: {
            enumerable: false,
        },
        showTimeAsString: {
            enumerable: false,
        },
        isTraining: {
            enumerable: false,
        },
        isCompetition: {
            enumerable: false,
        },
    });

    return resultObject;
}

export function construct(memberObj) {
    const MemberObject = {
        _firstName: memberObj.firstName,
        _lastName: memberObj.lastName,
        _active: memberObj.isActiveMember,
        _competitive: memberObj.isCompetitive,
        _birthday: undefined,
        _age: undefined,
        _email: memberObj.email,
        _gender: memberObj.gender,
        _image: memberObj.image,
        _hasPayed: memberObj.hasPayed,
        _id: memberObj.id,

        name() {
            return `${this._firstName} ${this._lastName}`;
        },

        age() {
            const today = new Date();
            const birthDateObj = new Date(memberObj.dateOfBirth);

            const age = today.getFullYear() - birthDateObj.getFullYear();

            return age
        },

        getBirthDate() {
            const inputDate = new Date(memberObj.dateOfBirth);

            const day = inputDate.getDate();
            const month = inputDate.toLocaleDateString("da", {
                month: "short",
            });
            const year = inputDate.getFullYear();

            this._birthday = `${day} ${month} ${year}`;
        },

        isJunior() {
            return this._age > 18;
        },
        isSenior() {
            return this._age > 18;
        },
    };

    MemberObject.getBirthDate();
    MemberObject._age = MemberObject.age();
    MemberObject.isJunior();
    MemberObject.isSenior();

    Object.defineProperties(MemberObject, {
        _id: {
            writable: false,
        },
        name: {
            enumerable: false,
        },
        _image: {
            enumerable: false,
        },
    });

    return MemberObject;
}

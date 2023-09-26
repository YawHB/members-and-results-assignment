export function construct(memberObj) {
    const MemberObject = {
        _firstName: memberObj.firstName,
        _lastName: memberObj.lastName,
        _active: memberObj.isActiveMember,
        _competitive: memberObj.isCompetitive,
        _birthday: undefined,
        _age: undefined,
        _junior: undefined,
        _senior: undefined,
        _email: memberObj.email,
        _gender: memberObj.gender,
        _image: memberObj.image,
        _hasPayed: memberObj.hasPayed,


        name() {
            return `${this._firstName} ${this._lastName}`;
        },

        getAge() {
            const today = new Date();
            const birthDateObj = new Date(memberObj.dateOfBirth);

            const age = today.getFullYear() - birthDateObj.getFullYear();

            this.age = age;
        },

        getBirthdate() {
            const inputDate = new Date(memberObj.dateOfBirth);

            const day = inputDate.getDate();
            const month = inputDate.toLocaleDateString("da", {
                month: "short",
            });
            const year = inputDate.getFullYear();

            this.birthday = `${day} ${month} ${year}`;
        },

        isJunior() {
            this.junior = this.age < 18;
        },
        isSenior() {
            this.senior = this.age > 18;
        },
    };

    MemberObject.getBirthdate();
    MemberObject._age = getAge();
    MemberObject._junior = isJunior();
    MemberObject._senior = isSenior();

    Object.defineProperties(MemberObject,{
        _id: {
            writable: false,
        },
        _name: {
            enumerable: false,
        },
        _image: {
            enumerable: false,
        }
    } )


    return MemberObject;
}

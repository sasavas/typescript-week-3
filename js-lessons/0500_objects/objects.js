var person = {
    name: "Ayşe",
    age: 33,
    languages: ["English", "Türkçe"],
    introduce: function () {
        console.log("merhaba, benim adım " 
            + this.name);
    },
};

console.log(person.name);
console.log(person.name + " " + person.age + " yaşında");

class Film {
    constructor(title, director = "not specified") {
        this.title = title;
        this.director = director;
    }

    async add(collection) {
        await collection.insertOne(this);
    }
    async list(collection) {
        console.log("list hit");
    }
    async update() {
        console.log("update hit");
    }
    async delete() {
        console.log("delete");
    }
};

module.exports = Film
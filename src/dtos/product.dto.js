class Product{
    name;
    price;
    description;
    categoryId;
    image;
    constructor(body){
        this.name = body.name;
        this.price = body.price;
        this.description = body.description;
        this.categoryId = body.categoryId;
        this.image = body.image;
    }
}

module.exports = Product
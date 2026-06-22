class Book{
    constructor(name,tp,page){
        this.name = name;
        this.tp = tp;
        this.page = page;
    }
    getName(){return this.name};
};

let container = [];
const single = ()=>{return new Book("Teszt nyomat",0,300)};
container.push(new Book("Harry Potter",1,500));
container.push(new Book("Poaro",2,270));

container.push(single())

for (const c of container){
    console.log(c.getName());
}

container = container.filter(b=>0 !== b.tp );


for (const c of container){
    console.log(c.getName());
}

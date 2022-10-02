const listBrands = [
    {
        brand: 'H&M',
        processTime: 7000
    },
    {
        brand: 'Zara',
        processTime: 4000
    },
    {
        brand: 'Uniqlo',
        processTime: 5000
    },
    {
        brand: 'Pedro',
        processTime: 9000
    },
    {
        brand: 'The Executive',
        processTime: 10000
    },
    {
        brand: 'Adidas',
        processTime: 8000
    },
    {
        brand: 'Nike',
        processTime: 7000
    },
    {
        brand: 'Puma',
        processTime: 6000
    },
    {
        brand: 'Converse',
        processTime: 6000
    },
    {
        brand: 'Mark & Spencer',
        processTime: 9000
    },
]

let brands = []
let time = []

for (i = 0; i < listBrands.length; i++) {
    brands.push(Object.values(listBrands[i]).shift())
    time.push(Object.values(listBrands[i]).pop())
}

console.log("loading ...");

function randomizeBrand(type) {
    let random = Math.ceil(Math.random() * 10);

    setTimeout(function () {
        console.log("i wear", type);
    }, time[random]);

    new Promise(function getBrand() {

        setTimeout(function () {
            console.log("from the brand", brands[random]);
        }, time[random]);
        setTimeout(function () {
            console.log("spent", time[random] / 1000, "s");
        }, time[random]);

    })

        .then((value) => console.log(value))
        .catch((error) => console.log(error));
}


randomizeBrand('shirts')
randomizeBrand('shoes')
randomizeBrand('pants')
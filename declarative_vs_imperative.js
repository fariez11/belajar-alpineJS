// Declarative (bagaimana caranya)

const angka = [1,2,3,4,5]
const genap = [];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 == 0) {
        genap.push(angka[i])
    }
}

console.log(genap);

// Imperative (hasilnya akan seperti apa)

const genapImp = angka.filter((angka) => angka % 2 == 0)
console.log(genapImp);
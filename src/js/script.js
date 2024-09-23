`Use strict`;

const counter = () => {
    let count = 0;

    return (...args) => {
        if (args.length !== 1) {
            throw new Error(`Функція приймає тільки один аргумент.`);
        }

        const num = args[0];
        if (typeof num !== 'number') {
            throw new Error(`Фунція приймає в якості аргумента тільки число.`)
        }
        count += num;
        return count;
    };
};

const sum = counter();

console.log(sum(3));
console.log(sum(5));
console.log(sum(7));
console.log(sum(20));

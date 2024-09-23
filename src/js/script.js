`Use strict`;

const counter = () => {
    let count = 0;

    return (...args) => {
        if (args.length !== 1) {
            throw new Error(`Function accepts only 1 argument, too much arguments provided.`);
        }

        const num = args[0];
        if (typeof num !== 'number') {
            throw new Error(`Function accepts only numbers as an argument`)
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

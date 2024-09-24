`Use strict`;

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    },
    reset: function() { // обнулення step
        this.step = 0;
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.reset(); //виконання цього методу потрібно, щоб скинути до 0 step, аби виклик ланцюжка не враховував попередне значення.

ladder.up().up().down().showStep();
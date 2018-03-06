class SmartCalculator {

    constructor(initialValue) {
        this.result = initialValue;
        this.operation = [];
        this.operation.push(initialValue);
    }

    add(number) {
        this.operation.push(`+`);
        this.operation.push(number);

        return this;

    }

    subtract(number) {
        this.operation.push("-");
        this.operation.push(number);

        return this;
    }

    multiply(number) {
        this.operation.push("*");
        this.operation.push(number);

        return this;
    }

    devide(number) {
        this.operation.push("/");
        this.operation.push(number);

        return this;
    }

    pow(number) {
        this.operation.push("^");
        this.operation.push(number);

        return this;
    }

    valueOf() {

        if (this.operation.length == 0) return this.result;


        while (this.operation.lastIndexOf("^") != -1) {

            let a = this.operation.lastIndexOf("^");  ///индекс знакак ^

            let powResult = Math.pow(this.operation[a - 1], this.operation[a + 1]);

            this.operation.splice(a - 1, 3, powResult);

        }


        while (this.operation.indexOf("*") != -1) {

            let a = this.operation.indexOf("*");  ///индекс знакак *

            let multResult = this.operation[a - 1] * this.operation[a + 1];

            this.operation.splice(a - 1, 3, multResult);

        }


        while (this.operation.indexOf("/") != -1) {

            let a = this.operation.indexOf("/");  ///индекс знакак *

            let divResult = this.operation[a - 1] / this.operation[a + 1];

            this.operation.splice(a - 1, 3, divResult);

        }
        while (this.operation.indexOf("-") != -1) {

            let a = this.operation.indexOf("-");  ///индекс знакак *

            let subsResult = this.operation[a - 1] - this.operation[a + 1];

            this.operation.splice(a - 1, 3, subsResult);

        }
        while (this.operation.indexOf("+") != -1) {

            let a = this.operation.indexOf("+");  ///индекс знакак *

            let sumResult = this.operation[a - 1] + this.operation[a + 1];

            this.operation.splice(a - 1, 3, sumResult);

        }



        this.result = this.operation[0];


        return this.result;
    }
}

module.exports = SmartCalculator;

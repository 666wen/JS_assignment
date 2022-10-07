class Calculator{
    constructor(current){
        this.current = current;
    }

    Add(operand){
        return this.current+operand;
    }

    Substract(operand){
        return this.current-operand;
    }

    Multiply(operand){
        return this.current*operand;
    }

    Divide(operand){
        return this.current/operand;
    }

    Sum(operands){
        let l = operands.length;
        for(let i=0; i<l; i++){
            this.current+=operands[i];
        }
        return this.current;
    }
    

}
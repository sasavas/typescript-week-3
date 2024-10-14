function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    innerFunction();
}

outerFunction(); // Outputs: I am from outer function
// console.log(outerVariable); 
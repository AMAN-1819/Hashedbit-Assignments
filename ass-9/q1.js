function variableScopeExample() {
    if (true) {
        var varVariable = "I am a var variable"; // Function-scoped
        let letVariable = "I am a let variable"; // Block-scoped
        const constVariable = "I am a const variable"; // Block-scoped

        console.log(letVariable); // Accessible here
        console.log(constVariable); // Accessible here
    }
    console.log(varVariable); // Accessible here
    // console.log(letVariable); // Error: not defined outside block
    // console.log(constVariable); // Error: not defined outside block
}
variableScopeExample();

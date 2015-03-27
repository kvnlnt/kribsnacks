var ProgrammingRecord = Object.create(Record);

ProgrammingRecord.schema = {

    decks: [

        // principles
        {
            name: 'Principles',
            cards: [{
                question: 'What is your name?',
                answer: 'Your name is Kevin'
            }, {
                question: 'What is your birthday?',
                answer: 'Your birthday is 10/12/1976'
            }]
        },

        // syntax classes
        {
            name: 'Syntax Classes',
            cards: [{
                question: 'What is an Expression?',
                answer: 'Expressions are evaluated to compute their value. ' +
                    'Literal values, variables, binary operations, and ' +
                    'function calls are examples of expressions.'
            }, {
                question: 'What is a Statement?',
                answer: 'Statements are executed to take some action. ' +
                    'Variable assignments, loops, conditionals, and raising ' +
                    'exceptions are examples of statements.'
            }, {
                question: 'What is a Decleration?',
                answer: 'Declarations alter our environment, often by ' +
                    ' defining something. Function and type definitions, ' + 
                    ' imports, and variable declarations (in a language ' +
                    ' that distinguishes them from assignments, such as ' +
                    ' C or JavaScript) are declarations.'
            }, {
                question: 'What is a Pattern?',
                answer: 'Patterns tell us how to bind variables. ' + 
                    ' They get matched against values. For example, in Python:'
            }]
        }

    ]

};

ProgrammingRecord.init = function() {
    Record.init(this);
};

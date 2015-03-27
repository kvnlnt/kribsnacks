var CohesionRecord = Object.create(Record);

CohesionRecord.schema = {
    cards:[
        { 
            question: 'What is your name?',
            answer: 'Your name is Kevin'
        },
        { 
            question: 'What is your birthday?',
            answer: 'Your birthday is 10/12/1976'
        }
    ]
};

CohesionRecord.init = function(){
    Record.init(this);
};

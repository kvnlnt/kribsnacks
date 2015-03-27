var CohesionRecord = Object.create(Record);

CohesionRecord.schema = {
    cards:[
        { 
            question: 'What is your name?',
            answer: 'Kevin'
        },
        { 
            question: 'What is today?',
            answer: '10/12/76'
        }
    ]
};

CohesionRecord.init = function(){
    Record.init(this);
};

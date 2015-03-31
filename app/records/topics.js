var TopicsRecord = Object.create(Record);

TopicsRecord.schema = {
    topics:[
        { 
            name:'Topics',
            path:'/',
            iconClass:'fa-tachometer',
            source:'data/programming.json'
        },
        { 
            name:'Programming',
            path:'/programming',
            iconClass:'',
            source:'data/programming.json'
        },
    ]
};

TopicsRecord.init = function(){
    Record.init(this);
};

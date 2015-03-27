var TopicsRecord = Object.create(Record);

TopicsRecord.schema = {
    topics:[
        { 
            name:'Dashboard',
            path:'/'
        },
        { 
            name:'Programming',
            path:'/programming'
        },
    ]
};

TopicsRecord.init = function(){
    Record.init(this);
};

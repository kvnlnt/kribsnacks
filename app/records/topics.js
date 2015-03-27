var TopicsRecord = Object.create(Record);

TopicsRecord.schema = {
    topics:[
        { 
            name:'Dashboard',
            path:'/'
        },
        { 
            name:'Cohesion',
            path:'/cohesion'
        },
    ]
};

TopicsRecord.init = function(){
    Record.init(this);
};

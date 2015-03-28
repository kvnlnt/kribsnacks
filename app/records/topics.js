var TopicsRecord = Object.create(Record);

TopicsRecord.schema = {
    topics:[
        { 
            name:'Dashboard',
            path:'/',
            iconClass:'fa-tachometer'
        },
        { 
            name:'Programming',
            path:'/programming',
            iconClass:''
        },
    ]
};

TopicsRecord.init = function(){
    Record.init(this);
};

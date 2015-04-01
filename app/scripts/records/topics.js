var TopicsRecord = Object.create(Record);

TopicsRecord.data = {

    topics:{ 
        programming: {
            name:'Programming',
            path:'/programming',
            source:'data/programming.json'
        }
    },
    
};

TopicsRecord.init = function(){
    Record.init(this);
};

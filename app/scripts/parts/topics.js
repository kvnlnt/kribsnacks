var TopicsPart = Object.create(Part);

TopicsPart.init = function(){
    Part.init(this);
};

var topicsPart = TopicsPart.create({ 
    jst: JST.topics, 
    record: TopicsRecord.create()
});

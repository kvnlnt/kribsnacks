var DomainsPart = Object.create(Part);

DomainsPart.registerEvents = function(){
    this.record.recordChanged.sub(this.compileTemplate.bind(this));
};

DomainsPart.init = function(){
    Part.init(this);
};

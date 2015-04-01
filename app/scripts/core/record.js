var Record = {

    create:function(options){

        var newRecord           = Object.create(this);
        var options             = options || {};
        newRecord._options      = options;
        newRecord._record       = options.record || newRecord.getLocalRecord();
        newRecord._endpoint     = options.endpoint || null;
        newRecord._dataIsRemote = options.dataIsRemote || false;
        newRecord.recordChanged = Pubsub.create(this);
        return newRecord;

    },

    init: function(scope){
        var scope = scope || this;
        scope.registerEvents();
        if(scope._dataIsRemote){ scope.getRemoteRecord(); }
        return scope;
    },

    localRecord:{},

    getLocalRecord:function(){
        return this.localRecord;
    },

    getRemoteRecord:function(){
        var _this = this;

        $.getJSON(this._endpoint, function( json ) {
            _this.setVals(json); 
        });
        
        return this;
    },

    get:function(){
        return this._record;
    },

    registerEvents:function(){
        return this;
    },

    getVal: function(val){
        var val = val || null;
        return null === val ? this._record : this._record[val];
    },

    setVal: function(key, val, broadcast) {

        this._record[key] = val;

        if(broadcast || true){
            this.recordChanged.pub({ record: this.get() });
        }
        
        return this;

    },

    setVals: function(record, broadcast){

        for(var item in record){
            this.setVal(item, record[item], false);
        }

        if(broadcast || true){
            this.recordChanged.pub({ record: this.get() });
        }

        return this;

    },

    removeVal: function(key) {

        var record;
        record = this._record[key];
        delete this._record[key];
        this.recordChanged.pub({ record: this.get() });
        return this;
        
    },

    reset:function(){
        var local = this._dataIsRemote ? this.getRemoteRecord() : this.getLocalRecord(); 
        this._record = this.getDefaults();
        return this;
    },
    
};

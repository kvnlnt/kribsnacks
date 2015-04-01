/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    home: function(container){

        // parts
        var record = Record.create({ dataIsRemote:true, endpoint:'data/domains.json' });
        var domainsPart = DomainsPart.create({  jst: JST.domains, record: record });

        // page
        var page = HomePage.create({ jst: JST.home, container: container });

        // add parts
        page
        .addPart('domains', domainsPart, '#domains');

    },

    domain: function(container){

        // parts
        // var record  = Record.create({ dataIsRemote:true, endpoint:'data/programming.json' });
        // var deck    = DeckPart.create({ jst: JST.deck, record: record });

        var record = Record.create({ domain:'programming', topics:{} });
        var topics = Part.create({ jst: JST.topics, record: record });

        // // page
        var record = Record.create({ record: { title: 'deck' } });
        var page   = UiPage.create({ jst: JST.ui, record: record, container: container });
        
        // add parts
        page
        .addPart('topics', topics, '#topics');
        // .addPart('deck', deck, '#deck');

    },
    
};

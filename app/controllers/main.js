/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    home: function(container){

        // page
        var page   = HomePage.create({ jst: JST.home, container: container });
        
        // add parts
        page
        .addPart('topics', topicsPart, '#topics');

    },

    programming: function(container){

        // parts
        var deck = DeckPart.create({ 
            jst: JST.deck, 
            record: ProgrammingRecord.create()
        });

        // page
        var record = Record.create({ title: 'Programming' });
        var page   = UiPage.create({ jst: JST.ui, record: record, container: container });
        
        // add parts
        page
        .addPart('menu', menuPart, '#menu')
        .addPart('deck', deck, '#deck');

    },
    
};

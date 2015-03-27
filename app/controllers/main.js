/**
 * The Controller. Controller stores routes and notifies
 * observers about changes.
 */

var Main = {

    dashboard: function(container){

        // page
        var record = Record.create({ title: 'Dashboard' });
        var page   = Page.create({ jst: JST.ui, record: record, container: container });
        
        // add parts
        page.addPart('menu', menuPart, '#menu');

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

var countryData = [
    { name: 'Marocco', capital: 'Rabat', continent: 'naf' },
    { name: 'India', capital: 'new Delhi', continent: 'as' },
    { name: 'Sri Lanka', capital: 'Colombo', continent: 'as' },
    { name: 'Japan', capital: 'Tokyo', continent: 'as' },
    { name: 'South Korea', capital: 'Seoul', continent: 'as' },
    { name: 'Australia', capital: 'Canberra', continent: 'au' },
    { name: 'Malaysia', capital: 'Kuala Lumpur', continent: 'as' },
    { name: 'USA', capital: 'Washington', continent: 'na' },
    { name: 'Canada', capital: 'Ottawa', continent: 'na' }
];

var countryStore = Ext.create('Ext.data.Store', {
    fields: 
    [
        { name: "name", type: "string" }, 
        { name: "capital", type: "string" }, 
        { name: "continent", type: "string" }
    ],
    data: countryData,
    sorters: 'capital'
});

var countryTpl = new Ext.XTemplate('<div style="margin:1px"><b>{capital}</b> is a capital of <b>{name}</b>.</div>');

Ext.create('Ext.List', {
    fullscreen: true,
    store: countryStore,
    itemTpl: countryTpl,
    emptyText: 'Oops, no country fot the selected continent!'
});
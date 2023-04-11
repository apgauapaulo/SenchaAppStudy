Ext.create('Ext.Panel', {
    fullscreen: true,
    height: 60,
    layout: {
        type: 'hbox',
        pack: 'middle',
        align: 'middle'
    },
    defaults: {
        xtype: 'button',
        margin: 3,
        iconAlign: 'top'
    },
    items: [
        {
            ui: 'back',
            text: '<<'
        },
        {
            text: 'Home',
            iconCls: 'home',
            itemId: 'homebutton',
            badgeText: '3',
            handler: function(){
                this.setBadgeText('1');
            }
        },
        {
            text: 'Compose',
            iconCls: 'compose',
            ui: 'action',
            handler: function(){
                var homeButton = Ext.ComponentQuery.query("#homebutton")[0];
                var badgeText = homeButton.getBadgeText();
                if (Ext.isDefined(badgeText) && badgeText.toString().length > 0){
                    homeButton.setBadgeText(parseInt(badgeText) + 1);
                }
                else {
                    homeButton.setBadgeText(1);
                }
            }
        },
        {
            text: 'Delete',
            iconCls: 'delete',
            ui: 'decline'
        },
        {
            text: '>>',
            ui: 'forward'
        }
    ]
});
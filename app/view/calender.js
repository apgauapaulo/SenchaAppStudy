Ext.create('Ext.Panel', {
    fullscreen: true,
    scrollable: true,
    items: 
    [
        {
            html: 'Sample <b>HTML</b> formatted text'
        },
        {
            xtype: 'textfield',
            label: 'First name',
            labelAlign: 'top',
            name: 'firstname'
        },
        {
            xtype: 'container',
            layout: 'hbox',        
            border: 3,
            style: 
            {
                borderColor: 'red', 
                borderStyle: 'solid'
            },
            defaults: 
            {
                xtype: 'button'
            },
            items: 
            [
                {
                    ui: 'action',
                    text: 'Reset'
                },
                {
                    ui: 'confirm',
                    text: 'Save'
                }
            ]
        },
    ]
});


//Ext.create('Ext.Panel', {
//    fullscreen: true,
//    layout: 'vbox',
//    defaults: {
//        height: 40
//    },
//    items: [
//        {
//            xtype: 'toolbar',
//            title: 'Teste Toolbar',
//            docked: 'top',
//            layout: {
//                type: 'hbox',
//                pack: 'justify'
//            },
//            items: [{
//                        text: 'Back',
//                        ui: 'back'
//                    },
//                    {
//                        text: 'Forward',
//                        ui: 'forward'
//                    },
//                ]
//        },
//        {
//            xtype: 'toolbar',
//            docked: 'bottom',
//            items:[
//                {
//                    text: 'Home',
//                    iconCls: 'home'
//                },
//                {
//                    text: 'Previous',
//                    iconCls: 'arrow_left'
//                },
//                {
//                    text: 'Next',
//                    iconCls: 'arrow_right'
//                }
//            ]
//        },
//        {
//            html: '<b>This is a simple panel</b>',
//            flex: 1
//        }
//    ]
//});


//
//items: [
//    {
//        xtype: 'container',
//        layout: 'card',
//        itemId: 'calendarview',
//        defaults: {
//            xtype: 'container'
//        },
//        items: [
//            {
//                html: 'Day View'
//            },
//            {
//                html: 'Week View'
//            },
//            {
//                html: 'Month View'
//            }
//        ]
//    },
//    {
//        xtype: 'toolbar',
//        docked: 'top',
//        height: 30,
//        layout: {
//            type: 'hbox',
//            pack: 'justify'
//        },
//        items: [
//            {
//                text: 'Reset',
//                iconCls: 'refresh',
//                handler: function(){
//                    var segmentedButtons = Ext.ComponentQuery.query("#segmentedButtonID")[0];
//                    segmentedButtons.setPressedButtons([]);
//                }
//            },
//            {
//                xtype: 'segmentedbutton',
//                allowMultiple: true,
//                itemID: 'segmentedButtonID',
//                items: [
//                    {
//                        text: 'Day',
//                        pressed: true
//                    },
//                    {
//                        text: 'Week'
//                    },
//                    {
//                        text: 'Month'
//                    }
//                ],
//                listeners: {
//                    toggle: function(container, button, pressed){
//                        alert("User toggled the '" + button.getText() + "' button: " + (pressed ? 'on' : 'off'));
//                    }
//                }
//            }
//        ]
//    }
//]
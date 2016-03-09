FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout");
    }
})

FlowRouter.route('/reports', {
    action: function() {
        BlazeLayout.render("reportMainView");
    }
})

FlowRouter.route('/entry', {
    action: function() {
        BlazeLayout.render("enterMaterialWarehouse");
    }
})
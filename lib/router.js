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
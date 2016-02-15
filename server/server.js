Accounts.onLogin(function() {
	Meteor.call('addAdminToFirstUser');
});

Meteor.startup(function () {
		Accounts.validateNewUser(function () {
			var userCount = Meteor.users.find().count();
			if (userCount > 1) {
				new Meteor.Error('Only one account is allowed') 
				return false;
			} else {
				return true;
			}
		})	

})

Meteor.methods({

	//vajab veel ühte meetodit, mis ei laseks üle 1 kasutaja luua.
	'addAdminToFirstUser': function() {
		var adminRole = 'admin';
		var userId = Meteor.userId();

		var userCount = Meteor.users.find().count();
		if (userCount === 1) {
			Roles.addUsersToRoles(userId, adminRole)
		}
	},

	'getReportData': function(startDate, finishDate) {
		/*
		if (mingi check, mis annaks errorit?) {
			throw new Meteor.Error("no-data-found", "No data can be found for selected period");
		} */

		var reportData = ScrapReport.find({dateEntered: { $gte: startDate, $lte: finishDate } } ).fetch();
		return reportData;
	}
});

Meteor.publish('dataForFormsWorkCenter', function(){
	return WorkCenter.find({})
})
Meteor.publish('dataForFormsWorker', function(){
	return Worker.find({})
})
Meteor.publish('dataForFormsScrapType', function(){
	return ScrapType.find({})
})
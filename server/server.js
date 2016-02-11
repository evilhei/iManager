Accounts.onLogin(function() {
	Meteor.call('addAdminToFirstUser');
});


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
		var reportData = ScrapReport.find({dateEntered: { $gte: startDate}, dateEntered: { $lte: finishDate}}).fetch();
		return reportData;
	}
});
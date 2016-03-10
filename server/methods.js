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
	},

	'enterStock': function(q, c, s) {
		if (! Meteor.userId()) {
			throw new Meteor.error("not-authorized");
		}
		var checkIfExcists = StorageLoc.findOne({storageLocationName: s, "storageLocation.materialCode": c}) // check which checks if the material already exists in that storage location
		if (checkIfExcists === undefined) {
			StorageLoc.update({
				storageLocationName: s
			}, {
				$push: { storageLocation: {
					materialCode: c,
					dateEntered: new Date(),
					whoEntered: Meteor.userId(),
					quantity: q	
				}
				}
			})
		} else {

			StorageLoc.update({
				storageLocationName: s, "storageLocation.materialCode": c
			}, {
				$inc: {"storageLocation.$.quantity": q}
			})
		} 
	}
});
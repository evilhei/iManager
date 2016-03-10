Accounts.onLogin(function() {
	Meteor.call('addAdminToFirstUser');
});

Meteor.startup(function () {
		Accounts.validateNewUser(function () {
			var userCount = Meteor.users.find().count();
			if (userCount > 0) {
				new Meteor.Error('Only one account is allowed') 
				return false;
			} else {
				return true;
			}
		})	

})

Meteor.publish('generalMaterialMaster', function(){
	return GeneralMaterial.find({})
})
Meteor.publish('StorageLoc', function(){
	return StorageLoc.find({})
})

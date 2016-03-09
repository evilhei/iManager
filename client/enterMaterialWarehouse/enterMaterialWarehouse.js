Template.enterMaterialWarehouse.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('generalMaterialMaster');
	})
})

Template.enterMaterialWarehouse.events({
	"change": function(e) {
		console.log("event works")

	}
})

Template.enterMaterialWarehouse.helpers({
	matList: function() {
		var matList = GeneralMaterial.find({}, {fields: {'materialCode': 1, 'materialDescription': 1}}).map(function(item) {
      	return {label: item.materialCode, value: item.materialCode}
    	})
    	return matList
	}
})
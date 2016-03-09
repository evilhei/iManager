


Template.enterMaterialWarehouse.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('generalMaterialMaster');
	})
})

Template.enterMaterialWarehouse.events({
	"change #select2": function(e) {
		selectedMatCode = $("#select2").val()
		selectedMatCode = parseInt(selectedMatCode)
		var currentMatDesc = GeneralMaterial.findOne({"materialCode": selectedMatCode}, {fields: {'materialDescription': 1}})
		console.log(currentMatDesc.materialDescription)
		Session.set("currentMatDesc", selectedMatCode)	

	}
})



Template.enterMaterialWarehouse.onRendered(function() {
	$("#select2").select2({
		allowClear: true
	});
})


Template.enterMaterialWarehouse.helpers({
	matList: function() {
		var matList = GeneralMaterial.find({}, {fields: {'materialCode': 1, 'materialDescription': 1}}).map(function(item) {
      	return {label: item.materialCode, value: item.materialCode}
    	})
    	return matList

	}
})




Template.enterMaterialWarehouse.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('generalMaterialMaster');
	})
})

Template.enterMaterialWarehouse.events({
	"change #select2": function(e) {
		console.log($("#select2").val())
		console.log("event works")
		var selectedMatCode = $("#select2").val()
		var currentMatDesc = GeneralMaterial.find({"materialCode": selectedMatCode}, {fields: {'materialDescription': 1}}).map(function(item) {
			return {currentMatDesc: item.materialDescription}
		})
		console.log(currentMatDesc)
		Session.set("currentMatDesc", selectedMatCode)	
		console.log(Session.get('currentMatDesc'))

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

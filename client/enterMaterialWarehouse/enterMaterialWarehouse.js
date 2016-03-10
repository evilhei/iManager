


Template.enterMaterialWarehouse.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('generalMaterialMaster');
		self.subscribe('StorageLoc');
	})
})

Template.enterMaterialWarehouse.events({
	"change #chooseMaterial": function(e) {
		selectedMatCode = $("#chooseMaterial").val()
		console.log(selectedMatCode + "selected")
		selectedMatCode = parseInt(selectedMatCode)
		var currentMatDesc = GeneralMaterial.findOne({"materialCode": selectedMatCode}, {fields: {'materialDescription': 1}})
		currentMatDesc = currentMatDesc.materialDescription
		console.log(currentMatDesc)
		Session.set("currentMatDesc", currentMatDesc)	
	},
	"submit .enterMatWarehouse": function(e) {
		event.preventDefault();
		var q = e.target.quantity.value; //quantity
		var c = $("#chooseMaterial").val() //material code
		var s = $("#chooseStoraceLoc").val() //storace location
		console.log(q, c, s)
		q = parseInt(q) //make sure that q s int not string
		Meteor.call('enterStock', q,c,s)
		event.target.quantity.value = "";
	}
})



Template.enterMaterialWarehouse.onRendered(function() {
	$("#chooseMaterial").select2({
		allowClear: true
	}),
	$("#chooseStoraceLoc").select2({
		allowClear: true
	})
})


Template.enterMaterialWarehouse.helpers({
	matList: function() {
		var matList = GeneralMaterial.find({}, {fields: {'materialCode': 1, 'materialDescription': 1}}).map(function(item) {
      	return {label: item.materialCode, value: item.materialCode}
    	})
    	return matList

	},
	matDesc: function() {
		matDesc = Session.get("currentMatDesc")
		return matDesc
	},
	storList: function() {
		var storList = StorageLoc.find({}, {fields: {'storageLocationName': 1}}).map(function(item) {
			return {label: item.storageLocationName, value: item.storageLocationName}
		})
			return storList
	}
})

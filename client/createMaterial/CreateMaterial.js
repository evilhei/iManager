Template.createMaterial.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('generalMaterialMaster');
	})
})

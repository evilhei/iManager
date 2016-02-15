Template.insertScapReport.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('dataForFormsWorkCenter');
		self.subscribe('dataForFormsWorker');
		self.subscribe('dataForFormsScrapType');
	})
})
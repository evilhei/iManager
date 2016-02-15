Template.report.onRendered(function() {	
  this.$("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());

  this.$("#datepicker1").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});

Template.report.events({
	'click .btn': function(event, startDate, finishDate) {
		event.preventDefault();
		var startDate = $('#startDate').val();
		var finishDate = $('#finishDate').val();

		Meteor.call('getReportData',startDate, finishDate, function(err, data) {
			if (err)
				console.log(err);
			Session.set('getReportData', data);
		});
	}
})

Template.reportData.helpers({
	'reportData': function () {
		return Session.get('getReportData');
	}
});

	

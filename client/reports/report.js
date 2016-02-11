Template.report.onRendered(function() {
  $(".datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());;
});

Template.report.events({
	'click .btn': function(event, startDate, finishDate) {
		event.preventDefault();
		var startDate = $('#startDate').val();
		console.log(startDate + ' StartfromTheButton')
		var finishDate = $('#finishDate').val();
		console.log(finishDate + ' FinishfromTheButton')

		Meteor.call('getReportData',startDate, finishDate, function(err, data) {
			console.log("is the call working at all??");
			if (err)
				console.log(err);
			Session.set('getReportData', data);
			console.log(Session.get('getReportData')+ " from method call");
		});
	}
})

Template.reportData.helpers({
	'reportData': function () {
		return Session.get('getReportData');
	}
});

	

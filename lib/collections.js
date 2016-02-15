WorkCenter = new Mongo.Collection("workCenter");

WorkCenter.attachSchema(new SimpleSchema({
	label: {
		type: String,
		label: "Enter Work center name",
		max: 10
	},
	value: {
		type: String,
		label: "Enter Work center number",
		max: 10
	}
}));

Worker = new Mongo.Collection("worker");

Worker.attachSchema(new SimpleSchema({
	label: {
		type: String,
		label: "Enter worker name",
		max: 10
	},
	value: {
		type: String,
		label: "Enter worker number",
		max: 10
	}
}));

ScrapType = new Mongo.Collection("scrapType");

ScrapType.attachSchema(new SimpleSchema({
	label: {
		type: String,
		label: "Enter Scrap name",
		max: 10
	},
	value: {
		type: String,
		label: "Enter Scrap number",
		max: 10
	}
}));

ScrapReport = new Mongo.Collection("scrapReport");

ScrapReport.attachSchema(new SimpleSchema({
	scrapType: {
		type: String,
		optional: false,
		autoform: {
			type: "selectize",
			options: function() {

				return optScrapType 
			}
		}
	},
	workCenter: {
		type: String,
		optional: false,
		autoform: {
			type: "selectize",
			options: function() {
				return workCenter 
			}
		}
	},
	quantity: {
		type: Number,
		optional: false,
		decimal: true
	},
	dateEntered: {
		type: String,
		autoValue: function() {
			var enterTime = moment().format('MM-DD-YYYY')
			return enterTime;
		}
	},
	whoEntered: {
		type: String,
		optional: false,
		autoform: {
			type: "selectize",
			options: function () {
				return optWorker
			}
		}
	},
	isoDate: {
		type: String,
		optional: true,
		autoValue: function () {
			var isoDate = new Date()
			var isoString = isoDate.toISOString();
			return isoString;
		}
	}
}));
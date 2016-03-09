GeneralMaterial = new Mongo.Collection("generalMaterial");

GeneralMaterial.attachSchema(new SimpleSchema({
	materialDescription: {
		type: String,
		optional: false
	},
	Unit: {
		type: String,
		optional: false,
		autoform: {
			type: "selectize",
			options: function () {
				return {
					"KG":"KG",
					"M": "M",
					"PC": "PC"
				}
			}
		}
	},
	minimumQuantity: {
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
	isoDate: {
		type: String,
		optional: true,
		autoValue: function () {
			var isoDate = new Date()
			var isoString = isoDate.toISOString();
			return isoString;
		}
	},
	materialCode: {
		type: Number,
		optional: false,
		autoValue: function() {
			var latestNumber = GeneralMaterial.findOne({}, {sort: {isoDate : -1}})
			if (!latestNumber) {
				materialCode = 2000;
			}
			var materialCode = latestNumber.materialCode + 1
			
			return materialCode; 
		}
	},
	stockQuantity: {
		type: Number,
		optional: false,
		autoValue: function() {
			var stockQuantity = 0
			return stockQuantity
		}
	}
}));
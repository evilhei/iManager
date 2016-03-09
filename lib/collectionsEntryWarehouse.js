Warehouse = new Mongo.Collection("warehouse");

Warehouse.attachSchema(new SimpleSchema({
	materialCode: {
		type: String,
		optional: false,
		autoform: {
			type: "select2"
		}
	},
	quantity: {
		type: Number,
		optional: false
	}
}));
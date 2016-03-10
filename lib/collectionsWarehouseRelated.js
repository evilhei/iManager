Warehouse = new Mongo.Collection("warehouse");
StorageLoc = new Mongo.Collection("storageLoc");

StorageLoc.attachSchema(new SimpleSchema({
	storageLocationName: {
		type: String,
		optional: false
	},
	storageLocation: {
		type: [Object],
		optional: true
	},
	"storageLocation.$.materialCode": {
		type: String,
		optional: true
	},
	"storageLocation.$.modified": {
		type: Date,
		optional: true
	},
	"storageLocation.$.whoEntered": {
		type: String,
		optional: true
	},
	"storageLocation.$.quantity": {
		type: Number,
		optional: true
	}
}));
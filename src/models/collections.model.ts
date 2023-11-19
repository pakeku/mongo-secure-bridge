import mongoose, { Document, Schema } from 'mongoose';

interface IUser {
    id: string;
    name: string;
    email: string;
}

interface ICollectionFields {
    name: string;
    type: CollectionFieldTypes;
    required: boolean;
    unique: boolean;
    default: any;
    description: string;
}

enum CollectionFieldTypes {
    String = 'String',
    Number = 'Number',
    Boolean = 'Boolean',
    Float = 'Float',
    Date = 'Date',
    Schema = 'Schema',
}

interface ICollectionModel extends Document {
    name: string;
    description: string;
    user: IUser;
    fields: ICollectionFields[];
    permissions: string[];
}

const CollectionFieldSchema = new Schema<ICollectionFields>({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: Object.values(CollectionFieldTypes) },
    required: { type: Boolean, default: false },
    unique: { type: Boolean, default: false },
    default: Schema.Types.Mixed,
    description: String,
});

const CollectionSchema = new Schema<ICollectionModel>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    user: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
    },
    fields: [CollectionFieldSchema],
    permissions: [{ type: String }],
});

const CollectionModel = mongoose.model<ICollectionModel>('Collection', CollectionSchema);

export { CollectionModel, ICollectionModel, ICollectionFields, CollectionFieldTypes };
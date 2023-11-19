import { CollectionModel, ICollectionModel } from './collections.model';

// Function to create a new collection
export const createCollection = async (collectionData: ICollectionModel): Promise<ICollectionModel> => {
  const collection = new CollectionModel(collectionData);
  return collection.save();
};

// Function to retrieve all collections
export const getAllCollections = async (): Promise<ICollectionModel[]> => {
  return CollectionModel.find();
};

// Function to retrieve a single collection by ID
export const getCollectionById = async (collectionId: string): Promise<ICollectionModel | null> => {
  return CollectionModel.findById(collectionId);
};

// Function to update a collection
export const updateCollection = async (collectionId: string, updateData: Partial<ICollectionModel>): Promise<ICollectionModel | null> => {
  return CollectionModel.findByIdAndUpdate(collectionId, updateData, { new: true });
};

// Function to delete a collection
export const deleteCollection = async (collectionId: string): Promise<ICollectionModel | null> => {
  return CollectionModel.findByIdAndDelete(collectionId);
};

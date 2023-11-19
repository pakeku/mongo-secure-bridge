import express, { Request, Response } from 'express';
import { createCollection, getAllCollections, getCollectionById, updateCollection, deleteCollection } from '../../models';
import { checkRequiredPermissions, validateAccessToken } from '../../middleware/auth0.middleware';
import { AdminCollectionsPermissions } from './collections.permissions';

export const collectionsRouter = express.Router();

// GET all collections
collectionsRouter.get('/',
    validateAccessToken,
    checkRequiredPermissions([AdminCollectionsPermissions.Read]),

    async (req: Request, res: Response) => {
        try {
            const collections = await getAllCollections();
            res.status(200).json(collections);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
);

// GET a single collection by ID
collectionsRouter.get('/:id',
    validateAccessToken,
    checkRequiredPermissions([AdminCollectionsPermissions.Read]),

    async (req: Request, res: Response) => {
        try {
            const collection = await getCollectionById(req.params.id);
            if (!collection) {
                return res.status(404).json({ message: 'Collection not found' });
            }
            res.status(200).json(collection);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
);

// POST a new collection
collectionsRouter.post('/',
    validateAccessToken,
    checkRequiredPermissions([AdminCollectionsPermissions.Create]),

    async (req: Request, res: Response) => {
        try {
            const newCollection = await createCollection(req.body);
            res.status(201).json(newCollection);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
);

// PUT to update a collection
collectionsRouter.put('/:id',
    validateAccessToken,
    checkRequiredPermissions([AdminCollectionsPermissions.Update]),

    async (req: Request, res: Response) => {
        try {
            const updatedCollection = await updateCollection(req.params.id, req.body);
            if (!updatedCollection) {
                return res.status(404).json({ message: 'Collection not found' });
            }
            res.status(200).json(updatedCollection);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
);

// DELETE a collection
collectionsRouter.delete('/:id',
    validateAccessToken,
    checkRequiredPermissions([AdminCollectionsPermissions.Delete]),

    async (req: Request, res: Response) => {
        try {
            const deletedCollection = await deleteCollection(req.params.id);
            if (!deletedCollection) {
                return res.status(404).json({ message: 'Collection not found' });
            }
            res.status(200).json({ message: 'Collection deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
);

export default collectionsRouter;

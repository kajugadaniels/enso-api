import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createSize, deleteSize, getAllSizes, getSizeById, updateSize } from '../services/size.service';

export const createSizeController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const size = await createSize(req.body);
        res.status(201).json(size);
    } catch (e: any) {
        console.error('Create Size Error:', e.message);
        res.status(400).json({ message: e.message });
    }
};

export const getAllSizesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const sizes = await getAllSizes();
        res.json(sizes);
    } catch (e: any) {
        console.error('Get All Sizes Error:', e.message);
        res.status(500).json({ message: e.message });
    }
};

export const getSizeByIdController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const size = await getSizeById(req.params.id);
        res.json(size);
    } catch (e: any) {
        console.error('Get Size By ID Error:', e.message);
        res.status(404).json({ message: e.message });
    }
};

export const updateSizeController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const size = await updateSize(req.params.id, req.body);
        res.json(size);
    } catch (e: any) {
        console.error('Update Size Error:', e.message);
        res.status(400).json({ message: e.message });
    }
};

export const deleteSizeController = async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        await deleteSize(req.params.id);
        res.json({ message: 'Size deleted successfully' });
    } catch (e: any) {
        console.error('Delete Size Error:', e.message);
        res.status(404).json({ message: e.message });
    }
};

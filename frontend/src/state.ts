// frontend/src/state.ts

import { create } from "zustand";
import * as api from './services/Api';


export interface Feature {
    id: number
    feature: string
    rating: number
    type: string
}

type featuresState = {
    features: Feature[]
    addFeature: (feature: string, accessToken: string) => void
    setFeatures: (features: Feature[]) => void
    deleteFeature: (id: number) => void
    rateFeature: (id: number, rating: number, accessToken: string) => void
}

const useStore = create<featuresState>()((set) => ({
    features: [],

    addFeature: async (feature: string, accessToken: string) => {
        const savedFeature: Feature = await api.createUserFeature(accessToken, {
            feature
        });
        set((state) => ({
            features: [
                ...state.features,
                {
                    ...savedFeature
                },
            ],
        }))
    },

    setFeatures: (features: Feature[]) =>
        set((state) => ({
            ...state, features
        })),

    deleteFeature: (id: number) =>
        set((state) => ({
            features: state.features.filter((feature) => feature.id !== id),
        })),

    rateFeature: async (id: number, rating: number, accessToken: string) => {

        const ratedFeature = await api.rateFeatureByUser(accessToken, {
            id, rating
        });
        set((state) => ({
            features: state.features.map((feature) =>
                feature.id === id ? { ...feature, rating } : feature
            )
        }))

    }
}));

export default useStore;
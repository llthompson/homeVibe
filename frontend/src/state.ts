// frontend/src/state.ts

import { create } from "zustand";

export interface Feature {
    id: number
    feature: string
    rating: number
    type: string
}

// interface Features {
//     features: Feature[]
// }

type featuresState = {
    features: Feature[]
    addFeature: (feature: Feature) => void
    setFeatures: (features: Feature[]) => void
    deleteFeature: (id: number) => void
    rateFeature: (id: number, rating: number) => void
}

const useStore = create<featuresState>()((set) => ({
    features: [],
    addFeature: (feature: Feature) =>
        set((state) => ({
            features: [
                ...state.features,
                {
                    ...feature
                },
            ],
        })),

    setFeatures: (features: Feature[]) =>
        set((state) => ({
            // features: [
            //     ...features
            // ],
            ...state, features
        })),

    deleteFeature: (id: number) =>
        set((state) => ({
            features: state.features.filter((feature) => feature.id !== id),
        })),
    rateFeature: (id: number, rating: number) => {
        set((state) => ({
            features: state.features.map((feature) =>
                feature.id === id ? { ...feature, rating } : feature
            )

        }))
    }

}));

export default useStore;
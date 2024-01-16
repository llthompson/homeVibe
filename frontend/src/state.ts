import { create } from "zustand";

interface Feature {
    id: number
    feature: string
    rating: string
    type: string
}

interface Features {
    features: Feature[]
}

const useStore = create<Features>()((set) => ({
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
    // toggleTodo: (id) =>
    //     set((state) => ({
    //         todos: state.todos.map((todo) =>
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         ),
    //     })),
    deleteFeature: (id: number) =>
        set((state) => ({
            features: state.features.filter((feature) => feature.id !== id),
        })),
    rateFeature: (id: number, rating: string) => {
        set((state) => ({
            features: state.features.map((feature) =>
                feature.id === id ? { ...feature, rating } : feature
            )

        }))
    }

}));

export default useStore;
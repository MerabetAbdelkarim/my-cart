import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItems: JSON.parse(localStorage.getItem('storageFavoriteItems')) || [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavoriteItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.favoriteItems.find(
                (item) => item.id == newItem.id
            );

            if (!existingItem) {
                state.favoriteItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    Image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                const jsonFavoriteItems = JSON.stringify(state.favoriteItems)
                localStorage.setItem('storageFavoriteItems', jsonFavoriteItems)
            } else {
                state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
                const jsonFavoriteItems = JSON.stringify(state.favoriteItems)
                localStorage.setItem('storageFavoriteItems', jsonFavoriteItems)
            }

        },
    },
});

export const { addFavoriteItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;

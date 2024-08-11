import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Feature/Website/Pages/UserSlice";
import CategoriesSlice from "../Feature/Admin/Pages/CategoriesSlice";
import ProductSlice from "../Feature/Admin/Pages/ProductSlice";
import Ad_UserSlice from "../Feature/Admin/Pages/Ad_UserSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
    aduser : Ad_UserSlice,
    categories: CategoriesSlice,
    product: ProductSlice,
  },
});

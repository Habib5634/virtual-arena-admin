import { combineReducers } from "redux";
import dropdownReducer from './dropdownSlice'
import notificationReducer from './notificationSlice'
import reviewsReducer from './fetchReviewSlice'





export default combineReducers({

    dropdown: dropdownReducer,
    notifications: notificationReducer,
    reviews: reviewsReducer,
})
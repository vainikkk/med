const { createStore } = require("redux");

let initialState = {
  data: [{
    id: 1,
    name: "firstMedicine",
    type: "tablet",
    quantity: 100,
    note: "This is my first medicine"
  },
  {
    id: 2,
    name: "Second",
    type: "tablet",
    quantity: 100,
    note: "This is my first medicine"
  },
  {
    id: 3,
    name: "htird",
    type: "tablet",
    quantity: 100,
    note: "This is my first medicine"
  }],
  editData: null,
  showToast: false,
  toastMessage: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      let deleteArr = state.data
      return {
        ...state,
        data: deleteArr.filter(v => v.id !== action.payload)
      }
    case "EDIT":
      let arrayOfData = state.data
      let editData = arrayOfData.find(v => v.id === action.payload)
      return {
        ...state,
        editData: editData
      }
    case "SET_EDIT":
      let copyArray = state.data
      let editablearray = copyArray.map(v => {
        if (v.id === action.payload.id)
          return action.payload
        else return v
      })
      return {
        ...state,
        data: editablearray,
        editData: null
      }
    case "REMOVE_MEDICINE_EDIT_DATA":
      return {
        ...state,
        editData: null
      }
    case "ADD":
      let arr = state.data;
      let number = arr.map(v => v.id)
      arr.push({ ...action.payload, id: Math.max(...number) + 1 })
      return {
        ...state,
        data: arr
      }
    case "CLOSE_TOAST":
      return {
        ...state,
        showToast: false
      }
    case "SET_TOAST":
      console.log(action)
      return {
        ...state,
        showToast: true,
        toastMessage: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;
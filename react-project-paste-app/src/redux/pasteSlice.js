import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  // --> pastes - it is a collection/ array of 'paste'/ objects
  pastes:localStorage.getItem("pastes")
  ? 
  JSON.parse(localStorage.getItem("pastes"))
  : 
  []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");     
      console.log(state);
             
    },

    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex(p => p._id === paste._id);

      if(index!==-1){
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated successfully");     
      }
      else{
        toast.error("Paste not found to update");
      }
    },

    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared");
    },

    removeFromPastes: (state, action) => {
      const idToRemove = action.payload;
      state.pastes = state.pastes.filter(p => p._id !== idToRemove);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted");
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions;

export default pasteSlice.reducer;
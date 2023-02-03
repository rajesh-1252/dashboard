import { TOGGLESIDEBAR } from "./action";

const reducer = (state, action) => {
  if (action.type === TOGGLESIDEBAR) {
    return {
      ...state,
      toggleSidebarValue: !state.toggleSidebarValue,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};
export default reducer;

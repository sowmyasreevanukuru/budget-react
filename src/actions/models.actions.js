const modalTypes = {
  OPEN_EDIT_MODAL: "OPEN_EDIT_MODAL",
  CLOSE_EDIT_MODAL: "CLOSE_EDIT_MODAL",
};

export default modalTypes;
export const openEditModel = (id) => {
  return { type: modalTypes.OPEN_EDIT_MODAL, payload: { id } };
};

export const closeEditModel = () => {
  return { type: modalTypes.CLOSE_EDIT_MODAL };
};

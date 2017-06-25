export const selectLib = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

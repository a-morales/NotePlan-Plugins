export function moveNote(selectFolder: string) {
  const newFilename = DataStore.moveNote(Editor.filename, selectFolder);

  if (newFilename) {
    Editor.openNoteByFilename(newFilename);
    console.log("moving note was successful");
  } else {
    console.log("moving note was not successful");
  }
}

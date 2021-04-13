import { moveNote } from "~/moveNote";
import { format } from "date-fns";

global.selectFolder = function () {
  if (Editor.type === "Notes") {
    console.log(format(new Date(), "yyyy-MM-dd"));
    CommandBar.showOptions(
      DataStore.folders,
      "Select new folder for' " + Editor.title + "'",
      moveNote
    );
  }
};
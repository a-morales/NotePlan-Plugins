/* eslint-disable no-unused-vars */

interface DataStore {
  readonly folders: Array<string>;
  /**
   * Moves @notename to the specified @folder
   *
   * @param noteName: The name of the note to move
   * @param folder: The folder to move the note to
   * @returns the new location for the folder that was moved if successful, null if the move failed
   */
  moveNote(noteName: string, folder: string): string | null;
}
declare const DataStore: DataStore;

interface Console {
  /**
   * Logs out a message to the XCode console
   *
   * @param message: the message to output
   */
  log(message: string): void;
}

declare const Console: Console;

interface Editor {
  content: string | null;
  readonly title: string;
  readonly type: "Notes" | "Calendar";
  readonly filename: string;

  openNoteByFilename(filename: string): void;
  openNoteByTitle(title: string): void;
  scrollTo(pos: number): void;
}

declare const Editor: Editor;

interface CommandBar {
  // The current placeholder text in the CommandBar
  placeholder: string;
  // the current text inside the CommandBar
  searchText: string;

  /**
   * Hides the command bar if it's open
   */
  hide(): void;

  /**
   * Brings up the command bar displaying `options`
   *
   * @params options: An array of options to display to the user in the CommandBar
   * @params prompt: A prompt to show to the user to go along with the options
   * @params callback: function that is called with the option selected by the user
   */
  showOptions(
    options: Array<string>,
    prompt: string,
    callback: (option: string) => void
  ): void;
  showInput: any;
}

declare const CommandBar: CommandBar;

declare const CalendarItem: any;
declare const Calendar: any;

declare const global: any;

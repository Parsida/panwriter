export interface AppState {
  doc: Doc;
  metaEditorOpen: boolean;
  split: ViewSplit;
  paginated: boolean;
  previewDivRef?: React.RefObject<HTMLDivElement>;
}

export interface Doc {
  /** whole editor contents (in markdown) */
  md: string;

  /** part of `md` that's the yaml metadata */
  yaml: string;

  /** rest part of `md` */
  bodyMd: string;

  /** parsed yaml metadata */
  meta: Meta;

  /** bodyMd converted to HTML */
  html: string

  fileName?: string;
  filePath?: string;
  fileDirty: boolean;
}

export type Meta = string | number | boolean | null | Meta[] | { [key: string]: Meta };

export const viewSplits = ['onlyEditor', 'split', 'onlyPreview'] as const
export type ViewSplit = typeof viewSplits[number]
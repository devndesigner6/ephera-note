export const LOCAL_STORAGE_KEYS = {
  EDITOR_CONTENT: "ephera:editor-content",
  COMPLETED_TASKS: "ephera:completed-tasks",
  SNAPSHOTS: "ephera:snapshots",
  THEME: "ephera:theme",
  EDITOR_WIDTH: "ephera:editor-width",
  PAPER_MODE: "ephera:paper-mode",
  PREVIEW_MODE: "ephera:preview-mode",
  TOC_MODE: "ephera:toc-mode",
  TASK_AUTO_FLUSH_MODE: "ephera:task-auto-flush-mode",
  FONT_FAMILY: "ephera:font-family",
  CURSOR_POSITION: "ephera:cursor-position",
  DOCUMENTS: "ephera:documents",
  ACTIVE_DOCUMENT_INDEX: "ephera:active-document-index",
  EDITOR_MODE: "ephera:editor-mode",
} as const satisfies Record<string, `ephera:${string}`>;

export const EPHERA_VERSION = "0.0.1";

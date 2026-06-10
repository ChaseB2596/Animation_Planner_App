export interface Scene {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  sceneFile: string;
  compFile: string;
  renderFolder: string;
  version: string;
  duration: number;
  cost: number;
  color: string;
  progress: {
    stage3D: number;
    lighting: number;
    rendering: number;
    compositing: number;
  };
  status: {
    stage3D: { completed: boolean; hasNotes: boolean };
    lighting: { completed: boolean; hasNotes: boolean };
    rendering: { completed: boolean; hasNotes: boolean };
    compositing: { completed: boolean; hasNotes: boolean };
  };
  references: {
    images: string[];
    modelLink: string;
  };
  audio: {
    title: string;
    file: string;
    description?: string;
  };
  renderPasses: {
    name: string;
    progress: number;
    color: string;
  }[];
  assets: {
    name: string;
    type: 'model' | 'texture' | 'sim' | 'other';
    cost?: number;
    status?: 'purchase' | 'create' | 'existing';
    sourceUrl?: string;
  }[];
  budgetCategories?: string[];
  schedule: {
    stage3D: { start: number; duration: number };
    lighting: { start: number; duration: number };
    rendering: { start: number; duration: number };
    compositing: { start: number; duration: number };
  };
  history: {
    version: string;
    date: string;
    update: string;
    note: string;
    categories?: string[];
    type?: 'note' | 'update';
  }[];
  nodeEditorData?: {
    nodes: EditorNode[];
  };
}

export interface EditorNode {
  id: string;
  type: 'shape' | 'text' | 'arrow' | 'note' | 'image' | 'line';
  x: number;
  y: number;
  x2?: number;
  y2?: number;
  width?: number;
  height?: number;
  content?: string;
  src?: string;
  color?: string;
  rotation?: number;
  shapeType?: 'square' | 'circle' | 'triangle';
  toId?: string;
}

export type TabType = 'Project' | 'Budget' | 'Schedule' | 'References' | 'Nodes';

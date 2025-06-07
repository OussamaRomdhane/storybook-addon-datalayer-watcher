import type { Theme } from "storybook/theming";

export interface InspectorProps {
  key: string | number;
  theme: Theme & { addonActionsTheme?: string };
  name?: string;
  data: Record<string | symbol, unknown>;
}

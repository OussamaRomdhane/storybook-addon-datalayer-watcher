import { addons, types, useAddonState } from "@storybook/manager-api";

import { ADDON_ID, PANEL_ID } from "src/constants";
import { Panel } from "src/components";

function Title() {
  const [events] = useAddonState(ADDON_ID, []);

  let prefix = "";

  if (events.length > 0) {
    prefix = ` (${events.length})`;
  }

  return `👀 dataLayer watcher${prefix}`;
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title,
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});

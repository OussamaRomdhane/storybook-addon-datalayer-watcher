import React from "react";
import { AddonPanel } from "@storybook/components";

import { PanelContent } from "../PanelContent/PanelContent";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <PanelContent />
    </AddonPanel>
  );
};

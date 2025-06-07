import React, { useCallback } from "react";
import { Button } from "storybook/internal/components";

import { getStorybookIframe } from "src/utils/storybook";

import { Bar, Container } from "./PanelActionsBar.style";

export const PanelActionsBar = () => {
  const handleClear = useCallback(() => {
    const iFrame = getStorybookIframe();

    if (iFrame?.contentWindow) {
      iFrame.contentWindow.dataLayer = [];
    }
  }, []);

  return (
    <Container>
      <Bar>
        <Button onClick={handleClear}>🗑️ Clear dataLayer</Button>
      </Bar>
    </Container>
  );
};

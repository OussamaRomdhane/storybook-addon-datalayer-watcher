import React, { useCallback } from "react";
import { IconButton, Icons, Spaced } from "@storybook/components";

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
        <IconButton onClick={handleClear}>
          <Icons icon="trash" />
          Clear dataLayer
        </IconButton>
      </Bar>
    </Container>
  );
};

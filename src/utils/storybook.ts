type StorybookIframeWithDataLayer = HTMLIFrameElement & {
  contentWindow: { dataLayer?: Record<string, unknown>[] };
};

type StorybookIframe = StorybookIframeWithDataLayer | undefined;

export const getStorybookIframe = () => {
  return document.getElementById("storybook-preview-iframe") as StorybookIframe;
};

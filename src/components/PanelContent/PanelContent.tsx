import React, { useEffect } from "react";

import { ObjectInspector } from "react-inspector";
import { isEqual } from "lodash";

import { withTheme } from "storybook/theming";
import { STORY_CHANGED } from "storybook/internal/core-events";
import { useAddonState, useChannel } from "storybook/manager-api";

import { getStorybookIframe } from "src/utils/storybook";
import { ADDON_ID, COUNT_SYMBOL } from "src/constants";

import { Container, EventItem, Counter } from "./PanelContent.style";
import { InspectorProps } from "./PanelConent.types";
import { PanelActionsBar } from "../PanelActionsBar/PanelActionsBar";

export const PanelContent = () => {
  const scrollToRef = React.useRef<HTMLDivElement>(null);
  const [events, setEvents] = useAddonState(ADDON_ID, []);

  const ThemedInspector = withTheme(
    ({ key, theme, ...props }: InspectorProps) => (
      <ObjectInspector
        theme={theme.addonActionsTheme || "chromeLight"}
        table={false}
        expandLevel={0}
        sortObjectKeys
        showNonenumerable={false}
        key={key}
        {...props}
      />
    ),
  );

  const eventsWithCount: Record<string | symbol, unknown>[] = events.reduce(
    (acc, current, index, eventsOriginal) => {
      if (isEqual(eventsOriginal[index - 1], current)) {
        acc[acc.length - 1][COUNT_SYMBOL] += 1;
      } else {
        acc.push({ ...current, [COUNT_SYMBOL]: 1 });
      }
      return acc;
    },
    [],
  );

  useChannel({
    [STORY_CHANGED]: () => {
      const iframe = getStorybookIframe();

      if (iframe?.contentWindow) {
        iframe.contentWindow.dataLayer = [];
      }
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDataLayer = getStorybookIframe()?.contentWindow?.dataLayer ?? [];

      if (events.length === newDataLayer.length) {
        return;
      }

      if (isEqual(events, newDataLayer)) {
        return;
      }

      setEvents([...newDataLayer]);
    }, 100);

    return () => clearInterval(intervalId);
  }, [events, setEvents]);

  useEffect(() => {
    if (events.length) {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [events.length]);

  return (
    <>
      <PanelActionsBar />
      <Container>
        {eventsWithCount.map((event, index) => {
          const shouldDisplayCounter =
            typeof event[COUNT_SYMBOL] === "number" && event[COUNT_SYMBOL] > 1;

          return (
            <EventItem>
              {shouldDisplayCounter && <Counter>{event[COUNT_SYMBOL]}</Counter>}
              <ThemedInspector
                key={index}
                name={String(event.event)}
                data={event}
              />
            </EventItem>
          );
        })}
        <div ref={scrollToRef} />
      </Container>
    </>
  );
};

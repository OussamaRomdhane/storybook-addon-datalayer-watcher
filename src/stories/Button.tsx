import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  labels: string[];
  onClick?: () => void;
}

const primariesOrder = [false, true, false];
const sizesOrder = ["small", "medium", "large"];

export const Button = ({ labels, ...props }: ButtonProps) => {
  return (
    <div className="storybook-button--container">
      {labels.map((label, index) => {
        const size = sizesOrder[index % primariesOrder.length];
        const isPrimary = primariesOrder[index % primariesOrder.length];

        const mode = isPrimary
          ? "storybook-button--primary"
          : "storybook-button--secondary";

        return (
          <button
            key={index}
            type="button"
            className={[
              "storybook-button",
              `storybook-button--${size}`,
              mode,
            ].join(" ")}
            {...props}
            onClick={() => {
              if ((window as any).dataLayer === undefined) {
                (window as any).dataLayer = [];
              }
              (window as any).dataLayer.push({
                event: "storybook-button-clicked",
                label: label,
                type: "button",
                isPrimary: isPrimary,
                anotherProperty: "anotherValue",
                yetAnotherProperty: "yetAnotherValue",
                aFinalProperty: "aFinalValue",
                // This is a very long description that should be truncated
                description: `Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. 
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                  ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                  adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel 
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
              });
              props.onClick && props.onClick();
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

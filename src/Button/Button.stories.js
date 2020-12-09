import Button from "./Button";

export default {
  title: "Button",
};

export const DefaultButton = () => <Button>click me!</Button>;
export const OutlineButton = () => <Button outline>click me!</Button>;
export const SmallButton = () => <Button size="small">click me!</Button>;
export const LargeButton = () => <Button size="large">click me!</Button>;

import { Props } from "./BreweryItem";

const getString = ({
  str,
  shouldAddComma,
}: {
  str?: string;
  shouldAddComma?: boolean;
}) => (str != null ? str + (shouldAddComma ? ", " : "") : "");

export const getAddress = ({ city, street }: Partial<Props>) =>
  `${getString({ str: street, shouldAddComma: true })}${getString({
    str: city,
  })}`;

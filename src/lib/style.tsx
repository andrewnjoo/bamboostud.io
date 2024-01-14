export const headingClass = "text-3xl sm:text-4xl";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

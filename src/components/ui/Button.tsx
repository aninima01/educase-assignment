const primaryStyles =
  "bg-primary text-white hover:bg-violet-900 cursor-pointer";
const secondaryStyles =
  "bg-secondary text-violet-900 hover:bg-violet-500 hover:text-white cursor-pointer";
const disabledStyles = "cursor-not-allowed bg-neutral-400 text-white";
export const Button = ({
  text,
  disabled = false,
  variant,
}: {
  text: string;
  variant: "primary" | "secondary";
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className={`${
        disabled
          ? disabledStyles
          : variant === "primary"
          ? primaryStyles
          : secondaryStyles
      }   w-full rounded-md px-[16px] py-[10px]  text-[14px] font-semibold`}
    >
      {text}
    </button>
  );
};

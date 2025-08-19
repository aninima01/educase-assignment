export const Input = ({
  label,
  placeholder,
  type,
  required = false,

  onChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full">
      <label className="absolute text-[12px] top-0 left-5 font-semibold -translate-y-1/2 bg-base px-[4px] text-primary ">
        {label}

        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={onChange}
        required={required}
        className="border border-neutral-400 rounded-md p-[8px] w-full"
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
};

export const Card = ({
  img,
  content,
  name,
  email,
}: {
  img: string;
  content: string;
  name: string;
  email: string;
}) => {
  return (
    <div className="text-neutral-700 text-[14px] flex flex-col border-b-1 border-dashed border-neutral-300 gap-[20px] p-[18px]">
      <div className="flex gap-[12px]">
        <div>
          <img
            className="rounded-4xl h-[60px] w-[60px] object-cover"
            src={img}
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="font-semibold">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

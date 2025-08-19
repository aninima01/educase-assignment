export const Heading = ({ content }: { content: string }) => {
  return (
    <h1 className="text-neutral-900 w-full text-[28px] font-bold leading-[1]">
      {content}
    </h1>
  );
};

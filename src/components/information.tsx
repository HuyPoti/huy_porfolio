interface InformationProps{
    title: string,
    content: React.ReactNode;
}
export default function Information({ title, content }: InformationProps) {
  return (
    <div className="flex gap-6 pt-3">
      <span className="text-3xl font-bold">{title}</span>
      <span className="text-2xl ml-5 max-w-[500px]">{content}</span>
    </div>
  );
}
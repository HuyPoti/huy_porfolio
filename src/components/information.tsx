interface InformationProps {
  title: string;
  content: React.ReactNode;
}
export default function Information({ title, content }: InformationProps) {
  return (
    <div className="flex flex-col gap-2 p-2">
      <span className="text-3xl font-black uppercase tracking-wider text-cyan-400">
        {title}
      </span>
      <div className="text-2xl md:text-3xl font-bold text-white leading-relaxed break-words">
        {content}
      </div>
    </div>
  );
}

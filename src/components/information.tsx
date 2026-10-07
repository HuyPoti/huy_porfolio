interface InformationProps {
  title: string;
  content: React.ReactNode;
}
export default function Information({ title, content }: InformationProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </span>
      <div className="text-base sm:text-lg font-semibold text-slate-900 leading-snug break-words">
        {content}
      </div>
    </div>
  );
}

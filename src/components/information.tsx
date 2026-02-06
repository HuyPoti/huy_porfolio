interface InformationProps {
  title: string;
  content: React.ReactNode;
}
export default function Information({ title, content }: InformationProps) {
  return (
    <div
      className="flex gap-6 pt-3 px-6 py-4 bg-white/90 border border-gray-200 rounded-xl shadow-sm items-center transition hover:shadow-md hover:border-blue-400 mb-3"
      style={{ minHeight: 64 }}
    >
      <div className="text-lg md:text-2xl font-semibold text-blue-700 min-w-[120px]">
        {title}
      </div>
      <div className="text-base md:text-xl text-gray-800 max-w-[500px] break-words">
        {content}
      </div>
    </div>
  );
}

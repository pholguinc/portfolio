import { CircleSolid } from "@mynaui/icons-react";
import "@/components/TimeLine/index.css"; 

interface TimeLineProps {
  readonly item: {
    readonly title: string;
    readonly institution: string;
    readonly description: string;
    readonly date: string;
    readonly hasCertificate?: boolean;
  };
}

export default function TimeLine({ item }: TimeLineProps) {
  return (
    <div className="training-item flex items-start space-x-4">
      <div className="flex-shrink-0 relative">
        {/* Circle */}
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <CircleSolid size={16} className="text-purple-500" />
        </div>
      </div>

      <div className="text-sm flex-1">
        <p className="font-semibold">{item.title}</p>
        <p className="text-purple-300 text-xs mt-2">{item.date}</p>
        <p className="text-gray-400">{item.institution}</p>
        <p className="text-gray-300">{item.description}</p>

        {item.hasCertificate && (
          <p className="text-xs text-green-400 mt-1">Certificate obtained</p>
        )}
      </div>
    </div>
  );
}

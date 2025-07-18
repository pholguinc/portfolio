'use client';
import { ArrowLongUpRight } from "@mynaui/icons-react";
interface TimeLineProps {
  readonly item: {
    readonly title: string;
    readonly institution: string;
    readonly description: string;
    readonly date: string;
    readonly hasCertificate?: boolean;
    readonly certificateLink?: string; // Enlace opcional para el certificado
  };
}

export default function TimeLine({ item }: TimeLineProps) {
  let certificateContent;

  // Determinamos el contenido del certificado
  if (item.hasCertificate && item.certificateLink) {
    certificateContent = (
      <a
        href={item.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-green-400 mt-2 hover:underline transition duration-200 flex items-center"
      >
        Certificado <ArrowLongUpRight size={15}/> 
      </a>
    );
  } else if (item.hasCertificate) {
    certificateContent = (
      <p className="text-sm text-green-400 mt-2">Certificados</p>
    );
  }

  return (
    <div className="relative py-6 pl-8 sm:pl-32 group">
      <h3 className="mb-1 text-2xl font-bold sm:mb-0 bg-gradient-to-r from-purple-600 to-violet-200 bg-clip-text text-transparent">
        {item.title}
      </h3>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-22 h-7 mb-3 sm:mb-0 text-white bg-gradient-to-r from-stone-900 to-gray-500 rounded-full border border-white px-2">
          {item.date}
        </time>
        <p className="text-xl font-bold bg-gradient-to-r from-[#929292] to-[#2C2C2C]bg-gradient-to-l from-gray-400 to-gray-500 bg-clip-text text-transparent">
          {item.institution}
        </p>
      </div>
      <p className="text-white max-w-md">{item.description}</p>
      {certificateContent} {/* Aquí mostramos el contenido del certificado */}
    </div>
  );
}

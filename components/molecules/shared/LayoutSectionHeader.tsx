"use client";

type LayoutSectionHeaderProps = {
  title: string;
  subtitle?: string;
};

function LayoutSectionHeader({ title, subtitle }: LayoutSectionHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="font-bold font-roboto text-3xl">{title}</h1>
      {subtitle && (
        <h3 className="font-medium roboto text-base opacity-60 mt-1 pl-1">{subtitle}</h3>
      )}
    </div>
  );
}

export default LayoutSectionHeader;

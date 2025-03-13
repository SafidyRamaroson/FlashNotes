"use client";

import { Input } from "@/components/ui/input";
import React from "react";

type InputSearchProps = {
  placeholder: string;
  value: string | null;
  setValue: (value: string) => void;
};

function InputSearch({ value, placeholder, setValue }: InputSearchProps) {
  return (
    <div className="relative flex items-center w-full flex-1">
      <Input
        type="text"
        value={value || undefined}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="rounded-md w-full h-[40px] pl-4 pr-10 text-base bg-white-50"
      />
    </div>
  );
}

export { InputSearch };

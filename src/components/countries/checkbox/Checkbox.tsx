import clsx from "clsx";
import Image from "next/image";

interface Props {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ name, label, checked, onChange }: Props) => {
  return (
    <label
      htmlFor={name}
      className="flex items-center relative cursor-pointer text-sm text-white h-6 pl-9 select-none"
    >
      {label}
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 cursor-pointer w-0 h-0 peer"
      />
      <span className="absolute top-0 left-0 w-6 h-6 peer-checked:bg-blue border-2 border-gray peer-checked:border-transparent rounded overflow-hidden box">
        <Image
          src={'/Done_round.svg'}
          alt="checked_icon"
          width={24}
          height={24}
          priority
          className={clsx(
            'w-full',
            { 'block': checked },
            { 'hidden': !checked }
          )}
        />
      </span>
    </label>
  );
};

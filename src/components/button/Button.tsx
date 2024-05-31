import clsx from "clsx";

interface Props {
  isActive: boolean;
  children: string;
  onClick: () => void;
}

export const Button = ({ isActive, children, onClick }: Props) => {
  return (
    <button
      className={clsx(
        'text-gray text-sm px-3 py-[7px] rounded-xl',
        { 'bg-light-black text-white': isActive }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

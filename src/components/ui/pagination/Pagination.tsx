'use client';

import { redirect, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = parseInt(searchParams.get('page') ?? '1');
  const currentPage = isNaN(pageString) ? 1 : pageString;

  if (currentPage < 1 || isNaN(pageString)) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    redirect(`${pathname}?${params.toString()}`);
  }

  const paginationNumbers = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') return `${pathname}?${params.toString()}`;
    if (+pageNumber < 1) return `${pathname}?${params.toString()}`;
    if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`;

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-1 sm:gap-2 p-4">
      <Link
        href={createPageUrl(currentPage - 1)}
        className={clsx(
          "text-xs sm:text-sm px-[10px] sm:px-3 py-1 rounded-md flex items-center justify-center",
          { "pointer-events-none text-gray bg-gray/15": currentPage <= 1 },
          { "text-white bg-gray/35": currentPage > 1 }
        )}
      >
        {<FaLessThan size={10} />}
      </Link>

      {paginationNumbers.map((pageNumber, index) => (
        <Link
          key={index}
          href={createPageUrl(pageNumber)}
          className={clsx(
            'text-white text-xs sm:text-sm px-[10px] sm:px-3 py-1 rounded-md flex items-center justify-center',
            { 'bg-blue': pageNumber.toString() === currentPage.toString() },
            { 'bg-gray/35': pageNumber.toString() !== currentPage.toString() },
            { 'pointer-events-none': pageNumber.toString() === '...' }
          )}
        >
          {pageNumber === '...' ? <BsThreeDots /> : pageNumber}
        </Link>
      ))}

      <Link
        href={createPageUrl(currentPage + 1)}
        className={clsx(
          "text-xs sm:text-sm px-[10px] sm:px-3 py-1 rounded-md flex items-center justify-center",
          { "pointer-events-none text-gray bg-gray/15": currentPage >= totalPages },
          { "text-white bg-gray/35": currentPage < totalPages }
        )}
      >
        {<FaGreaterThan size={10} />}
      </Link>
    </div>
  )
}

'use client';

import React from 'react';

interface ExcelCellProps {
  children?: React.ReactNode;
  className?: string;
}

const ExcellCell = ({ children, className }: ExcelCellProps) => (
  <div className={`border border-gray-300 dark:border-gray-700 p-2 ${className}`}>
    {children}
  </div>
);

export default ExcellCell;

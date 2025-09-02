import { useState } from 'react';

interface UseExpandableListProps<T> {
  items: T[];
  defaultShowCount?: number;
}

export function useExpandableList<T>({ items, defaultShowCount = 8 }: UseExpandableListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedItems = isExpanded ? items : items.slice(0, defaultShowCount);
  const hasMoreItems = items.length > defaultShowCount;

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const expand = () => setIsExpanded(true);
  const collapse = () => setIsExpanded(false);

  return {
    displayedItems,
    isExpanded,
    hasMoreItems,
    toggleExpanded,
    expand,
    collapse,
    totalCount: items.length,
    hiddenCount: items.length - defaultShowCount,
  };
}

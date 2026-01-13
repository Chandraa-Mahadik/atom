import { cva } from 'class-variance-authority';

export const radioGroupVariants = cva('flex gap-2', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row flex-wrap',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
});

export const radioItemVariants = cva(
  [
    'aspect-square h-4 w-4 rounded-full',
    'border border-[var(--atom-theme-border-primary)]',
    'bg-[var(--atom-theme-surface-primary)]',
    'text-[var(--atom-primary)]',
    'transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atom-ring-color)]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'cursor-pointer',
  ].join(' ')
);

export const getThemeClasses = (isDark) => ({
  background: isDark ? 'bg-neutral-900' : 'bg-white',
  text: isDark ? 'text-neutral-300' : 'text-neutral-800',
  border: isDark ? 'border-neutral-800' : 'border-gray-200',
  card: isDark ? 'bg-neutral-800' : 'bg-gray-100',
  hover: isDark ? 'hover:bg-neutral-700' : 'hover:bg-gray-200',
});
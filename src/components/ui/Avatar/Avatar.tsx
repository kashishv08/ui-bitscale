import type { AvatarProps, AvatarSize } from '../../../types';

const SIZE_CLASSES: Record<AvatarSize, string> = {
  sm: 'w-5 h-5 text-[9px]',
  md: 'w-6 h-6 text-[10px]',
  lg: 'w-8 h-8 text-xs',
};

const Avatar = ({ initials, color, size = 'md' }: AvatarProps) => (
  <div
    className={`${SIZE_CLASSES[size]} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
    style={{ background: color }}
    aria-label={`Avatar for ${initials}`}
  >
    {initials}
  </div>
);

export default Avatar;

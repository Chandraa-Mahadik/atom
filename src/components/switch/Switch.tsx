// src/components/switch/Switch.tsx
import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/cn'
import { switchVariants, thumbConfig, type SwitchProps } from './switchVariants'

const MotionThumb = motion(SwitchPrimitive.Thumb)

/* ---------- Icons ---------- */

const SunIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" fill="white" />
    <path
      d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const MoonIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
  </svg>
)

const StarIcon = ({ size = 8 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3 6.3 7 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.1 2 9.3l7-1z" />
  </svg>
)

/* ---------- Component ---------- */

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    { className, variant, size, fullWidth, checked, onCheckedChange, ...props },
    ref
  ) => {
    const [internal, setInternal] = React.useState<boolean>(checked ?? false)
    const [animate, setAnimate] = React.useState(false)

    const resolvedSize = size ?? 'md'
    const cfg = thumbConfig[resolvedSize]
    const iconSize = resolvedSize === 'sm' ? 10 : resolvedSize === 'md' ? 12 : 14

    React.useEffect(() => {
      if (checked !== undefined) setInternal(checked)
    }, [checked])

    const handleChange = (value: boolean) => {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 250)
      setInternal(value)
      onCheckedChange?.(value)
    }

    return (
      <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        className={cn(
          switchVariants({ variant, size: resolvedSize, fullWidth }),
          className
        )}
        checked={internal}
        onCheckedChange={handleChange}
        {...props}
      >
        {/* THEME ICONS */}
        {variant === 'theme' && (
          <AnimatePresence mode="wait">
            {!internal ? (
              <motion.div
                key="sun"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-amber-500"
                initial={{ opacity: 0, scale: 0.4, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
              >
                <SunIcon size={iconSize} />
              </motion.div>
            ) : (
              <>
                <motion.div
                  key="moon"
                  className="absolute left-1 top-1/2 -translate-y-1/2 text-white/80"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <MoonIcon size={iconSize} />
                </motion.div>

                <motion.div
                  key="star"
                  className="absolute right-3 top-1 text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <StarIcon />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}

        {/* THUMB */}
        <MotionThumb
          data-slot="switch-thumb"
          className={cn(
            cfg.size,
            'block rounded-full bg-[var(--atom-bg)] shadow-md'
          )}
          animate={{
            x: internal ? cfg.translateX : 0,
            scaleX: animate ? [1, 1.25, 1] : 1,
            scaleY: animate ? [1, 0.9, 1] : 1,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </SwitchPrimitive.Root>
    )
  }
)

Switch.displayName = 'Switch'

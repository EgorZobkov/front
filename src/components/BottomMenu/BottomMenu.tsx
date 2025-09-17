import { motion } from 'framer-motion'
import {
  Home,
  LogOut,
  MessageSquare,
  PlusCircle,
  User,
  type LucideIcon,
} from 'lucide-react'
import './BottomMenu.css'

type MenuItemProps = {
  icon: LucideIcon
  label: string
  active?: boolean
  badge?: number
}

const BottomMenu = () => {
  return (
    <nav className="bottom-menu" aria-label="Основная навигация">
      <div className="bottom-menu__panel">
        <MenuItem icon={Home} label="Главная" active />
        <MenuItem icon={MessageSquare} label="Сообщения" badge={3} />
        <motion.button
          type="button"
          className="bottom-menu__action"
          whileTap={{ scale: 0.9 }}
          aria-label="Создать"
        >
          <PlusCircle className="bottom-menu__action-icon" aria-hidden="true" />
        </motion.button>
        <MenuItem icon={User} label="Профиль" />
        <MenuItem icon={LogOut} label="Выйти" />
      </div>
    </nav>
  )
}

const MenuItem = ({ icon: Icon, label, active = false, badge }: MenuItemProps) => {
  const ariaLabel = badge ? `${label}. ${badge} новых.` : label

  return (
    <motion.button
      type="button"
      className={`bottom-menu__item${active ? ' bottom-menu__item--active' : ''}`}
      whileTap={{ scale: 0.92 }}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
    >
      <span className="bottom-menu__icon" aria-hidden="true">
        <Icon />
      </span>
      {typeof badge === 'number' && (
        <span className="bottom-menu__badge" aria-hidden="true">
          {badge}
        </span>
      )}
      <span className="bottom-menu__label">{label}</span>
    </motion.button>
  )
}

export default BottomMenu

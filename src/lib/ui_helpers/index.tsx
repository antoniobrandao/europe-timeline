import { Fields } from '@/lib/constants/enums'

export const getFieldTextColor = (field: Fields) => {
    switch (field) {
      case Fields.METAPHYSICS:
        return 'text-purple-500'
      case Fields.POLITICS:
        return 'text-red-500'
      case Fields.SCIENCE:
        return 'text-blue-400'
      case Fields.THEOLOGY:
        return 'text-yellow-500'
      case Fields.MIND:
        return 'text-green-500'
      case Fields.HISTORY:
        return 'text-pink-500'
      case Fields.MIND:
        return 'text-red-500'
    }
  }
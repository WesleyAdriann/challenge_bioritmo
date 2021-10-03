import recommendedMask from '../../../assets/images/mask/recommended-mask.png'
import requiredMask from '../../../assets/images/mask/required-mask.png'

import recommendedTowel from '../../../assets/images/towel/recommended-towel.png'
import requiredTowel from '../../../assets/images/towel/required-towel.png'

import forbiddenFountain from '../../../assets/images/fountain/forbidden-fountain.png'
import partialFountain from '../../../assets/images/fountain/partial-fountain.png'

import forbiddenLockerroom from '../../../assets/images/lockerroom/forbidden-lockerroom.png'
import partialLockerroom from '../../../assets/images/lockerroom/partial-lockerroom.png'
import requiredLockerroom from '../../../assets/images/lockerroom/required-lockerroom.png'

export const images = {
  mask: {
    recommended: recommendedMask,
    required: requiredMask
  },
  towel: {
    recommended: recommendedTowel,
    required: requiredTowel
  },
  fountain: {
    partial: partialFountain,
    not_allowed: forbiddenFountain
  },
  locker_room: {
    allowed: requiredLockerroom,
    closed: forbiddenLockerroom,
    partial: partialLockerroom
  }
}

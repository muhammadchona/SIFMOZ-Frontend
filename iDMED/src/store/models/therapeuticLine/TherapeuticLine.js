import { Model } from '@vuex-orm/core'
import PrescriptionDetail from '../prescriptionDetails/PrescriptionDetail'

export default class TherapeuticLine extends Model {
  static entity = 'therapeuticLines'
  static fields () {
    return {
      id: this.attr(null),
      code: this.attr(''),
      description: this.attr(''),
      prescriptionDetails: this.hasMany(PrescriptionDetail, 'therapeutic_line_id')
    }
  }
}

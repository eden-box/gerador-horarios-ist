export enum ClassType {
  // Portuguese
  THEORY_PT = 'Teórico',
  LAB_PT = 'Laboratório',
  PROBLEMS_PT = 'Problemas',
  SEMINARY_PT = 'Seminários',
  TUTORIAL_ORIENTATION_PT = 'Orientação Tutorial',
  TRAINING_PERIOD_PT = 'Estágio',
  FIELD_WORK_PT = 'Trabalho de Campo',

  // English
  THEORY_EN = 'Theory',
  LAB_EN = 'Lab',
  PROBLEMS_EN = 'Problems',
  SEMINARY_EN = 'Seminary',
  TUTORIAL_ORIENTATION_EN = 'Tutorial Orientation',
  TRAINING_PERIOD_EN = 'Training Period',
  FIELD_WORK_EN = 'Field Work',

  NONE = 'No class type found'
}

export function minifyClassType(type: ClassType): string {
  switch (type) {
    case ClassType.THEORY_PT:
    case ClassType.THEORY_EN:
      return 'T';

    case ClassType.LAB_PT:
    case ClassType.LAB_EN:
      return 'L';

    case ClassType.PROBLEMS_PT:
    case ClassType.PROBLEMS_EN:
      return 'Pb';

    case ClassType.SEMINARY_PT:
    case ClassType.SEMINARY_EN:
      return 'S';

    case ClassType.TUTORIAL_ORIENTATION_PT:
    case ClassType.TUTORIAL_ORIENTATION_EN:
      return 'OT';

    case ClassType.TRAINING_PERIOD_PT:
    case ClassType.TRAINING_PERIOD_EN:
      return 'E';

    case ClassType.FIELD_WORK_PT:
    case ClassType.FIELD_WORK_EN:
      return 'TC';

    case ClassType.NONE:
    default:
      return '';
  }
}

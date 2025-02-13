export interface Exercise {
  name: string;
  movementPattern: MovementPattern;
  primaryCategory: ExerciseCategory;
  categories: ExerciseCategory[];
  subcategories: ExerciseSubcategory[];
  primaryMover: PrimaryMover[];
  secondaryMover: SecondaryMover[];
  stabilizers: Stabilizer[];
  video_url?: string;
  notes?: string;
  equipment: Equipment[];
  difficulty: Difficulty;
}

export interface ExerciseCategoryAndSubCategories {
  category: ExerciseCategory;
  description: string;
  subcategories: { subcategory: ExerciseSubcategory; description: string }[];
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Equipment =
  | 'barbell'
  | 'kettlebell'
  | 'dumbbell'
  | 'body weight'
  | 'battle ropes'
  | 'sled'
  | 'assault bike';

export type MovementPattern =
  | 'Squat'
  | 'Hinge'
  | 'Horizontal Press'
  | 'Horizontal Pull'
  | 'Vertical Push'
  | 'Vertical Pull'
  | 'Core Rotation'
  | 'Core Anti-Rotation';

export type ExerciseCategory =
  | 'Strength and Power'
  | 'Hypertrophy and BodyBuilding'
  | 'Endurance and Conditioning'
  | 'Mobility, Flexibility and Stability'
  | 'Functional and Athletic Training'
  | 'Unilateral and Core-Specific Training';

export type ExerciseSubcategory =
  | 'Strength'
  | 'Power'
  | 'Isometric Strength'
  | 'Hypertrophy'
  | 'Isolation'
  | 'Time Under Tension'
  | 'Cardiovascular Endurance'
  | 'Muscular Endurance'
  | 'High Intensity Interval Training (HIIT)'
  | 'Circuit Training'
  | 'Mobility'
  | 'Flexibility'
  | 'Stability And Balance'
  | 'Functional Strength'
  | 'Agility'
  | 'Plyometrics'
  | 'Speed And Acceleration'
  | 'Rotational Power'
  | 'Unilateral Training'
  | 'Core Strength'
  | 'Anti-Rotation And Anti-Flexion';

export type PrimaryMover =
  | 'Chest'
  | 'Upper Back'
  | 'Lower Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms And Grip'
  | 'Core'
  | 'Glutes'
  | 'Quads'
  | 'Hamstrings'
  | 'Calves';

export type SecondaryMover =
  | 'Upper Chest'
  | 'Lower Chest'
  | 'Traps'
  | 'Rhomboids And Scapular Muscles'
  | 'Rear Delts'
  | 'Hip Flexors'
  | 'Adductors (Inner Thigh Muscles)'
  | 'Abductors (Glute Medius And Minimus, Tensor Fasciae Latae)'
  | 'Lower Back (Erector Spinae, Multifidus)'
  | 'Forearms';

export type Stabilizer =
  | 'Core'
  | 'Rotator Cuff'
  | 'Traps & Scapular Stabilizers'
  | 'Forearms & Grip Strength'
  | 'Hip Stabilizers'
  | 'Lower Back'
  | 'Calves & Ankle Stabilizers';

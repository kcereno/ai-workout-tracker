import {
  Equipment,
  ExerciseCategoryAndSubCategories,
  MovementPattern,
  PrimaryMover,
  SecondaryMover,
  Stabilizer,
} from '@/types/exercise';

export const movementPatterns: MovementPattern[] = [
  'Squat',
  'Hinge',
  'Horizontal Press',
  'Horizontal Pull',
  'Vertical Push',
  'Vertical Pull',
  'Core Rotation',
  'Core Anti-Rotation',
];

export const equipmentArray: Equipment[] = [
  'barbell',
  'kettlebell',
  'dumbbell',
  'body weight',
  'battle ropes',
  'sled',
  'assault bike',
];

export const primaryMoversArray: PrimaryMover[] = [
  'Chest',
  'Upper Back',
  'Lower Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Forearms And Grip',
  'Core',
  'Glutes',
  'Quads',
  'Hamstrings',
  'Calves',
];

export const secondaryMoversArray: SecondaryMover[] = [
  'Upper Chest',
  'Lower Chest',
  'Traps',
  'Rhomboids And Scapular Muscles',
  'Rear Delts',
  'Hip Flexors',
  'Adductors (Inner Thigh Muscles)',
  'Abductors (Glute Medius And Minimus, Tensor Fasciae Latae)',
  'Lower Back (Erector Spinae, Multifidus)',
  'Forearms',
];

export const stabilizersArray: Stabilizer[] = [
  'Core',
  'Rotator Cuff',
  'Traps & Scapular Stabilizers',
  'Forearms & Grip Strength',
  'Hip Stabilizers',
  'Lower Back',
  'Calves & Ankle Stabilizers',
];

export const exerciseCategoriesAndSubCategories: ExerciseCategoryAndSubCategories[] =
  [
    {
      category: 'Strength and Power',
      description:
        'These focus on maximal force production, explosive power, and overall muscle recruitment.',
      subcategories: [
        {
          subcategory: 'Strength',
          description:
            'Heavy compound lifts, maximal force production (e.g., Squats, Deadlifts, Bench Press)',
        },
        {
          subcategory: 'Power',
          description:
            'Explosive movements that generate force quickly (e.g., Snatch, Clean And Jerk, Medicine Ball Throws)',
        },
        {
          subcategory: 'Isometric Strength',
          description:
            'Static holds for strength development (e.g., Plank, Wall Sit, Dead Hang)',
        },
      ],
    },
    {
      category: 'Hypertrophy and BodyBuilding',
      description:
        'These exercises prioritize muscle size, volume, and controlled movement patterns.',
      subcategories: [
        {
          subcategory: 'Hypertrophy',
          description:
            'Muscle-building through controlled time under tension (e.g., Bicep Curls, Leg Press, Tricep Extensions)',
        },
        {
          subcategory: 'Isolation',
          description:
            'Single-joint movements targeting specific muscles (e.g., Lateral Raises, Hamstring Curls)',
        },
        {
          subcategory: 'Time Under Tension',
          description:
            'Slow and controlled reps to increase muscle stress (e.g., Paused Squats, Slow Push-Ups)',
        },
      ],
    },
    {
      category: 'Endurance and Conditioning',
      description:
        'These exercises focus on muscular endurance, cardiovascular fitness, and stamina.',
      subcategories: [
        {
          subcategory: 'Cardiovascular Endurance',
          description:
            'Activities that improve heart and lung capacity (e.g., Running, Rowing, Jump Rope)',
        },
        {
          subcategory: 'Muscular Endurance',
          description:
            'High-rep resistance training for prolonged exertion (e.g., Bodyweight Squats, Battle Ropes)',
        },
        {
          subcategory: 'High Intensity Interval Training (HIIT)',
          description:
            'Short bursts of intense exercise (e.g., Burpees, Kettlebell Swings)',
        },
        {
          subcategory: 'Circuit Training',
          description:
            'Sequential exercises with minimal rest (e.g., EMOM, AMRAP workouts)',
        },
      ],
    },
    {
      category: 'Mobility, Flexibility and Stability',
      description:
        'Exercises that enhance joint health, flexibility, and movement control.',
      subcategories: [
        {
          subcategory: 'Mobility',
          description:
            'Active movements to improve range of motion (e.g., Cossack Squats, Deep Squat Holds)',
        },
        {
          subcategory: 'Flexibility',
          description:
            'Static or dynamic stretches (e.g., Hamstring Stretch, Shoulder Dislocates)',
        },
        {
          subcategory: 'Stability And Balance',
          description:
            'Exercises improving control and coordination (e.g., Single-Leg Deadlifts, Pallof Press)',
        },
      ],
    },
    {
      category: 'Functional and Athletic Training',
      description:
        'These focus on real-world movement patterns, coordination, and sports-specific performance.',
      subcategories: [
        {
          subcategory: 'Functional Strength',
          description:
            'Exercises mimicking daily life and sport actions (e.g., Turkish Get-Ups, Farmer’s Carries)',
        },
        {
          subcategory: 'Agility',
          description:
            'Quick direction changes (e.g., Ladder Drills, Cone Drills)',
        },
        {
          subcategory: 'Plyometrics',
          description:
            'Explosive jumping or bounding (e.g., Box Jumps, Depth Jumps)',
        },
        {
          subcategory: 'Speed And Acceleration',
          description:
            'Sprinting, resisted sprints, sled pushes (e.g., Hill Sprints, Prowler Push)',
        },
        {
          subcategory: 'Rotational Power',
          description:
            'Core and hip-driven torque (e.g., Medicine Ball Slams, Russian Twists)',
        },
      ],
    },
    {
      category: 'Unilateral and Core-Specific Training',
      description:
        'These target asymmetries, core engagement, and postural stability.',
      subcategories: [
        {
          subcategory: 'Unilateral Training',
          description:
            'Single-limb work for balance and correction (e.g., Bulgarian Split Squat, Single-Arm Press)',
        },
        {
          subcategory: 'Core Strength',
          description:
            'Midsection-focused exercises (e.g., Hanging Leg Raises, Ab Rollouts)',
        },
        {
          subcategory: 'Anti-Rotation And Anti-Flexion',
          description:
            'Core stabilization (e.g., Pallof Press, Suitcase Carry)',
        },
      ],
    },
  ];

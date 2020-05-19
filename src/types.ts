export interface Question {
  type?: 'multiple-choice' | 'multi-answer' | 'essay'
  question: string
  answer: string
  options?: string[]
}

export interface Test {
  questions: Question[]
  title: string
  selfGrade?: true | false
}

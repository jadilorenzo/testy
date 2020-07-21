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

export interface Record<T> {
  fields: T
  id: string
}

export interface test {
  ID: number
  title?: string
  tags?: string
  questions?: string
  userid?: number
}

export interface question {
  ID: number
  question?: string
  answer?: string
  options?: string
  autocheck?: boolean
  type?: 'multiple-choice' | 'multi-answer' | 'essay'
  userid?: number
}

export interface score {
  ID: number
  userid?: number
  test?: number
  scores?: string
}

export interface user {
  ID: number
  username?: string
  password?: string
  active?: boolean
}

export interface testInstance {
  ID: number
  question?: string
  answer?: string
  'correct answer'?: string
  correct?: boolean
  scoreid?: number
}

export interface group {
  ID: number
  name?: string
  users?: string
}

export interface message {
  ID: number
  text: number
  userid: number
}

export interface course {
  ID: number
  title: string
  chapters: string
  userid: number
}

export interface chapter {
  ID: number
  title: string
  lessons: string
}

export interface lesson {
  ID: number
  title: string
  assignments: string
}

export interface assignment {
  ID: number
  type: 'test' | 'reading' | 'chat'
  title: string
  attachments: any
  testid: number
}

export interface Record<T> {
  fields: T
  id: string
}

export interface Test {
  ID: number
  title?: string
  tags?: string
  questions?: string
  userid?: number
}

export interface Question {
  ID: number
  question?: string
  answer?: string
  options?: string
  autocheck?: boolean
  type?: 'multiple-choice' | 'multi-answer' | 'essay'
  userid?: number
}

export interface Score {
  ID: number
  userid?: number
  test?: number
  scores?: string
}

export interface User {
  ID: number
  username?: string
  password?: string
  active?: boolean
}

export interface TestInstance {
  ID: number
  question?: string
  answer?: string
  'correct answer'?: string
  correct?: boolean
  scoreid?: number
}

export interface Group {
  ID: number
  name?: string
  users?: string
}

export interface Message {
  ID: number
  text: number
  userid: number
}

export interface Course {
  ID: number
  title: string
  chapters: string
  userid: number
}

export interface Chapter {
  ID: number
  title: string
  lessons: string
}

export interface Lesson {
  ID: number
  title: string
  assignments: string
}

export interface Assignment {
  ID: number
  type: 'test' | 'reading' | 'chat'
  title: string
  attachments: any
  testid: number
}

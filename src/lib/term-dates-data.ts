// FILE: src/lib/term-dates-data.ts

export type Term = {
  name: string
  start: string
  end: string
  halfTerm?: {
    start: string
    end: string
  }
}

export type AcademicYear = {
  year: string
  terms: Term[]
}

export const ACADEMIC_YEARS: AcademicYear[] = [
  {
    year: '2025–26',
    terms: [
      {
        name: 'Autumn',
        start: '2025-09-03',
        end: '2025-12-19',
        halfTerm: {
          start: '2025-10-27',
          end: '2025-10-31',
        },
      },
      {
        name: 'Spring',
        start: '2026-01-06',
        end: '2026-03-28',
        halfTerm: {
          start: '2026-02-16',
          end: '2026-02-20',
        },
      },
      {
        name: 'Summer',
        start: '2026-04-20',
        end: '2026-07-22',
        halfTerm: {
          start: '2026-05-25',
          end: '2026-05-29',
        },
      },
    ],
  },
  {
    year: '2026–27',
    terms: [
      {
        name: 'Autumn',
        start: '2026-09-02',
        end: '2026-12-18',
        halfTerm: {
          start: '2026-10-26',
          end: '2026-10-30',
        },
      },
      {
        name: 'Spring',
        start: '2027-01-05',
        end: '2027-03-26',
        halfTerm: {
          start: '2027-02-15',
          end: '2027-02-19',
        },
      },
      {
        name: 'Summer',
        start: '2027-04-19',
        end: '2027-07-16',
        halfTerm: {
          start: '2027-05-31',
          end: '2027-06-04',
        },
      },
    ],
  },
]

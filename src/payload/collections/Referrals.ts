import type { CollectionConfig } from 'payload'

const Referrals: CollectionConfig = {
  slug: 'referrals',
  admin: {
    useAsTitle: 'referenceNumber',
    description: 'Online referral submissions from schools and local authorities.',
    defaultColumns: ['referenceNumber', 'referrerSchool', 'ypLastName', 'status', 'createdAt'],
  },
  access: {
    // Only admins can read/update referrals (no public read)
    read: ({ req }) => req.user !== null,
    create: () => true, // Allow API submissions
    update: ({ req }) => req.user !== null,
    delete: ({ req }) => req.user !== null,
  },
  fields: [
    {
      name: 'referenceNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: { readOnly: true, description: 'Auto-generated reference number.' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      required: true,
      options: [
        { label: 'New', value: 'new' },
        { label: 'Under Review', value: 'under-review' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Deferred', value: 'deferred' },
        { label: 'Declined', value: 'declined' },
      ],
      admin: { position: 'sidebar', description: 'Current status of the referral.' },
    },
    // ── Step 1: Referrer ───────────────────────────────────────────────────
    {
      name: 'referrerDetails',
      type: 'group',
      label: 'Referrer Details',
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'role',
          type: 'select',
          required: true,
          options: [
            { label: 'Teacher', value: 'teacher' },
            { label: 'SENCO', value: 'senco' },
            { label: 'Inclusion Manager', value: 'inclusion-manager' },
            { label: 'LA / EHC Coordinator', value: 'la-coordinator' },
            { label: 'Headteacher / Principal', value: 'headteacher' },
            { label: 'Other', value: 'other' },
          ],
        },
        { name: 'school', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text', required: true },
      ],
    },
    // ── Step 2: Young person ───────────────────────────────────────────────
    {
      name: 'youngPerson',
      type: 'group',
      label: 'Young Person',
      fields: [
        { name: 'firstName', type: 'text', required: true },
        { name: 'lastName', type: 'text', required: true },
        { name: 'dateOfBirth', type: 'text', required: true },
        {
          name: 'yearGroup',
          type: 'select',
          required: true,
          options: ['7', '8', '9', '10', '11'].map((y) => ({ label: `Year ${y}`, value: y })),
        },
        { name: 'gender', type: 'text' },
        { name: 'ethnicity', type: 'text' },
      ],
    },
    // ── Step 3: Background ─────────────────────────────────────────────────
    {
      name: 'background',
      type: 'group',
      label: 'Background',
      fields: [
        { name: 'reasonForReferral', type: 'textarea', required: true },
        {
          name: 'hasEHCP',
          type: 'select',
          required: true,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
            { label: 'Pending', value: 'pending' },
          ],
        },
        { name: 'sendNeeds', type: 'text', admin: { description: 'Comma-separated list.' } },
        { name: 'riskFactors', type: 'textarea' },
      ],
    },
    // ── Step 4: Additional info ────────────────────────────────────────────
    {
      name: 'additionalInfo',
      type: 'group',
      label: 'Additional Information',
      fields: [
        { name: 'currentAttendance', type: 'text', required: true },
        { name: 'exclusionHistory', type: 'textarea' },
        { name: 'additionalNotes', type: 'textarea' },
        { name: 'parentConsentGiven', type: 'checkbox', defaultValue: false },
        { name: 'dataProtectionAgreed', type: 'checkbox', defaultValue: false },
      ],
    },
    // ── Internal notes ─────────────────────────────────────────────────────
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes — not visible to the referrer.',
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}

export default Referrals

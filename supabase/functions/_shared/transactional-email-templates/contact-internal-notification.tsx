import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  organization?: string
  role?: string
  describe?: string
  workflow?: string
  nextStep?: string
  message?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Section style={row}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={rowValue}>{value && value.trim() ? value : '—'}</Text>
  </Section>
)

const ContactInternalNotification = (p: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New Nucleations website inquiry from {p.name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New website inquiry</Heading>
        <Text style={lede}>A new contact form submission was received on nucleations.com.</Text>
        <Hr style={hr} />
        <Row label="Name" value={p.name} />
        <Row label="Email" value={p.email} />
        <Row label="Organization" value={p.organization} />
        <Row label="Role / Title" value={p.role} />
        <Row label="What best describes them" value={p.describe} />
        <Row label="Workflow / business area" value={p.workflow} />
        <Row label="Preferred next step" value={p.nextStep} />
        <Row label="Message" value={p.message} />
        <Hr style={hr} />
        <Text style={footer}>Nucleations · contact form notification</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactInternalNotification,
  subject: (d: Record<string, any>) =>
    `New inquiry from ${d.name || 'website visitor'}${d.organization ? ` (${d.organization})` : ''}`,
  displayName: 'Contact form — internal notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@acme.com',
    organization: 'Acme Inc.',
    role: 'Head of Operations',
    describe: 'We have a pilot and need a business case',
    workflow: 'Client onboarding and document review',
    nextStep: 'Book a call',
    message: 'Looking forward to hearing from you.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '32px 28px' }
const h1 = { fontSize: '24px', fontWeight: 700, color: '#3a0676', margin: '0 0 8px' }
const lede = { fontSize: '14px', color: '#55575d', margin: '0 0 16px' }
const hr = { borderColor: '#ece6f4', margin: '20px 0' }
const row = { margin: '0 0 14px' }
const rowLabel = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: '#7d6f95', margin: '0 0 2px' }
const rowValue = { fontSize: '14px', color: '#1a0533', margin: 0, whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#999', margin: '20px 0 0' }
